import { useState, useEffect } from 'react'
import './App.css'
import GetGenre from './GetGenre';
import Axios from 'axios';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import MovieSearch from './MovieSearch';

function App() {
  const [count, setCount] = useState(0)
  const [movies, setMovies] = useState([]);

  async function getMovies() {
    try {
      let res = await Axios.get('http://localhost:3000/');
      setMovies(res.data);
    } catch (error) {
      console.error("Error getting initial movies: ", error);
    }
  }

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <>
      <section>
        Movie project- <MovieSearch setMovies={setMovies}/>
        <div>
        <GetGenre setMovies={setMovies}/>
        </div>
      </section>
      
      <div className="container">
        {movies.map((movie, index) => (
          <div className="movie-box" key={index}>
            <div className="movie-title">{movie.title}</div>
            <div className="movie-overview">{movie.overview}</div>
          </div>
        ))}

      </div>
      {/* <GetGenre setMovies={setMovies}/> */}
    </>
  )
}

export default App
