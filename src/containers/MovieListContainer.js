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
    setNominees([...nominees, movie])
  }

  return (
    <div>
      {/* render search bar and pass down handler fn as a prop */}
      < MovieSearch fetchMovies={fetchMovies} />
      < MovieList movies={movies} addNominee={addNominee} />
      {/* < NominatedMovieList nominees={nominees} /> */}
    </div>
  )


  // componentDidMount() {
  //   this.fetchMovies()
  // }
}
export default MovieListContainer