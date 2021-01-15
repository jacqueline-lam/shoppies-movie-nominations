import React from 'react';
import MovieCard from './MovieCard';
import Button from '@material-ui/core/Button';
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
    // setPageNum(prevPageNum => prevPageNum + 1)
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
        <Button
          className="prev-page-btn"
          size="small"
          variant="outlined"
          onClick={(handlePrevPageBtn)}
          disabled={resultsPageNum <= 1}>
          Prev
        </Button>
        <i>{`Page ${resultsPageNum} of ${totalPages}`}</i>
        <Button
          className="next-page-btn"
          size="small"
          variant="outlined"
          onClick={(handleNextPageBtn)}
          disabled={resultsPageNum + 1 > totalPages}>
          Next
        </Button>
        {renderMovies}
      </div>
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
