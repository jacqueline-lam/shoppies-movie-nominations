import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import moviePosterPlaceholder from '../../images/movie-placeholder.png';
import {
  Button,
  Typography,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemSecondaryAction,
  ListItemText,
  Divider,
} from '@material-ui/core';

const useStyles = makeStyles({
  poster: {
    width: '10vh',
    height: 'auto',
    marginRight: '1em'
  },
  title: {
    display: 'inline',
  },
  divider: {
    light: true,
  }
});

// Display movie poster, title, and year
// remove specific movie from nomination list
const NominatedMovieCard = (props) => {
  const {
    movie,
    removeNominee
  } = props;
  const classes = useStyles();
  const [isRemoved, setIsRemoved] = useState(false);
  const title = movie.Title;
  const year = movie.Year;
  const poster = movie.Poster !== "N/A" ? movie.Poster : moviePosterPlaceholder;

  const handleRemoveBtn = (movie) => {
    setIsRemoved(true);
    removeNominee(movie);
  }

  return (
    <React.Fragment>
      <ListItem className="nominated-movie-listitem">
        <ListItemAvatar>
          <img
            alt={`${title} Movie Poster`}
            src={poster}
            className={classes.poster}
          />
        </ListItemAvatar>
        <ListItemText
          primary={
            <React.Fragment>
              <Typography
                component="span"
                variant="h6"
                className={classes.title}
                color="primary"
              >
                {title}
              </Typography>
            </React.Fragment>
          }
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.subtitle}
                color="primary"
              >
                {year}
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <ListItemSecondaryAction>
        <Button
          // edge="end"
          id={movie.imdbID}
          className="remove-nominee-btn"
          size="small"
          variant="outlined"
          color="primary"
          onClick={() => handleRemoveBtn(movie)}
          disabled={isRemoved}>
          {isRemoved ? `Removed` : `Remove`}
        </Button>
      </ListItemSecondaryAction>
      <Divider className="classes.divider"
        variant="inset"
        component="li"
      />
    </React.Fragment>
  );
};

export default NominatedMovieCard;

// <img className="movie-thumbnail" alt="movie thumbnail" src={poster} />
//       <h3>{title} (<i>{year}</i>)</h3>
//       {/* <button>Remove nomination</button> */}
      // <Button
      //   id={movie.imdbID}
      //   className="remove-nominee-btn"
      //   size="small"
      //   variant="outlined"
      //   color="primary"
      //   onClick={() => handleRemoveBtn(movie)}
      //   disabled={isRemoved}>
      //   {isRemoved ? `Removed` : `Remove`}
      // </Button>