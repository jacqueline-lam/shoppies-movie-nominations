// fetch data from OMDB API
// Store search results from the response in its component state
// and pass that data down to its child MovieList

import React, { useState, useEffect } from 'react'
import MovieSearch from '../components/movies/MovieSearch'
import MovieList from '../components/movies/MovieList'
import NominatedMovieList from '../components/nominations/NominatedMovieList'

const API_KEY = '4ec7dca'
const BASE_URL = 'http://www.omdbapi.com/?'

const MovieListContainer = () => {
  const [movies, setMovies] = useState([])
  const [nominees, setNominees] = useState([])

  const fetchMovies = (query) => {
    fetch(BASE_URL.concat(`s=${query}`, `&apikey=${API_KEY}`))
      .then(resp => resp.json())
      .then(moviesData => {
        if (moviesData.Response === 'True') {
          setMovies(moviesData.Search.map(movie => movie))
        } else {
          setMovies([])
        }
      })
  }

  const addNominee = (movie) => {
    // Update state w/ new array by combining the old array with
    // the new movie obj using JS Spread operator
    setNominees(oldNominees => [...oldNominees, movie])
  }

  const removeNominee = (movieID) => {
    // remove movie object from array of nominees w/o mutating the state
    setNominees(oldNominees => oldNominees.filter(movie => movie.imdbID !== movieID))
  }

  return (
    <div>
      {/* render search bar and pass down handler fn as a prop */}
      < MovieSearch fetchMovies={fetchMovies} />
      < MovieList movies={movies} nominees={nominees} addNominee={addNominee} />
      < NominatedMovieList nominees={nominees} removeNominee={removeNominee} />
    </div>
  )


  // componentDidMount() {
  //   this.fetchMovies()
  // }
}
export default MovieListContainer