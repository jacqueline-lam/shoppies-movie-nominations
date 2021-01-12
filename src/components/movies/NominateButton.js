import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';

const NominateButton = ({ movie, isNominated, addNominee }) => {
  // const [disabledBtn, setDisabledBtn] = useState(isNominated);

  const handleNominationBtn = (movie) => {
    addNominee(movie)
    // setDisabledBtn(btnPressed => btnPressed = true);
  }

  return (
    <Button
      id={movie.imdbID}
      size="small"
      variant="outlined"
      color="primary"
      style={{ borderRadius: "30px" }}
      onClick={() => handleNominationBtn(movie)}
      disabled={isNominated}>
      {isNominated ? `Nominated` : `Nominate`}
    </Button>
  );
};

export default NominateButton;