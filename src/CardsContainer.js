import React from 'react'
import styled from 'styled-components'

import Card from './Card'

const StyledDiv = styled.div`
  width: 100%;
  height: 100vh;
  background: #FFFFFC;
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
`

function CardsContainer({ tracks }) {
  return (
    <StyledDiv>
        {tracks?.map(track => <Card key={track.id} track={track} />)}
    </StyledDiv>
  )
}

export default CardsContainer