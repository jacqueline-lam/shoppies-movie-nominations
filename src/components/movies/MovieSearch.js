import React, { Component } from 'react'

export default class MovieSearch extends Component {
  state = {
    query: ''
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.fetchMovies(this.state.query)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Movie Title:
            <input
              type='text'
              value={this.state.query}
              onChange={event => this.setState({ query: event.target.value })}
            />
          </label>
          <input type="submit" value="Search" />
        </form>
      </div>
    )
  }
}
