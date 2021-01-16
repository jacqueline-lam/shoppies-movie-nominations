import React, { useState } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';


function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: '100%',
//     anchorOrigin: {
//       horizontal: 'center',
//       vertical: 'top'
//     },
//     // '& > * + *': {
//     //   marginTop: theme.spacing(2),
//     // },
//   },
// }));

const NominationFullBanner = () => {
  // const classes = useStyles();
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
      <Snackbar open={open} onClose={handleClose} anchorOrigin={{ vertical, horizontal }} key="topcenter">
        <Alert onClose={handleClose} severity="success">
          <h4>You have completed 5 nominations!</h4><br />
          <i>Changed your mind? Edit the list by removing nominees.</i>
        </Alert>
      </Snackbar>
    </div >
  )
}

export default NominationFullBanner;