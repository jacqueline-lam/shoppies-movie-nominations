import React from 'react';
import MovieCard from './MovieCard';
import { Container, IconButton, Tooltip, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Pluralize from 'react-pluralize';

const useStyles = makeStyles((theme) => ({
  movieGrid: {
    width: "100%",
    height: "100%",
    margin: theme.spacing(1),
  },
}));

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
  const classes = useStyles();
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
      <>
        <Pluralize singular={'match'} plural={'matches'} count={totalResults} />
        <Tooltip title="Previous Page">
          <span>
            <IconButton
              className="pagination-button"
              aria-label="next"
              color="primary"
              variant="outlined"
              onClick={(handlePrevPageBtn)}
              disabled={resultsPageNum <= 1}>
              <NavigateBeforeIcon />
            </IconButton>
          </span>
        </Tooltip>
        <i>{`Page ${resultsPageNum} of ${totalPages}`}</i>
        <Tooltip title="Next Page">
          <span>
            <IconButton
              className="pagination-button"
              aria-label="previous"
              color="primary"
              variant="outlined"
              onClick={(handleNextPageBtn)}
              disabled={resultsPageNum + 1 > totalPages}>
              <NavigateNextIcon />
            </IconButton>
          </span>
        </Tooltip>
        <Grid
          container
          spacing={3}
          className={classes.movieGrid}
        >
          {renderMovies}
        </Grid>
      </>
    ]
  };

  return (
    <Container max-width='md' id='movie-list'>
      {(totalResults > 0) ? (
        renderResults()
      ) : (
          <i>{errorMsg} Try searching your favorite movie!</i>
        )}
    </Container>
  );
};
export default MovieList;
