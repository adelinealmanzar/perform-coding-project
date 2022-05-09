import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import marketingImg from '../assets/download.gif'

import CardsContainer from './CardsContainer';
import NavBar from './NavBar';

const AppDiv = styled.div`
  background-color: #FFFFFC;
  height: 100vh;
  font-family: Poppins,Helvetica Neue,Arial,Helvetica,sans-serif;
`

const MarketingImg = styled.img`
  width: 100%;
  height: 400px;
`

function App() {
  const [ tracks, setTracks ] = useState(null)

  const downloadHref = "https://apps.apple.com/us/app/perform-music-for-workouts/id1565615765"

  useEffect(() => {
    fetch('https://api.perform.fm/api/playlists/Z5BJ')
    .then(r => r.json())
    .then(data => setTracks(data.tracks))
    .catch(error => console.log('TODO', error))
  }, [])

  return (
    <AppDiv>
      <NavBar downloadHref={downloadHref}/>
      <a href={downloadHref}>
        <MarketingImg src={marketingImg} alt="marketing-image"></MarketingImg>
      </a>
      <CardsContainer tracks={tracks}/>
    </AppDiv>
  );
}

export default App;
