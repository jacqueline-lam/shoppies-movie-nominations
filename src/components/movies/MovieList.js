import React from 'react';
import MovieCard from './MovieCard';

const MovieList = (props) => {
  return (
    <div>
      <ul>
        {(props.movies.length > 0) ? (
          props.movies.map(movieData => <MovieCard
            key={movieData.imdbID}
            movie={movieData}
            addNominee={props.addNominee}
          />)
        ) : (
            <li>No movies found. Please try searching again!</li>
          )}
      </ul>
    </div>
  );
}
export default MovieList;
