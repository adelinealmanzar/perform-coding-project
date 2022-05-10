import React from 'react'
import styled from 'styled-components'
import marketingImg from '../assets/download.gif'

const MarketingImg = styled.img`
  width: 100%;
  height: 400px;
`

function MarketingContainer({ downloadHref }) {
  return (
    <a href={downloadHref}>
        <MarketingImg src={marketingImg} alt="marketing-image"></MarketingImg>
    </a>
  )
}

export default MarketingContainer