import React, { Component } from 'react'
import MovieCard from './MovieCard'

export default class MovieList extends Component {
  render() {
    return (
      <div>
        <ul>
          {(this.props.movies.length > 0) ? (
            this.props.movies.map(movieData => <MovieCard key={movieData.imdbID} movie={movieData} />)
          ) : (
              <li>No movies found. Please try searching again!</li>
            )}
        </ul>
      </div>
    )
  }
}
