//const express = require('express');
import express from 'express';
import Axios from 'axios';
import cors from 'cors';
//const Axios = require('axios');
const app = express();
const PORT = 3000;
const key = 'e124aa516f02f609424111e6442f2936';
app.use(cors());

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

// app.get('/', (req, res) => {
//     res.send("Hello from Node API server");
// })

app.get('/', async (req, res) => {
    try {
        let test = await Axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${key}&language=en-US`);
        res.json(test.data.results);
    } catch (error) {
        console.error("Error fetching initial movies:", error);
    }
})

app.get('/movies', async (req, res) => {        // get movies
    const genreId = req.query.genre;
    try {
        let test = await Axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=${genreId}`);
        res.json(test.data.results);
    } catch (error) {
        console.error("Error fetching movies:", error);
    }
})

app.get('/movies/search', async (req, res) => {        // get searched movie
    const query = req.query.query;
    try {
        let allMovies = await Axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${query}`);
        let jsonAllMovies = allMovies.data.results;
        // res.json(jsonAllMovies);
        res.json(jsonAllMovies);
        
        
    } catch (error) {
        console.error("Error fetching movies:", error);
    }
})

app.get('/genres', async (req, res) => {        // get genres
    try {
        let test = await Axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${key}&language=en`);
        res.json(test.data);
        // console.log("Success");
    } catch (error) {
        console.error("Error fetching genres:", error.message);
    }
})