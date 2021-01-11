import React from 'react';
import moviePosterPlaceholder from '../../images/movie-placeholder.png';
import NominateButton from './NominateButton'

const MovieCard = ({ movie }) => {
  const title = movie.Title;
  const year = movie.Year;
  const poster = movie.Poster !== "N/A" ? movie.Poster : moviePosterPlaceholder;

  return (
    <div className='movie-card'>
      <img className='movie-thumbnail img-fluid' alt='movie thumbnail' src={poster} />
      <h1>{title}</h1>
      <i>{year}</i>
      <NominateButton movie={movie} />
    </div >
  );
};

export default MovieCard