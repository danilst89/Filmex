import React from 'react';
import './Registration.css';

const Registration = () => {
    return (
        <div className={'reg'}>
            <form action='#'>
                <h1>Регистрация</h1>

                <label for='email'>Email</label>
                <input type="email" name='email' placeholder='Введите Email' required/>

                <label for='psw'>Пароль</label>
                <input type='password' name='psw' placeholder='Введите пароль' required/>

                <button>Зарегистрироваться</button>
            </form>
        </div>
    )
}

export default Registration
