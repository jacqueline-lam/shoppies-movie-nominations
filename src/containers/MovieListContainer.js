import React, { useState } from 'react';
import NominationFloatingBtn from '../components/nominations/NominationFloatingBtn';
import NominationDrawer from '../components/nominations/NominationDrawer';
import NominationFullBanner from '../components/nominations/NominationFullBanner';
import MovieSearch from '../components/movies/MovieSearch';
import MovieList from '../components/movies/MovieList';
import { Container } from '@material-ui/core';

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
  const [showNominations, setShowNominations] = useState(false);
  const [nominees, setNominees] = useState([]);
  const [nominationFull, setNominationFull] = useState(false);
  const nomineeCount = nominees.length;

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
          setTotalMatches(parseInt(moviesData.totalResults));
          setMovies(moviesData.Search);
          setLastSearchTitle(query);
        } else {
          setError(moviesData.Error);
        }
      });
    return true;
  };

  const toggleNominationDrawer = () => {
    console.log(`Setting showNominations to: ${!showNominations}`)
    setShowNominations(!showNominations);
  }

  const updatePageNum = (page) => {
    setResultsPageNum(page);
    fetchMovies(lastSearchTitle, page);
  };

  const addNominee = (movie) => {
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
    if (nomineeCount - 1 < NOMINEE_LIMIT) {
      setNominationFull(false);
    }
    setNominees(oldNominees => oldNominees.filter(nominee => nominee.imdbID !== movie.imdbID));
  };

  return (
    <div id='main-container'>
      <Container max-width='lg'>
        <h2>Nominate your favorite movies for The Shoppies Movie Awards! 🏆</h2>
        <NominationFloatingBtn
          nomineeCount={nomineeCount}
          toggleNominationDrawer={toggleNominationDrawer}
        />
        {nominationFull ? <NominationFullBanner /> : null}
        {
          showNominations ? (
            <NominationDrawer
              nominees={nominees}
              removeNominee={removeNominee}
              toggleDrawer={toggleNominationDrawer}
              isOpen={showNominations}
            />
          ) : null
        }
        <MovieSearch fetchMovies={fetchMovies} />
        <MovieList
          movies={movies}
          totalResults={totalMatches}
          resultsPageNum={resultsPageNum}
          errorMsg={error}
          nominees={nominees}
          nominationFull={nominationFull}
          updatePageNum={updatePageNum}
          addNominee={addNominee}
        />
      </Container>
    </div >
  );
};
export default MovieListContainer;