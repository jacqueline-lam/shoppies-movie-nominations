import React, { useState } from 'react';
import { Snackbar, Typography } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';


function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const NominationFullBanner = () => {
  const [open, setOpen] = useState(true);
  const vertical = 'top', horizontal = 'center'

  const handleClose = (event) => {
    if (event.currentTarget.title === 'Close') {
      setOpen(false);
    }
  };

  return (
    <div className='root'>
      {/* <Button variant="outlined" onClick={handleClick}>
        Open success snackbar
      </Button> */}
      <Snackbar
        open={open}
        onClose={handleClose}
        anchorOrigin={{ vertical, horizontal }}
        key="topcenter"
      >
        <Alert onClose={handleClose} severity="success">
          <Typography variant="h5" gutterBottom>
            You have completed 5 nominations!
          </Typography>
          <Typography variant="body1" gutterBottom>
            Changed your mind? You can edit the list by removing selected nominees.
          </Typography>
        </Alert>
      </Snackbar>
    </div >
  )
}

export default NominationFullBanner;