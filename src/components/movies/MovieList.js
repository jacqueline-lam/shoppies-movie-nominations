import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ movies, nominees, addNominee }) => {
  const isNominated = (movieID) => !!nominees.find(nominee => nominee.imdbID === movieID)
  // (
  //   !!nominees.find(nominee => nominee.imdbID === movieID)
  // )

  return (
    <div>
      <ul>
        {(movies.length > 0) ? (
          movies.map(movieData => <MovieCard
            key={movieData.imdbID}
            movie={movieData}
            isNominated={isNominated(movieData.imdbID)}
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
