import React from 'react';
import './Comments.css';
import Comment from "../Comment/Comment";

export default class Comments extends React.Component {

    addLike = (item) => {
            const oldArr = [...this.props.films[this.props.id].reviews];
            item.CounterRaiting++;
            this.setState({
                reviews: oldArr
            })
    }

    addDislike = (item) => {
            const oldArr = [...this.props.films[this.props.id].reviews];
            item.CounterRaiting--;
            this.setState({
                reviews: oldArr
            })
    }

    render() {
        return (
            <div className='Comments  CommentContainer'>
                <h2>Комментарии</h2>
                <form action="#">
                    <textarea className='AddNewCommentTextArea' onInput={(e) => this.props.ChangeInputData(e)} rows="8" cols="75" name="text" placeholder='Напишите ваше мнение о фильме...'/>
                </form>
                <button onClick={() => this.props.addNewComment(this.props.id)} className='redButtonForReviews'>Опубликовать</button>
                <Comment id={this.props.id} addLike={this.addLike} addDislike={this.addDislike} comments={this.props.films}/>
            </div>
        )
    }
}