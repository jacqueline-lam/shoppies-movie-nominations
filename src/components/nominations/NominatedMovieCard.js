import React, { useState } from 'react';
import moviePosterPlaceholder from '../../images/movie-placeholder.png';

// display movie poster, title, and year
// delete button to remove nomination
// remove deleted movie from nomination list
// change button disabled state to false;
const NominatedMovieCard = ({ movie, removeNominee }) => {
  const [removedMovie, setRemovedMovie] = useState(false);
  const title = movie.Title;
  const year = movie.Year;
  const poster = movie.Poster !== "N/A" ? movie.Poster : moviePosterPlaceholder;

  const handleRemoveBtn = (movie) => {
    setRemovedMovie(true);
    removeNominee(movie);
  }

  return (
    <div className='nominated-movie-card'>
      <img className='movie-thumbnail img-fluid' alt='movie thumbnail' src={poster} />
      <h3>{title} - <i>{year}</i></h3>
      {/* <button>Remove nomination</button> */}
      <button
        id={movie.imdbID}
        size="small"
        variant="outlined"
        color="primary"
        style={{ borderRadius: "30px" }}
        onClick={() => handleRemoveBtn(movie)}
        disabled={removedMovie}>
        {removedMovie ? `Removed` : `Remove`}
      </button>
    </div >
  );
};

export default NominatedMovieCard