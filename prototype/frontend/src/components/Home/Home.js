import React from 'react'

import { useLocation } from 'react-router-dom';

import { Container, Typography, } from '@mui/material'
import { NewsContextProvider } from './NewsContext'
import { useAuth0 } from '@auth0/auth0-react'

import News from './News'

import './Home.css'

function Home() {
  const news_loc = useLocation();
  const [l, setLoc] = React.useState(news_loc.state);

  const { isAuthenticated } = useAuth0()

  return (
    <Container maxWidth='xl'>
      <div className='wrapper'>
        <h1>Home</h1>
      </div>

      {isAuthenticated && (
        <Typography
          variant='h5'
          fontWeight='bold'
        >
          Saved Articles
        </Typography>
      )}

      <NewsContextProvider loc={l}>
        <News />
      </NewsContextProvider>
    </Container>
  )
}

export default Home
