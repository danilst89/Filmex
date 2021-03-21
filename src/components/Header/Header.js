import React from "react";
import './Header.css';
import {Link, BrowserRouter as Router} from 'react-router-dom';

export default class Header extends React.Component {
    render() {
        return (
            <div className='mainHeader'>
                <div className='logo'>
                    <div>
                        <Link className='randomMovie' to={`/${Math.floor(Math.random() * this.props.allFilms.length)}`}>Рандомный фильм</Link>
                    </div>
                    <div className={'logotype'}>
                        <Link to={`/`}>Filmex</Link>
                    </div>
                    <div className='LogOrReg'>
                        <Link to={'/reg'}>Зарегистрироваться</Link>
                        <Link to={'/join'}>Войти</Link>
                    </div>
                </div>
            </div>
        )
    }
}