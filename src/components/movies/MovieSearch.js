import React, { Component } from 'react'

export default class MovieSearch extends Component {
  state = {
    query: undefined
  }

  handleQueryChange = (event) => {
    const searchInput = event.target.value
    this.setState({ query: searchInput }, () => {
      // callback after state is updated
      this.props.fetchMovies(searchInput)
    })
  }

  render() {
    return (
      <div id='movie-search-bar'>
        <label>Movie Title: </label>
        <input
          type='text'
          value={this.state.query}
          onChange={this.handleQueryChange}
          placeholder="Type here..."
        />
      </div>
    )
  }
}
