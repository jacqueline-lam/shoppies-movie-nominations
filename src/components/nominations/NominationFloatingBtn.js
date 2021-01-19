import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import StarOutlineRoundedIcon from '@material-ui/icons/StarOutlineRounded';
import StarRoundedIcon from '@material-ui/icons/StarRounded';
import {
  Fab,
  Grid,
  Tooltip,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    bottom: '6%',
    right: '3%',
    fontSize: '300%',
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

// Nomination Count Floating Action Button - click to display full list
const NominatationFloatingBtn = (props) => {
  const {
    nomineeCount,
    toggleNominationDrawer,
  } = props;

  const classes = useStyles();

  return (
    <Grid container
      justify="flex-end"
      className={classes.root}>
      <Tooltip title="Your Nominations">
        <Fab
          variant="extended"
          color="secondary"
          size="large"
          aria-label="show nominations"
          onClick={() => toggleNominationDrawer()}>
          {(!nomineeCount) ? (
            <StarOutlineRoundedIcon spacing={3} className={classes.extendedIcon} />
          ) : (
              <StarRoundedIcon className={classes.extendedIcon} />
            )}
          {nomineeCount}
        </Fab>
      </Tooltip>
    </Grid>
  );
};

export default NominatationFloatingBtn;