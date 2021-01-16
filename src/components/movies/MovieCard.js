import React from 'react';
import moviePosterPlaceholder from '../../images/movie-placeholder.png';
import { makeStyles, createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import { Grid, Card, CardContent, CardMedia, CardActions, Typography, Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

let customTheme = createMuiTheme();
customTheme = responsiveFontSizes(customTheme);

const useStyles = makeStyles((theme) => ({
  root: {
    // maxWidth: 345,
    minWidth: 160,
    backgroundColor: '#2d2d37', //12dp elevation
  },
  media: {
    height: 100,
    paddingBottom: '100%', // 16:9 = '56.25%'
  },
  header: {
    padding: '5%',
    height: 80,
    maxWidth: 1000,
    color: '#eeeeee',
    display: 'inline-grid',
    verticalAlign: 'middle',
    justifyContent: 'center', // horizontal alignmet
  },
  button: {
    justifyContent: 'center',
  },
  // expand: {
  //   transform: 'rotate(0deg)',
  //   marginLeft: 'auto',
  //   transition: theme.transitions.create('transform', {
  //     duration: theme.transitions.duration.shortest,
  //   }),
  // },
  // expandOpen: {
  //   transform: 'rotate(180deg)',
  // },
}));

const MovieCard = ({ movie, disableBtn, btnContent, addNominee }) => {
  const classes = useStyles();
  const poster = movie.Poster !== "N/A" ? movie.Poster : moviePosterPlaceholder;

  return (
    // <div className={classes.root}>

    <Grid item md={3} sm={4} xs={6}>
      <Card className={classes.root} key={movie.imdbID}>
        {/* <CardHeader
            className={classes.header}
            // title={movie.Title}
            // subheader={movie.Year}
            height="50%">
          </CardHeader> */}
        <CardMedia
          className={classes.media}
          image={poster}
          title={movie.Title}
        />
        <CardContent className={classes.header}>
          <Typography variant="h6" className='responsive-headers'>
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
            size="medium"
            variant="outlined"
            color="secondary"
            onClick={() => addNominee(movie)}
            disabled={disableBtn}>
            {btnContent}
          </Button>
        </CardActions>
        {/* <Button
          className='nominate-btn'
          id={movie.imdbID}
          size="medium"
          variant="outlined"
          color="secondary"
          onClick={() => addNominee(movie)}
          disabled={disableBtn}>
          {btnContent}
        </Button> */}
      </Card>
    </Grid>

    // </div >
  );
};

export default MovieCard;


{/* Nominate Button */ }
{/* <Button
        className='nominate-btn'
        // className={classes.button}
        id={movie.imdbID}
        size="medium"
        variant="outlined"
        color="secondary"
        onClick={() => addNominee(movie)}
        disabled={disableBtn}
        startIcon={<AddIcon />}>
        {btnContent}
      </Button> */}