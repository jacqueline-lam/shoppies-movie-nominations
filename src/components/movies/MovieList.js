import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import Button from '@material-ui/core/Button';

const MovieList = (
  { movies,
    totalResults,
    nominees,
    nominationFull,
    resultsPageNum,
    updatePageNum,
    addNominee }
) => {

  // const [pageNum, setPageNum] = useState(resultsPageNum)
  const resultsPerPage = 10
  const totalPages = Math.ceil(totalResults / resultsPerPage) || 0
  const movieCount = movies.length

  const handleNextPageBtn = () => {
    // setPageNum(prevPageNum => prevPageNum + 1)
    updatePageNum(resultsPageNum + 1)
  };

  // useEffect(() => {
  //   updatePageNum(pageNum)
  // }, [pageNum]);

  const isNominated = (movieID) => {
    return (!!nominees.find(nominee => nominee.imdbID === movieID))
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
    )

    return [
      <div id='movie-results'>
        <p>{`${totalResults} matches`}</p>
        <i>{`Page ${resultsPageNum} of ${totalPages}`}</i>
        <Button
          className="next-page-btn"
          size="medium"
          variant="outlined"
          onClick={(handleNextPageBtn)}
          disabled={resultsPageNum + 1 > totalPages}>
          ->
        </Button>
        {renderMovies}
      </div>
    ]
  }

  return (
    <div id='movie-list'>
      {(movieCount > 0) ? (
        renderResults()
      ) : (
          <p>No movies found. Please try searching again!</p>
        )}
    </div>
  );
}
export default MovieList;
