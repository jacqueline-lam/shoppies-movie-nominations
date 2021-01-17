import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Fab, Grid, Tooltip } from '@material-ui/core';
import StarOutlineRoundedIcon from '@material-ui/icons/StarOutlineRounded';
import StarRoundedIcon from '@material-ui/icons/StarRounded';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    top: '5%',
    right: '2%',
    fontSize: '200%',
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  }
}));

// Nomination Count Floating Action Button - click to display full list
const NominatationFloatingBtn = ({ nomineeCount }) => {
  const classes = useStyles();
  const handleFloatingBtnClick = () => {

  }

  return (
    <Grid container
      justify="flex-end"
      className={classes.root}>
      <Tooltip title="Your Nominations">
        <Fab
          variant="extended"
          color='secondary'
          size='large'
          aria-label='show nominations'
          onClick={handleFloatingBtnClick}>
          {(!nomineeCount) ? (
            <StarOutlineRoundedIcon spacing={3} className={classes.extendedIcon} />
          ) : (
              <StarRoundedIcon className={classes.extendedIcon} />
            )}
          {nomineeCount}
        </Fab>
      </Tooltip>
    </Grid>
  )
}

export default NominatationFloatingBtn;