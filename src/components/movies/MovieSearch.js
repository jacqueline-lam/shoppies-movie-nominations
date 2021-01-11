import React, { useState, useEffect } from 'react';

const MovieSearch = (props) => {
  const [query, setQuery] = useState('')

  const handleQueryChange = (event) => {
    const searchInput = event.target.value
    setQuery(searchInput)
  }

  useEffect(() => {
    // callback after state is updated
    props.fetchMovies(query)
  })

  return (
    <div id='movie-search-bar'>
      <label>Movie Title: </label>
      <input
        type='text'
        value={query}
        onChange={handleQueryChange}
        placeholder="Type here..."
      />
    </div>
  )
}

export default MovieSearch;