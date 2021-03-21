import React from "react";
import './FilmCards.css';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import FilmDetails from "../FilmDetails/FilmDetails";

export default class FilmCards extends React.Component {
    indexOfArray = null;

    searchInPosts = (search = '', e = null, canIGo = true) => {
        if (search.length === 0) {
            return this.props.renderItems;
        }

        if (canIGo === false) {
            if (e.target.textContent === null) {
                return this.props.renderItems;
            }

            this.canIGoInSort = true;

            return this.props.renderItems.filter((item) => {
                return item.yearRelease == e.target.value;
            });
        } else {
            return this.props.renderItems.filter((item) => {
                return item.name.toLowerCase().indexOf(search.toLowerCase()) > -1;
            });
        }
    };

    returnCards = () => {
        return this.searchInPosts(this.props.searchFilter, null).map((item, index) => {
            const {name, yearRelease, img} = item;
            return (
                <div key={index} className={'cardContainer'}>
                    <div className='cardNameContainer'>
                        <Link className='cardName' to={`/${index}`}>{name}</Link>
                    </div>
                    <img className='cardImg' src={img}/>
                    <p onClick={(e) => this.searchInPosts('', e, false)} className='cardYear'>{yearRelease}</p>
                </div>
            )
        });
    };

    render() {
        return (
            <div className='FilmCardsMain'>
                {this.returnCards()}
            </div>
        )
    }
}