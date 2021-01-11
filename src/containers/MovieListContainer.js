// fetch data from OMDB API
// Store search results from the response in its component state
// and pass that data down to its child MovieList

import React, { Component } from 'react'
import MovieSearch from '../components/movies/MovieSearch'
import MovieList from '../components/movies/MovieList'

const API_KEY = '4ec7dca'
const BASE_URL = 'http://www.omdbapi.com/?'

class MovieListContainer extends Component {
  state = {
    // query: '',
    movies: []
  }

  fetchMovies = (query) => {
    fetch(BASE_URL.concat(`s=${query}`, `&apikey=${API_KEY}`))
      .then(resp => resp.json())
      .then(moviesData => {
        if (moviesData.Response === 'True') {
          this.setState({ movies: moviesData.Search.map(movie => movie) })
        } else {
          this.setState({ movies: [] })
        }
      })
  }

  render() {
    return (
      <div>
        {/* render search bar and pass down handler fn as a prop */}
        < MovieSearch fetchMovies={this.fetchMovies} />
        < MovieList movies={this.state.movies} />
      </div>
    )
  }

  // componentDidMount() {
  //   this.fetchMovies()
  // }
}
export default MovieListContainer