import React from 'react';
import './Join.css';

const Join = () => {
    return (
        <div className={'reg'}>
            <form action='#'>
                <h1>Вход</h1>

                <label for='email'>Email</label>
                <input type="email" name='email' placeholder='Введите Email' required/>

                <label for='psw'>Пароль</label>
                <input type='password' name='psw' placeholder='Введите пароль' required/>

                <button>Войти</button>
            </form>
        </div>
    )
}

export default Join;
