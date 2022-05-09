import React, { useState } from 'react'
import styled from 'styled-components'

const CardDiv = styled.div`
  margin:10px;
  background: #fff;
  height: 200px;
  width: 200px;
  border-radius: 40px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);
  background-size: cover;
  display: flex;
  align-items: flex-end;
`
const InfoDiv = styled.div`
  background-color: #fffffc;
  height: 30%;
  width: 100%;
  opacity: 80%;
  border-radius: 0px 0px 40px 40px;
  display: flex;
  justify-content: space-between;
`
const TextDiv = styled.div`
  display: flex;
  flex-flow: column wrap;
`
const TrackDiv = styled.div`
  font-size: 14px;
  font-weight: bold;
  padding-left: 4px;
`
const ArtistDiv = styled.div`
  font-weight: normal;
  font-size: 12px;
  padding-left: 15px;
`
const TempoDiv = styled(TextDiv)`
  font-size: 30px;
  padding-right: 5px;
  font-weight: bold;
`

function Card({ track }) {
  const [ isPlaying, setIsPlaying ] = useState(false)
  const [ audio ] = useState(new Audio(track.previewUrl))

  function playPause() {
    if (isPlaying) {
      audio.pause()
    } else {
      audio.play()
    }

    setIsPlaying(isPlaying => !isPlaying)
  }

  return (
    <CardDiv
      style={{backgroundImage: `url(${track.albumArtUrl})`}}
      onClick={playPause}
    >
        <InfoDiv>
            <TextDiv>
              <TrackDiv>{track.name}</TrackDiv>
              <ArtistDiv>{track.mainArtist}</ArtistDiv>
            </TextDiv>
            <TempoDiv>{Math.round(track.songTempo)}</TempoDiv>
        </InfoDiv>
    </CardDiv>
  )
}

export default Card