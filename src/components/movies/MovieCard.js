import React from 'react';
import moviePosterPlaceholder from '../../images/movie-placeholder.png';
import {
  makeStyles,
  createMuiTheme,
  responsiveFontSizes
} from '@material-ui/core/styles';
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Typography,
  Button
} from '@material-ui/core';

let customTheme = createMuiTheme();
customTheme = responsiveFontSizes(customTheme);

const useStyles = makeStyles((theme) => ({
  root: {
    // minWidth: 160,
    backgroundColor: '#2d2d37', //12dp elevation
  },
  media: {
    height: 100,
    paddingBottom: '100%', // 16:9 = '56.25%'
  },
  header: {
    padding: '10% 3% 0% 3%',
    height: 80,
    maxWidth: 1000,
    color: '#eeeeee',
    display: 'inline-grid',
    verticalAlign: 'middle',
    justifyContent: 'center', // horizontal alignmet
  },
  movieTitle: {
    fontSize: '1.1em',
    lineHeight: '1',
  },
  button: {
    justifyContent: 'center',
    marginBottom: 10
  },
}));

const MovieCard = (props) => {
  const {
    movie,
    disableBtn,
    btnContent,
    addNominee
  } = props;

  const classes = useStyles();
  const poster = movie.Poster !== "N/A" ? movie.Poster : moviePosterPlaceholder;

  return (
    <Grid item md={3} sm={4} xs={6}>
      <Card className={classes.root} key={movie.imdbID}>
        <CardMedia
          className={classes.media}
          image={poster}
          title={movie.Title}
        />
        <CardContent className={classes.header}>
          <Typography variant="h6" className={classes.movieTitle}>
            {movie.Title}
          </Typography>
          <Typography variant="subtitle2">
            {movie.Year}
          </Typography>
        </CardContent>
        <CardActions className={classes.button}>
          <Button
            aria-label="add to nomination list"
            className='nominate-btn'
            id={movie.imdbID}
            size="large"
            variant="outlined"
            color="secondary"
            onClick={() => addNominee(movie)}
            disabled={disableBtn}>
            {btnContent}
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};
export default MovieCard;