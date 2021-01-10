import React from 'react';

const MovieCard = ({ movie }) => {
  const title = movie.Title
  const year = movie.Year
  const imgUrl = movie.Poster

  return (
    <div id='movie-card'>
      <img className='movie-thumbnail img-fluid' alt='movie thumbnail' src={imgUrl} />
      <h1>{title}</h1>
      <i>{year}</i>
    </div >
  );
};

export default MovieCard