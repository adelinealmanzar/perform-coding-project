import './App.css';
import React, { useState, useEffect } from 'react';

import CardsContainer from './CardsContainer';

function App() {
  const [ tracks, setTracks ] = useState(null)

  useEffect(() => {
    fetch('https://api.perform.fm/api/playlists/J97')
    .then(r => r.json())
    .then(data => setTracks(data.tracks))
    .catch(error => console.log('TODO', error))
  }, [])

  return (
    <CardsContainer tracks={tracks}/>
  );
}

export default App;
