export default class MovieDB {
    _apiBaseForItem = 'https://api.themoviedb.org/3/movie/550?api_key=3c79bfcb56de9dd546762f6bf11c9ae7';

    getResource = async (url) => {
        let res = await fetch(`https://api.themoviedb.org/3/list/${url}?api_key=3c79bfcb56de9dd546762f6bf11c9ae7&language=ru-RU`);
        if(!res.ok) {
            throw new Error(`Could not fetch ${url}` +
                `, received ${res.status}`) 
        }
        res = await res.json()
        return await res.items.map(movie => this._transformList(movie));
    }

    _transformList = (movie) => {
        return {
            adult: movie.adult,
            vote: movie.vote_average,
            title: movie.title,
            pathImg: movie.backdrop_path,
            review: movie.overview
        }
    }
}