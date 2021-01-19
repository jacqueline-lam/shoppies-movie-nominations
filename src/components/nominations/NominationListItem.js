import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import moviePosterPlaceholder from '../../images/movie-placeholder.png';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import {
  IconButton,
  Typography,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Divider,
} from '@material-ui/core';

const useStyles = makeStyles({
  listItem: {
    backgroundColor: '#1D1E21',
    padingBottom: '7px',
  },
  poster: {
    width: '10vh',
    height: 'auto',
    marginRight: '1em',
  },
  title: {
    display: 'inline',
    fontSize: '1.1em',
    lineHeight: '0.5px',
  },
  subtitle: {
    fontSize: '0.8em',
  },
  divider: {
    light: true,
  },
  button: {
    margin: '0 1em 0.2em 1em',
    borderRadius: '30px',
  },
});

// Display movie poster, title, and year
// remove specific movie from nomination list
const NominatedMovieCard = (props) => {
  const {
    movie,
    removeNominee,
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
      <ListItem className={classes.listItem}>
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
        <Tooltip title="Remove nomination">
          <IconButton
            id={movie.imdbID}
            className={classes.button}
            aria-label="delete"
            size="medium"
            color="secondary"
            onClick={() => handleRemoveBtn(movie)}
            disabled={isRemoved}
          >
            <DeleteForeverIcon />
          </IconButton>
        </Tooltip>
      </ListItem>
      <Divider className={classes.divider}
        variant="inset"
        component="li"
      />
    </React.Fragment >
  );
};

export default NominatedMovieCard;