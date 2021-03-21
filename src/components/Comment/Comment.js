import React from 'react';
import './Comment.css';

export default class Comment extends React.Component {

    classes = ['far', 'fa-thumbs-up', 'like'];

    classesForDislike = ['far', 'fa-thumbs-down', 'dislike'];

    addLikeAndClasses = (item, event) => {
        if (event.target.nextElementSibling.classList.contains('fa')) {
            this.props.addLike(item);
            event.target.nextElementSibling.classList.add('far');
            event.target.nextElementSibling.classList.remove('fa');
        }

        if (event.target.classList.contains('fa')) {
            event.target.classList.remove('fa');
            event.target.classList.add('far');
            this.props.addDislike(item);
        } else {
            this.props.addLike(item);
            event.target.classList.add('fa');
            event.target.classList.remove('far');
        }
    }

    addDislikeAndClasses = (item, event) => {
        if (event.target.previousElementSibling.classList.contains('fa')) {
            this.props.addDislike(item);
            event.target.previousElementSibling.classList.add('far');
            event.target.previousElementSibling.classList.remove('fa');
        }

        if (event.target.classList.contains('fa')) {
            event.target.classList.remove('fa');
            event.target.classList.add('far');
            this.props.addLike(item);
        } else {
            this.props.addDislike(item);
            event.target.classList.add('fa');
            event.target.classList.remove('far');
        }
    }

    ForEachAllReviews = () => {
        return this.props.comments[this.props.id].reviews.map((item, index) => {
            const {name, comment, CounterRaiting} = item;
            return (
                <div key={index} className='Comment'>
                    <div className='Comment2'>
                        <h4>{name}</h4>
                        <p className='CommentComment'>{comment}</p>
                    </div>
                    <div className='Comment2'>
                        <div className='verticalFlex'>
                            <p>{CounterRaiting}</p>
                            <div className='LikeAndDislike'>
                                <i onClick={(e) => this.addLikeAndClasses(item , e)} className={this.classes.join(' ')}/>
                                <i onClick={(e) => this.addDislikeAndClasses(item, e)} className={this.classesForDislike.join(' ')}/>
                            </div>
                        </div>
                    </div>
                </div>
            )
        });
    }

    render() {
        return (
            <div>
                {this.ForEachAllReviews()}
            </div>
        )
    }
}