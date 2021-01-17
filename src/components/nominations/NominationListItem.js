import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import moviePosterPlaceholder from '../../images/movie-placeholder.png';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
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
    marginRight: '1em',
  },
  title: {
    display: 'inline',
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
        <Button
          id={movie.imdbID}
          className={classes.button}
          display='inherit-inline'
          size="medium"
          variant="outlined"
          color="secondary"
          onClick={() => handleRemoveBtn(movie)}
          disabled={isRemoved}
          endIcon={<DeleteForeverIcon>remove</DeleteForeverIcon>}
        >
          {isRemoved ? `Removed` : `Remove`}
        </Button>
      </ListItem>
      <Divider className={classes.divider}
        variant="inset"
        component="li"
      />
    </React.Fragment>
  );
};

export default NominatedMovieCard;