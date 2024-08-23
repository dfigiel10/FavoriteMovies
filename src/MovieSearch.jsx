import { useState, useEffect } from 'react'
import Axios from 'axios';

export default function MovieSearch({setMovies}) {

    const [searchMovie, setSearchMovie] = useState('');

    function handleInputChange(e) {
        setSearchMovie(e.target.value);
    }

    function handleMovieSearch() {
        console.log(searchMovie);
        getMovies();
    }

    async function getMovies() {
        try {
            let res = await Axios.get(`http://localhost:3000/movies/search?query=${searchMovie}`);
            setMovies(res.data);
        } catch (error) {
            console.error("Error fetching searched movie:", error);
        }
    }

    return (
        <>
            <input type="text" placeholder="Enter a title to search" value={searchMovie} onChange={handleInputChange} />
            <button onClick={getMovies}>Search</button>
        </>
    );
}