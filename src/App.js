import './App.css';
import React from 'react';
import Header from "./components/Header/Header";
import SearchFilm from "./components/SearchFilm/SearchFilm";
import FilmCards from "./components/FIlmCards/FilmCards";
import FilmDetails from "./components/FilmDetails/FilmDetails";
import {BrowserRouter as Router, Route, NavLink, Switch} from "react-router-dom";
import Registration from './components/Registration/Registration';
import Join from './components/Join/Join';

export default class App extends React.Component {
    state = {
        films: [
            {
                name: 'Железный человек',
                yearRelease: 2008,
                img: 'https://s2.vcdn.biz/static/f/1274768201/image.jpg/pt/r300x423x4',
                country: 'США',
                genre: 'Боевик, Фантастика',
                time: '2 часа 01 мин',
                producer: 'Джон Фавро',
                trailer: 'fMKZMI8ByTs',
                reviews: [
                    {
                        name: 'Andrey',
                        comment: 'Good film',
                        CounterRaiting: 0
                    }
                ],
                raiting: 0
            },
            {
                name: 'Железный человек 2',
                yearRelease: 2010,
                img: 'https://thumbs.dfs.ivi.ru/storage6/contents/f/5/c0142fff26ec5f527763ccadbd20e7.jpg',
                country: 'США',
                genre: 'Боевик, Фантастика',
                time: '2 часа 01 мин',
                producer: 'Джон Фавро',
                trailer: 'ie4_5r4SlQU',
                reviews: [
                    {
                        name: 'Vlad',
                        comment: 'Nice film',
                        CounterRaiting: 0
                    },
                    {
                        name: 'Misha2011',
                        comment: 'My favorite',
                        CounterRaiting: 0
                    },
                ],
                raiting: 0
            },
            {
                name: 'Железный человек 3',
                yearRelease: 2013,
                img: 'https://tvbesedka.com/Upload/2019/5/30/23/15/20/5c7ccd31-f12b-4998-a182-e99710bb0b87.jpg',
                country: 'США',
                genre: 'Боевик, Фантастика',
                time: '2 часа 01 мин',
                producer: 'Джон Фавро',
                trailer: 'Bfg0v6L_bzU',
                reviews: [
                    {
                        name: 'Danil',
                        comment: 'I dont have any words, perfect movie',
                        CounterRaiting: 0
                    }
                ],
                raiting: 0
            },
            {
                name: 'Халк',
                yearRelease: 2008,
                img: 'https://upload.wikimedia.org/wikipedia/ru/thumb/f/fa/%D0%9D%D0%B5%D0%B2%D0%B5%D1%80%D0%BE%D1%8F%D1%82%D0%BD%D1%8B%D0%B9_%D0%A5%D0%B0%D0%BB%D0%BA.jpg/230px-%D0%9D%D0%B5%D0%B2%D0%B5%D1%80%D0%BE%D1%8F%D1%82%D0%BD%D1%8B%D0%B9_%D0%A5%D0%B0%D0%BB%D0%BA.jpg',
                country: 'США',
                genre: 'Боевик, Фантастика',
                time: '2 часа 01 мин',
                producer: 'Джон Фавро',
                trailer: '_-iXjRm3jG0',
                reviews: [
                    {
                        name: 'Vadim',
                        comment: 'My favorite movie 2008 year',
                        CounterRaiting: 0
                    }
                ],
                raiting: 0
            }
        ],
        searchFilter: '',
        inputEvent: ''
    }

    addNewComment = (id) => {
        console.log(this.state.films);
        const oldArr = [...this.state.films];
        const textArea = document.querySelector('.AddNewCommentTextArea');
        if (this.state.inputEvent) {
            oldArr[id].reviews.push({
                name: 'Valdemar293',
                comment: this.state.inputEvent,
                CounterRaiting: 0
            });
        }
        this.setState({
            films: oldArr,
            inputEvent: ''
        })
        textArea.value = '';
        console.log(this.state.films);
    }

    ChangeInputData = (e) => {
        this.setState({
            inputEvent: e.target.value
        })
    }

    changeFilmRaiting = (id, raiting) => {
        const newArr = [...this.state.films];
        newArr[id].raiting = raiting;
        this.setState({
            films: newArr
        })
    }

    searchHandler = (e) => {
        console.log(e.target.value);
        this.setState({
            searchFilter: e.target.value
        })
    }

    render() {
        return (
            <Router>
                <div className='App'>
                    <Header allFilms={this.state.films}/>
                    <SearchFilm searchHandler={this.searchHandler}/>
                    <Route exact path={'/'} render={(match) => <FilmCards searchFilter={this.state.searchFilter} renderItems={this.state.films}/>}/>
                    <Switch>
                        <Route path={'/join'} component={Join}/>
                        <Route path={'/reg'} component={Registration}/>
                        <Route path={`/:id`} render={({match}) => {
                            return <FilmDetails ChangeInputData={this.ChangeInputData} addNewComment={this.addNewComment} film={match.params.id} changeRaiting={this.changeFilmRaiting} films={this.state.films}/>
                        }}/>
                    </Switch>
                </div>
            </Router>
        )
    }
}