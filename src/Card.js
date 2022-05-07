import React from 'react'
import styled from 'styled-components'

const StyledCardDiv = styled.div`
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

const StyledInfoDiv = styled.div`
    background-color: #fffffc;
    height: 30%;
    width: 100%;
    opacity: 80%;
    border-radius: 0px 0px 40px 40px;
    display: flex;
    flex-flow: column wrap;
    // align-content: stretch;
`

// TODO: fix prop implementation in styled components
// background-image: url(${({ track }) => track.albumArtUrl});

function Card({ track }) {

  return (
    <StyledCardDiv style={{backgroundImage: `url(${track.albumArtUrl})`}}>
        <StyledInfoDiv>
            <div style={{fontSize: '13px', fontWeight: 'bold', paddingLeft: '5px'}}>{track.name}</div>
            <div style={{fontSize: '11px', paddingLeft: '5px'}}>{track.mainArtist}</div>
            <div style={{fontSize: '10px', fontWeight: 'bold', paddingLeft: '5px'}}>{Math.round(track.songTempo)}</div>
        </StyledInfoDiv>
    </StyledCardDiv>
  )
}

export default Card