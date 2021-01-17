import React from 'react';
import NominatedMovieListItem from './NominationListItem';
import { Container } from '@material-ui/core';

const NominatedMovieList = (props) => {
  const {
    nominees,
    removeNominee
  } = props;
  const nomineesCount = nominees.length;

  return (
    <Container max-width='lg' id='nomination-list'>
      <h1>Your Nominations</h1>
      <h4>{nomineesCount} / 5 Movies Nominated</h4>
      <div id='nomination-cards-container'>
        {(nomineesCount > 0) ? (
          nominees.map(nominatedMovie => <NominatedMovieListItem
            key={nominatedMovie.imdbID}
            movie={nominatedMovie}
            removeNominee={removeNominee}
          />)
        ) : (
            <i>You have not nominated any movies.</i>
          )}
      </div>
    </Container>
  );
}
export default NominatedMovieList;
