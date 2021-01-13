import React from 'react';
import moviePosterPlaceholder from '../../images/movie-placeholder.png';
import Button from '@material-ui/core/Button';

const MovieCard = ({ movie, isNominated, addNominee }) => {
  const poster = movie.Poster !== "N/A" ? movie.Poster : moviePosterPlaceholder;

  return (
    <div className='movie-card'>
      <img className='movie-thumbnail img-fluid' alt='movie thumbnail' src={poster} />
      <h1>{movie.Title}</h1>
      <i>{movie.Year}</i>
      {/* Nominate Button */}
      <Button
        id={movie.imdbID}
        size="small"
        variant="outlined"
        color="primary"
        style={{ borderRadius: "30px" }}
        onClick={() => addNominee(movie)}
        disabled={isNominated}>
        {isNominated ? `Nominated` : `Nominate`}
      </Button>
    </div >
  );
};

export default MovieCard;