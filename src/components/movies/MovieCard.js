import React from 'react';
import moviePosterPlaceholder from '../../images/movie-placeholder.png';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const MovieCard = ({ movie, disableBtn, btnContent, addNominee }) => {
  const poster = movie.Poster !== "N/A" ? movie.Poster : moviePosterPlaceholder;

  return (
    <div key={movie.imdbID} className='movie-card'>
      <img className='movie-thumbnail' alt='movie thumbnail' src={poster} />
      <h2>{movie.Title}</h2>
      <i>{movie.Year}</i>
      {/* Nominate Button */}
      {/* <Button
        className='nominate-btn'
        // className={classes.button}
        id={movie.imdbID}
        size="medium"
        variant="outlined"
        color="secondary"
        onClick={() => addNominee(movie)}
        disabled={disableBtn}
        startIcon={<AddIcon />}>
        {btnContent}
      </Button> */}

      <Button
        className='nominate-btn'
        id={movie.imdbID}
        size="medium"
        variant="outlined"
        color="secondary"
        onClick={() => addNominee(movie)}
        disabled={disableBtn}>
        {btnContent}
      </Button>
    </div >
  );
};

export default MovieCard;