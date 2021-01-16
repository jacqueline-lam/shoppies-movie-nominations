import React, { useState } from 'react';
import moviePosterPlaceholder from '../../images/movie-placeholder.png';
import Button from '@material-ui/core/Button';

// Display movie poster, title, and year

// remove deleted movie from nomination list
// change button disabled state to false;
const NominatedMovieCard = ({ movie, removeNominee }) => {
  const [isRemoved, setIsRemoved] = useState(false);
  const title = movie.Title;
  const year = movie.Year;
  const poster = movie.Poster !== "N/A" ? movie.Poster : moviePosterPlaceholder;

  const handleRemoveBtn = (movie) => {
    setIsRemoved(true);
    removeNominee(movie);
  }

  return (
    <div className="nominated-movie-card">
      <img className="movie-thumbnail" alt="movie thumbnail" src={poster} />
      <h3>{title} (<i>{year}</i>)</h3>
      {/* <button>Remove nomination</button> */}
      <Button
        id={movie.imdbID}
        className="remove-nominee-btn"
        size="small"
        variant="outlined"
        color="primary"
        onClick={() => handleRemoveBtn(movie)}
        disabled={isRemoved}>
        {isRemoved ? `Removed` : `Remove`}
      </Button>
    </div >
  );
};

export default NominatedMovieCard