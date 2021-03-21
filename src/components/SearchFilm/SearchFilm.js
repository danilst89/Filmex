import React from "react";
import './SearchFilm.css';

export default class SearchFilm extends React.Component {

    state = {
        searchItem: null
    }

    changeSearchState = (e) => {
        if (e.target.value === '') {
            this.setState({
                searchItem: ''
            })
            this.props.searchHandler(this.state.searchItem);
        }
        this.setState({
            searchItem: e
        })
    }

    render() {
        return (
            <div className='SearchFilmMain'>
                <input onInput={(e) => this.changeSearchState(e)} placeholder='Type here...' className='SearchInput'/>
                <button onClick={() => this.props.searchHandler(this.state.searchItem)} className='SearchButton'>Search</button>
            </div>
        )
    }
}