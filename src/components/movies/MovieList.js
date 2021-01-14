import React, { useState } from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ movies, totalResults, nominees, nominationFull, addNominee }) => {
  const movieCount = movies.length
  const [pageNum, setPageNum] = useState(1)
  const isNominated = (movieID) => {
    return (!!nominees.find(nominee => nominee.imdbID === movieID))
  };

  return (
    <div id='movie-list'>
      <p>{`${totalResults} matches`}</p>
      <i>{`Page ${pageNum} of ${Math.ceil(totalResults / movieCount)}`}</i>
      <ul>
        {(movieCount > 0) ? (
          movies.map(movieData => <MovieCard
            key={movieData.imdbID}
            movie={movieData}
            disableBtn={isNominated(movieData.imdbID) || nominationFull}
            btnContent={isNominated(movieData.imdbID) ? `Nominated` : `Nominate`}
            addNominee={addNominee}
          />)
        ) : (
            <li>No movies found. Please try searching again!</li>
          )}
      </ul>
    </div>
  );
}
export default MovieList;
