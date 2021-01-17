import React from 'react';
import NominationListItem from './NominationListItem';
import { makeStyles } from '@material-ui/core/styles';
import {
  SwipeableDrawer,
  Typography,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core';

const useStyles = makeStyles({
  list: {
    backgroundColor: '#1D1E21',
    width: '100%',
    height: '100%',
    maxWidth: '480px',
    listStyle: 'none',
    "& .MuiDrawer-paper ": {
      backgroundColor: '#1D1E21',
      fontFamily: 'Broadway3D',
    },
    padding: '0% 2% 0% 0%',
  },
  heading: {
    display: 'inline',
  },
  note: {
    padding: '0% 3% 1% 3%',
  },
});

const NominationDrawer = (props) => {
  const {
    nominees,
    removeNominee,
    toggleDrawer,
    isOpen,
  } = props;

  const classes = useStyles();
  const nomineesCount = nominees.length;

  const renderNominationList = (
    <div id="nomination-list" className={classes.list}>
      <List>
        <ListItem>
          <ListItemText
            primary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="h2"
                  className={classes.heading}
                  color="primary"
                >
                  Your Nominations
                   </Typography>
              </React.Fragment>
            }
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="subtitle1"
                  className={classes.subheading}
                  color="primary"
                >
                  🌟 {nomineesCount} / 5 Movie Nominations
                   </Typography>
              </React.Fragment>
            }
          />
        </ListItem>
        {
          (nomineesCount > 0) ? (
            nominees.map(nominatedMovie => <NominationListItem
              key={nominatedMovie.imdbID}
              movie={nominatedMovie}
              removeNominee={removeNominee}
            />)
          ) : (
              <Typography
                className={classes.note}
                variant='subtitles1'
                color='primary'
              >
                You have not nominated any movies.
              </Typography>
            )
        }
      </List>
    </div>
  );

  return (
    <div id="nomination-drawer">
      < SwipeableDrawer
        anchor='right'
        open={isOpen}
        onClose={toggleDrawer}
        onOpen={toggleDrawer}
      >
        {renderNominationList}
      </SwipeableDrawer >
    </div>
  );
};

export default NominationDrawer;
