import React from 'react'
import styled from 'styled-components'

import Card from './Card'

const CardsContainerDiv = styled.div`
  width: 100%;
  // height: 100vh;
  background: #FFFFFC;
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
  align-content: center;
`

function CardsContainer({ tracks }) {
  return (
    <CardsContainerDiv>
        {tracks?.map(track => <Card key={track.id} track={track} />)}
    </CardsContainerDiv>
  )
}

export default CardsContainer