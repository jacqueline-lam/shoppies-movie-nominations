import React, { useState, useEffect } from 'react';

const MovieSearch = ({ fetchMovies }) => {
  const [query, setQuery] = useState('')

  const handleQueryChange = (event) => {
    const searchInput = event.target.value
    setQuery(searchInput)
  }

  useEffect(() => {
    // fetch new results with callback fn whenever state is updated
    fetchMovies(query)
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