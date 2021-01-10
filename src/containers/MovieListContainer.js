// fetch data from OMDB API
// Store search results from the response in its component state
// and pass that data down to its child MovieList

import React, { Component } from 'react'
import MovieSearch from '../components/movies/MovieSearch'
import MovieList from '../components/movies/MovieList'

class MovieListContainer extends Component {
  state = {
    movies: []
  }

  fetchMovies = (query) => {
    fetch(`http://www.omdbapi.com/?s=${query}&apikey=4ec7dca`)
      .then(resp => resp.json())
      .then(moviesData => {
        if (moviesData.totalResults > 0) {
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

  componentDidMount() {
    this.fetchMovies()
  }
}
export default MovieListContainer