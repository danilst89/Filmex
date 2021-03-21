import React from 'react';
import './Raiting.css';

export default class Raiting extends React.Component {
    checkLocalStorage = () => {
        this.props.changeRaiting(this.props.id, localStorage.getItem(`raiting-${this.props.id}`));
        let label = document.querySelector(`#${localStorage.getItem(`raiting-${this.props.id}`)}`);
        label.checked = true;
    }

    calcMiddleRaiting = () => {
        const allLabels = document.querySelectorAll('input[type="radio"]');
        allLabels.forEach(item => {
            if (item.checked === true) {
                this.props.changeRaiting(this.props.id, localStorage.getItem(`raiting-${this.props.id}`));
                localStorage.setItem(`raiting-${this.props.id}`, item.getAttribute('id'));
            }
        });
    }

    calcMiddle = () => {
        if (localStorage.getItem(`raiting-${this.props.id}`)) {
            return localStorage.getItem(`raiting-${this.props.id}`)[localStorage.getItem(`raiting-${this.props.id}`).length - 1];
        } else {
            return 0;
        }
    }

    componentDidMount() {
        if (localStorage.getItem(`raiting-${this.props.id}`)) {
            this.checkLocalStorage();
        }
    }

    render() {
        return (
            <div>
                <div className="rating-area">
                    <input onClick={this.calcMiddleRaiting} type="radio" id="star-5" name="rating" value="5"/>
                        <label htmlFor="star-5" title="Оценка «5»"></label>
                        <input onClick={this.calcMiddleRaiting} type="radio" id="star-4" name="rating" value="4"/>
                        <label htmlFor="star-4" title="Оценка «4»"></label>
                        <input onClick={this.calcMiddleRaiting} type="radio" id="star-3" name="rating" value="3"/>
                        <label htmlFor="star-3" title="Оценка «3»"></label>
                        <input onClick={this.calcMiddleRaiting} type="radio" id="star-2" name="rating" value="2"/>
                        <label htmlFor="star-2" title="Оценка «2»"></label>
                        <input onClick={this.calcMiddleRaiting} type="radio" id="star-1" name="rating" value="1"/>
                        <label htmlFor="star-1" title="Оценка «1»"></label>
                </div>

                <div className={'middleRaiting'}>
                    Средний рейтинг: {this.calcMiddle()}
                </div>
            </div>
        );
    }
}