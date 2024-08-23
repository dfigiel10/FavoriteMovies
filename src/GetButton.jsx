import { useState, useEffect } from 'react'
import Axios from 'axios';
import './GetButton.css';

export default function GetButton({ selectedGenre, setMovies }) {
    //const [movies, setMovies] = useState([]);
    async function getRequest() {
        try {
            if (selectedGenre) {
                let res = await Axios.get(`http://localhost:3000/movies?genre=${selectedGenre}`);
                setMovies(res.data);
                console.log(res.data);
            }
        } catch (error) {
            console.error("Error fetching movies:", error);
        }
    }

    async function showDetails() {
        console.log(movies.data.overview);
    }

    return (
        <>
            {/* <button onClick={getRequest}>GET</button>
            <div className="container">
                {movies.map((movie, index) => (
                    <div className="movie-box" key={index}>
                        <div className="movie-title">{movie.title}</div>
                        <div className="movie-overview">{movie.overview}</div>
                    </div>
                ))}

            </div> */}
            <button onClick={getRequest}>Get Movies</button>

        </>
    );
}