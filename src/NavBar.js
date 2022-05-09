import React from 'react'
import styled from 'styled-components'
import { BsSpotify } from 'react-icons/bs'
import { SiApplemusic } from 'react-icons/si'

const StyledNav = styled.nav`
    margin-bottom: 40px;
    position: sticky;
    top: 0;
    z-index: 100;
    background: #fffffc;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
`
const StyledA = styled.a`
    text-decoration: none;
    color: white;
    font-size: 20px;
    text-align: center;
    // width: 130px;
    border-radius: 40px;
`
const LogoImg = styled.img`
    height: 70px;
    width: 220px;
`
const DownloadsDiv = styled.div`
    padding: 15px;
    display: flex;
    flex-direction: row;
`
const SpotifyA = styled(StyledA)`
    background: #1ed761;
    padding: 10px;
    width: 120px;
`
const AppleA = styled(StyledA)`
    background: black;
    margin-left: 1%;
    width: 160px;
    padding: 10px;
`

function NavBar() {
    const downloadHref = "https://apps.apple.com/us/app/perform-music-for-workouts/id1565615765"
    const homeHref = "https://perform.fm/home/"
    const logoSrc = "https://i.ibb.co/ncnyCGX/Screen-Shot-2022-05-09-at-11-02-16-AM.png"
  
  return (
    <StyledNav>
        <StyledA href={homeHref}>
            <LogoImg src={logoSrc} alt="perform logo"></LogoImg>
        </StyledA>
        <DownloadsDiv>
            <SpotifyA href={downloadHref}>
                <BsSpotify></BsSpotify> Spotify
            </SpotifyA>
            <AppleA href={downloadHref}>
                <SiApplemusic></SiApplemusic> Apple Music
            </AppleA>
        </DownloadsDiv>
    </StyledNav>
  )
}

export default NavBar