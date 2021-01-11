import React, { useState } from 'react'
import NominationList from '../components/nominations/NominationList'


const NominationListContainer = () => {
  const [nominatedMovies, setNominatedMovies] = useState([]);

  return (
    <div id='nomination-container'>
      <h1>Your Nominations</h1>
      <h4>{nominatedMovies.length}/5 Movies Nominated</h4>
      {/* < NominationList nominees={nominatedMovies} /> */}
    </div>
  )

}
export default NominationListContainer