// fetch data from OMDB API
// Store search results from the response in its component state
// and pass that data down to its child MovieList

import React, { Component } from 'react'
import MovieList from '../components/movies/MovieList'
import MovieSearch from '../components/movies/MovieSearch/'

class MovieListContainer extends Component {
  state = {
    movies =[]
  }

  fetchMovies = (query) => {
    fetch(`http://www.omdbapi.com/?t=${query}&apikey=4ec7dca`)
      .then(resp => resp.json())
      .then(moviesData => {
        if (moviesData.hasOwnProperty('Search')) {
          this.setState({ movies: moviesData.search.map(movie => movie.title) })
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