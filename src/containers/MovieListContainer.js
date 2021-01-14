// fetch data from OMDB API
// Store search results from the response in its component state
// and pass that data down to its child MovieList

import React, { useState } from 'react';
import MovieSearch from '../components/movies/MovieSearch';
import MovieList from '../components/movies/MovieList';
import NominatedMovieList from '../components/nominations/NominatedMovieList';
import NominationFullBanner from '../components/nominations/NominationFullBanner';

const API_KEY = '4ec7dca';
const BASE_URL = 'http://www.omdbapi.com/?';
const NOMINEE_LIMIT = 5;

const MovieListContainer = () => {
  const [searchCount, setSearchCount] = useState(0);
  // states for each fetch
  const [errorMessage, setErrorMessage] = useState(null);
  const [movies, setMovies] = useState([]);
  const [totalSearchResults, setTotalSearchResults] = useState(0);
  const [resultsPageNum, setResultsPageNum] = useState(1);
  //nominees state
  const [nominees, setNominees] = useState([]);
  const [nominationFull, setNominationFull] = useState(false);

  const resetFetchStates = () => {
    setErrorMessage(null)
    setMovies([])
    setTotalSearchResults(0)
    setResultsPageNum(1)
  }

  const fetchMovies = (query) => {
    resetFetchStates();
    if (!query) return false;

    let apiUrl = BASE_URL.concat(`s=${query}`, `&page=${resultsPageNum}`, `&apikey=${API_KEY}`);
    console.log(`${searchCount}: Calling API @ ${apiUrl}`);
    setSearchCount(searchCount + 1);
    fetch(apiUrl)
      .then(resp => resp.json())
      .then(moviesData => {
        if (moviesData.Response === 'True') {
          setTotalSearchResults(moviesData.totalResults)
          setMovies(moviesData.Search);
        } else {
          setErrorMessage(moviesData.Error)
        }
        // setSearchTitle(query);
      });
    return true;
  };

  const updatePageNum = (page) => {
    setResultsPageNum(page)
    // fetchMovie(searchTitle, page)
  }

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
  }

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
        resultsPageNum={resultsPageNum}
        totalResults={totalSearchResults}
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