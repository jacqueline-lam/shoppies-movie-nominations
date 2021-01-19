import React from 'react';
import MovieCard from './MovieCard';
import { Container, IconButton, Tooltip, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Pluralize from 'react-pluralize';

const RESULTS_PER_PAGE = 10;

const useStyles = makeStyles((theme) => ({
  movieGrid: {
    width: "100%",
    height: "100%",
    justify: 'center',
    margin: theme.spacing(0.2),
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
    addNominee,
  } = props;

  const classes = useStyles();
  const totalPages = Math.ceil(totalResults / RESULTS_PER_PAGE) || 0;

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

    const renderPagination = (
      <React.Fragment>
        <Tooltip title="Previous Page">
          <span>
            <IconButton
              className="pagination-button"
              aria-label="next"
              color="primary"
              variant="outlined"
              onClick={() => updatePageNum(resultsPageNum - 1)}
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
              onClick={() => updatePageNum(resultsPageNum + 1)}
              disabled={resultsPageNum + 1 > totalPages}>
              <NavigateNextIcon />
            </IconButton>
          </span>
        </Tooltip>
      </React.Fragment>
    )

    return (
      <React.Fragment>
        <Pluralize
          singular={'match'}
          plural={'matches'}
          count={totalResults}
        />
        {renderPagination}
        <Grid
          container
          spacing={2}
          className={classes.movieGrid}
        >
          {renderMovies}
        </Grid>
        {renderPagination}
      </React.Fragment>
    );
  };

  return (
    <Container max-width='lg' id='movie-list'>
      {(totalResults > 0) ? (
        renderResults()
      ) : (
          <i>{errorMsg} Try searching your favorite movie!</i>
        )}
    </Container>
  );
};

export default MovieList;
