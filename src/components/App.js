import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import CardsContainer from './CardsContainer';
import MarketingContainer from './MarketingContainer';
import NavBar from './NavBar';

const AppDiv = styled.div`
  background-color: #FFFFFC;
  height: 100vh;
  font-family: Poppins,Helvetica Neue,Arial,Helvetica,sans-serif;
`

function App() {
  const [ tracks, setTracks ] = useState(null)

  const downloadHref = "https://apps.apple.com/us/app/perform-music-for-workouts/id1565615765"

  useEffect(() => {
    fetch('https://api.perform.fm/api/playlists/Z5BJ')
    .then(r => r.json())
    .then(data => setTracks(data.tracks))
    .catch(error => console.log(error.message))
  }, [])

  return (
    <AppDiv>
      <NavBar downloadHref={downloadHref}/>
      <MarketingContainer downloadHref={downloadHref}/>
      <CardsContainer tracks={tracks}/>
    </AppDiv>
  );
}

export default App;
