import React, { useState } from 'react';
import NominatedMovieCard from './NominatedMovieCard';
import { makeStyles } from '@material-ui/core/styles';
import {
  SwipeableDrawer,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  ListItemAvatar,
  Divider,
} from '@material-ui/core';

const useStyles = makeStyles({
  list: {
    minWidth: 640,
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

  return (
    <div id="nomination-drawer">
      {/* <Button onClick={toggleDrawer(true)}>test btn</Button> */}
      <SwipeableDrawer
        anchor='right'
        open={isOpen}
        onClose={toggleDrawer}
        onOpen={toggleDrawer}
      >
        <List><ListItemText primary='test' /></List>
        {/* {renderNominationList} */}
      </SwipeableDrawer>
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

  const renderNominationList = () => (
    <div id="nomination-list" className={classes.list}>
      <h2>Your Nominations</h2>
      <h4>{nomineesCount} / 5 Movies Nominated</h4>
      {(nomineesCount > 0) ? (
        nominees.map(nominatedMovie => <NominatedMovieCard
          key={nominatedMovie.imdbID}
          movie={nominatedMovie}
          removeNominee={removeNominee}
        />)
      ) : (
          <i>You have not nominated any movies.</i>
        )}
      {/* {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
          <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
          <ListItemText primary={text} />
                </ListItem>
                ))}
              </List> */}


      {/*
      <List>
        <ListItem button key='nominee.imdbID'>
          <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
          <ListItemText primary={text} />
          <ListItemAvatar>
            <Avatar
              alt={`Avatar n°${value + 1}`}
              src={`/static/images/avatar/${value + 1}.jpg`}
            />
          </ListItemAvatar>

          <ListItemText id={labelId} primary={`Line item ${value + 1}`} />
          <ListItemSecondaryAction>
            <Checkbox
              edge="end"
              onChange={handleToggle(value)}
              checked={checked.indexOf(value) !== -1}
              inputProps={{ 'aria-labelledby': labelId }}
            />
          </ListItemSecondaryAction>
        </ListItem>
      </List > */}
    </div >
  );

};

export default NominationDrawer;