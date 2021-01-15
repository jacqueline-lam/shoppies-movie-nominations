import React, { useState, useEffect } from 'react';

const MovieSearch = ({ fetchMovies }) => {
  const [query, setQuery] = useState('')

  const handleQueryChange = (event) => {
    const searchInput = event.target.value
    setQuery(searchInput)
  }

  // Tells useEffect function to listen for any changes to query state var
  // when query state changes, execute this fn
  useEffect(() => {
    console.log(`Searching for: ${query}`);
    fetchMovies(query);
  }, [query])

  return (
    <div id='movie-search-bar'>
      <input
        type='text'
        value={query}
        onChange={handleQueryChange}
        placeholder="Search Movie Here"
      />
    </div>
  )
}

export default MovieSearch;