import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';

const NominateButton = ({ movie, addNominee }) => {
  const [disabledBtn, setDisabledBtn] = useState(false);

  const handleNominationBtn = (movie) => {
    setDisabledBtn(btnPressed => btnPressed = true);
    console.log(disabledBtn)
    console.log(movie)
    addNominee(movie)
  }

  // useEffect(() => {
  //   addNominee(movie)
  // })

  return (
    <Button
      id={movie.imdbID}
      size="small"
      variant="outlined"
      color="primary"
      style={{ borderRadius: "30px" }}
      onClick={() => handleNominationBtn(movie)}
      disabled={disabledBtn}>
      {disabledBtn ? `Nominated` : `Nominate`}
    </Button>
  );
};

export default NominateButton;