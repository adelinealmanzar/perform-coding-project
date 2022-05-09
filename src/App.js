import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import CardsContainer from './CardsContainer';

const AppDiv = styled.div`
  background-color: #FFFFFC;
  height: 100vh;
  font-family: Poppins,Helvetica Neue,Arial,Helvetica,sans-serif;
`

function App() {
  const [ tracks, setTracks ] = useState(null)

  useEffect(() => {
    fetch('https://api.perform.fm/api/playlists/J97')
    .then(r => r.json())
    .then(data => setTracks(data.tracks))
    .catch(error => console.log('TODO', error))
  }, [])

  return (
    <AppDiv>
      <CardsContainer tracks={tracks}/>
    </AppDiv>
  );
}

export default App;
