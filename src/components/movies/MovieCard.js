import React from 'react';
import moviePosterPlaceholder from '../../images/movie-placeholder.png';
import Button from '@material-ui/core/Button';

const MovieCard = ({ movie, disableBtn, btnContent, addNominee }) => {
  const poster = movie.Poster !== "N/A" ? movie.Poster : moviePosterPlaceholder;

  // const buttonValue = () => {
  //   disableBtn ? `Nominated` : `Nominate`
  // }

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
        disabled={disableBtn}>
        {btnContent}
      </Button>
    </div >
  );
};

export default MovieCard;