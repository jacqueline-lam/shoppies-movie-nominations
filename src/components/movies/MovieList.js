import React from 'react';
import MovieCard from './MovieCard';
import { IconButton } from '@material-ui/core';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Pluralize from 'react-pluralize';

const MovieList = (props) => {
  const {
    movies,
    totalResults,
    resultsPageNum,
    errorMsg,
    nominees,
    nominationFull,
    updatePageNum,
    addNominee
  } = props;

  const resultsPerPage = 10;
  const totalPages = Math.ceil(totalResults / resultsPerPage) || 0;

  const handlePrevPageBtn = () => {
    updatePageNum(resultsPageNum - 1);
  };

  const handleNextPageBtn = () => {
    updatePageNum(resultsPageNum + 1);
  };

  const isNominated = (movieID) => {
    return (!!nominees.find(nominee => nominee.imdbID === movieID));
  };

  const renderResults = () => {
    const renderMovies = movies.map(movieData =>
      <MovieCard
        key={movieData.imdbID}
        movie={movieData}
        disableBtn={isNominated(movieData.imdbID) || nominationFull}
        btnContent={isNominated(movieData.imdbID) ? `Nominated` : `Nominate`}
        addNominee={addNominee}
      />
    );

    return [
      <div id='movie-results'>
        <Pluralize singular={'match'} plural={'matches'} count={totalResults} />
        {/* <Button
          className="prev-page-btn"
          size="small"
          variant="outlined"
          onClick={(handlePrevPageBtn)}
          disabled={resultsPageNum <= 1}>
          &#8249;
        </Button> */}

        <IconButton
          className="pagination-button"
          aria-label="next"
          color="primary"
          variant="outlined"
          onClick={(handlePrevPageBtn)}
          disabled={resultsPageNum <= 1}>
          <NavigateBeforeIcon />
        </IconButton>

        <i>{`Page ${resultsPageNum} of ${totalPages}`}</i>

        <IconButton
          className="pagination-button"
          aria-label="previous"
          color="primary"
          variant="outlined"
          onClick={(handleNextPageBtn)}
          disabled={resultsPageNum + 1 > totalPages}>
          <NavigateNextIcon />
        </IconButton>

        {/* <Button
          className="next-page-btn"
          size="small"
          variant="outlined"
          onClick={(handleNextPageBtn)}
          disabled={resultsPageNum + 1 > totalPages}>
          &#8250;
        </Button> */}

        {renderMovies}
      </div >
    ]
  };

  return (
    <div id='movie-list'>
      {(totalResults > 0) ? (
        renderResults()
      ) : (
          <p>{errorMsg} Try searching your favorite movie!</p>
        )}
    </div>
  );
};
export default MovieList;
