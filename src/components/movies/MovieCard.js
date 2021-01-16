import React from 'react';
import moviePosterPlaceholder from '../../images/movie-placeholder.png';
import Button from '@material-ui/core/Button';

const MovieCard = ({ movie, disableBtn, btnContent, addNominee }) => {
  const poster = movie.Poster !== "N/A" ? movie.Poster : moviePosterPlaceholder;

  return (
    <div className='movie-card'>
      <img className='movie-thumbnail' alt='movie thumbnail' src={poster} />
      <h2>{movie.Title}</h2>
      <i>{movie.Year}</i>
      {/* Nominate Button */}
      <Button
        className='nominate-button'
        id={movie.imdbID}
        size="small"
        variant="outlined"
        color="secondary"
        style={{ borderRadius: "30px" }}
        onClick={() => addNominee(movie)}
        disabled={disableBtn}>
        {btnContent}
      </Button>
    </div >
  );
};

export default MovieCard;