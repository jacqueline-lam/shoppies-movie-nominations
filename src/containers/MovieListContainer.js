import React, { useState } from 'react';
import MovieSearch from '../components/movies/MovieSearch';
import MovieList from '../components/movies/MovieList';
import NominatedMovieList from '../components/nominations/NominatedMovieList';
import NominationFullBanner from '../components/nominations/NominationFullBanner';

const API_KEY = '4ec7dca';
const BASE_URL = 'http://www.omdbapi.com/?';
const NOMINEE_LIMIT = 5;

const MovieListContainer = () => {
  // STATES
  const [searchCount, setSearchCount] = useState(0);
  // States for each fetch
  const [lastSearchTitle, setLastSearchTitle] = useState('');
  const [error, setError] = useState(null);
  const [movies, setMovies] = useState([]);
  const [totalMatches, setTotalMatches] = useState(0);
  const [resultsPageNum, setResultsPageNum] = useState(1);
  // Nominees state
  const [nominees, setNominees] = useState([]);
  const [nominationFull, setNominationFull] = useState(false);

  const resetFetchStates = (searchTitle) => {
    // Reset resultsPageNum and lastSearchTitle if is a newSearchTitle
    const newSearchTitle = (searchTitle !== lastSearchTitle);
    if (newSearchTitle) setResultsPageNum(1);
    setError(null);
    setMovies([]);
    setTotalMatches(0);
  };

  const fetchMovies = (query, page = 1) => {
    resetFetchStates(query);
    if (!query) return false;

    let apiUrl = BASE_URL.concat(`s=${query}`, `&page=${page}`, `&apikey=${API_KEY}`);
    console.log(`${searchCount}: Calling API @ ${apiUrl}`);
    setSearchCount(searchCount + 1);

    // Fetch data from OMDB API
    // Store search results from response in container states
    // and pass that data down to its child MovieList
    fetch(apiUrl)
      .then(resp => resp.json())
      .then(moviesData => {
        if (moviesData.Response === 'True') {
          setTotalMatches(moviesData.totalResults);
          setMovies(moviesData.Search);
          setLastSearchTitle(query);
        } else {
          setError(moviesData.Error);
        }
      });
    return true;
  };

  const updatePageNum = (page) => {
    setResultsPageNum(page);
    fetchMovies(lastSearchTitle, page);
  };

  const addNominee = (movie) => {
    const nomineeCount = nominees.length;
    // Disable adding more than 5 nominees max
    if (nomineeCount >= NOMINEE_LIMIT) return false;
    if (nomineeCount + 1 >= NOMINEE_LIMIT) setNominationFull(true);
    // Add (up to 5th) nominee
    // Update state w/ new array by combining old array w/
    // the new movie obj using JS Spread operator
    setNominees(oldNominees => [...oldNominees, movie]);
    return true;
  };

  const removeNominee = (movie) => {
    // remove movie object from array of nominees w/o mutating the state
    const nomineeCount = nominees.length;
    if (nomineeCount - 1 < NOMINEE_LIMIT) {
      setNominationFull(false);
    }
    setNominees(oldNominees => oldNominees.filter(nominee => nominee.imdbID !== movie.imdbID));
  };

  return (
    <div>
      {nominationFull ? <NominationFullBanner /> : null}
      {/* render search bar and pass down handler fn as a prop */}
      < MovieSearch fetchMovies={fetchMovies} />
      < MovieList
        movies={movies}
        totalResults={totalMatches}
        resultsPageNum={resultsPageNum}
        errorMsg={error}
        nominees={nominees}
        nominationFull={nominationFull}
        updatePageNum={updatePageNum}
        addNominee={addNominee} />
      < NominatedMovieList
        nominees={nominees}
        removeNominee={removeNominee} />
    </div>
  );
};
export default MovieListContainer;