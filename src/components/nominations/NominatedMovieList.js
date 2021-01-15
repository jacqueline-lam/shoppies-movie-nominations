import React from 'react';
import NominatedMovieCard from './NominatedMovieCard';

const NominatedMovieList = ({ nominees, removeNominee }) => {
  const nomineesCount = nominees.length;

  return (
    <div id='nomination-list'>
      <h1>Your Nominations</h1>
      <h4>{nomineesCount}/5 Movies Nominated</h4>
      <div id='nomination-cards-container'>
        {(nomineesCount > 0) ? (
          nominees.map(nominatedMovie => <NominatedMovieCard
            key={nominatedMovie.imdbID}
            movie={nominatedMovie}
            removeNominee={removeNominee}
          />)
        ) : (
            <i>You have not nominated any movies.</i>
          )}
      </div>
    </div>
  );
}
export default NominatedMovieList;
