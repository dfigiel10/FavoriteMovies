import { useState, useEffect } from 'react'
import Axios from 'axios';
import GetButton from './GetButton';

export default function GetGenre( {setMovies} ) {

    const [genres, setGenres] = useState([]);
    const [selectedGenre, setSelectedGenre] = useState('');

    async function getRequest() {
        try {
            let res = await Axios.get(`http://localhost:3000/genres`);
            setGenres(res.data.genres);
        } catch (error) {
            console.error("Error fetching movies:", error);
        }
    }

    function handleGenreChange (e) {
        setSelectedGenre(e.target.value);
    }

    useEffect(() => {
        getRequest();
      }, []);

    return (
        <>
            {/* <button onClick={getRequest}>Get Genres</button> */}
            <GetButton selectedGenre={selectedGenre} setMovies={setMovies} />
            <select onChange = {handleGenreChange}>
                <option value = "Select a Genre">-- Select a genre --</option>
                {genres.map((genre, index) => (
                    <option key={index} value={genre.id}>{genre.name}</option>
                ))}
            </select>
            {/* <GetButton selectedGenre={selectedGenre} setMovies={setMovies} /> */}
        </>
    )
}