import React from 'react';
import './FilmDetails.css';
import playIcon from './free-icon-video-70776.svg';
import YouTube from 'react-youtube';
import Raiting from "../Raiting/Raiting";
import Comments from "../Comments/Comments";

export default class FilmDetails extends React.Component {
    state = {
        isHovered: false,
        modalOpen: false
    }

    toggleHover = () => {
        this.setState(prevState => ({isHovered: !prevState.isHovered}));
    }

    onPlayClick = () => {
        this.setState(prevState => ({modalOpen: !prevState.modalOpen}))
    }

    ModalWindowYouTube(url) {
        const opts = {
            height: '390',
            width: '640',
            playerVars: {
                autoplay: 1
            }
        }

        return (
            <div className={'modalYouTube'}>
                <div className="containerForYouTube">
                    <YouTube videoId={`${url}`} opts={opts}/>
                    <div onClick={() => this.setState({modalOpen: false})} className={'closeModalYouTube'}>&#10006;</div>
                </div>
            </div>
        )
    }

    render() {
        const {genre, country, time, producer, yearRelease, name, img} = this.props.films[this.props.film];
        const imgClasses = ['FilmDetailsImg'];
        if (this.state.isHovered) {
            imgClasses.push('FilmDetailsImgBackground');
        }

        return (
            <div>
                <div className='FilmDetailsMain'>
                    {this.state.modalOpen ? this.ModalWindowYouTube(this.props.films[this.props.film].trailer) : null}
                    <div className="wrapImg" onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}>
                        <img className={imgClasses.join(' ')} src={img}/>
                        {this.state.isHovered ? <img onClick={this.onPlayClick} className={'playIcon'} src={playIcon}/> : null}
                    </div>
                    <ul className='FilmDetailsList'>
                        <li>Название: {name}</li>
                        <li>Год: {yearRelease}</li>
                        <li>Страна: {country}</li>
                        <li>Жанр: {genre}</li>
                        <li>Время: {time}</li>
                        <li>Режисер: {producer}</li>
                        <Raiting id={this.props.film} changeRaiting={this.props.changeRaiting} allFilms={this.props.films}/>
                    </ul>
                </div>
                <div>
                    <Comments ChangeInputData={this.props.ChangeInputData} addNewComment={this.props.addNewComment} id={this.props.film} films={this.props.films}/>
                </div>
            </div>
        )
    }
}