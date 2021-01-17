import React, { useState, useEffect } from 'react';
import { Container } from '@material-ui/core';

const MovieSearch = (props) => {
  const { fetchMovies } = props;
  const [query, setQuery] = useState('')

  const handleQueryChange = (event) => {
    const searchInput = event.target.value
    setQuery(searchInput)
  }

  // Tells useEffect function to listen for any changes to query state var
  // when query state changes, execute this fn
  useEffect(() => {
    fetchMovies(query);
  }, [query])

  return (
    <Container id='movie-search' maxWidth='lg'>
      <input
        id='movie-search-bar'
        type='text'
        value={query}
        onChange={handleQueryChange}
        placeholder='Search Movie Here'
      />
      {query ? <h2>Searching for "{query}"</h2> : null}
    </Container>
  )
}

export default MovieSearch;