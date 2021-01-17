import React from 'react';
import NominationListItem from './NominationListItem';
import { makeStyles } from '@material-ui/core/styles';
import {
  SwipeableDrawer,
  Typography,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  ListItemAvatar,
  Divider,
} from '@material-ui/core';

const useStyles = makeStyles({
  list: {
    backgroundColor: '#1D1E21',
    width: '100%',
    height: '100%',
    minWidth: '620px',
    listStyle: 'none',
    "& .MuiDrawer-paper ": { backgroundColor: '#1D1E21' },
  },
  heading: {
    display: 'inline',
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
                  {nomineesCount} / 5 Movies Nominated
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
              <i>You have not nominated any movies.</i>
            )
        }
      </List>
    </div >
  );

  return (
    <div id="nomination-drawer">
      {/* <Button onClick={toggleDrawer(true)}>test btn</Button> */}
      < SwipeableDrawer
        anchor='right'
        open={isOpen}
        onClose={toggleDrawer}
        onOpen={toggleDrawer}
      >
        {renderNominationList}
      </SwipeableDrawer >
    </div >
  );

  // Responsive Design: Swipe or clickaway to close drawer
  // const toggleDrawer = () => {
  //   // const [closeDrawer] = this.props;
  //   // Edge case or exception buttons
  //   // if (event && event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
  //   //   return;
  //   // }
  //   closeDrawer();
  // };

};

export default NominationDrawer;
