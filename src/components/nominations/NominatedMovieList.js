import React from 'react';
import NominatedMovieCard from './NominatedMovieCard';

const NominatedMovieList = ({ nominees, removeNominee }) => {
  return (
    <div id='nomination-list'>
      <h1>Your Nominations</h1>
      <h4>{nominees.length}/5 Movies Nominated</h4>
      <ul>
        {(nominees.length > 0) ? (
          nominees.map(nominatedMovie => <NominatedMovieCard
            key={nominatedMovie.imdbID}
            movie={nominatedMovie}
            removeNominee={removeNominee}
          />)
        ) : (
            <li>You have not nominated any movies.</li>
          )}
      </ul>
    </div>
  );
}
export default NominatedMovieList;
