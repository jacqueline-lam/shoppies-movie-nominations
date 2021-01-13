import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ movies, nominees, nominationFull, addNominee }) => {
  const isNominated = (movieID) => {
    return (!!nominees.find(nominee => nominee.imdbID === movieID))
  }

  return (
    <div>
      <ul>
        {(movies.length > 0) ? (
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
