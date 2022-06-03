import React from 'react'

import { NewsContextProvider } from '../News/NewsContext'
import { useAuth0 } from '@auth0/auth0-react'

import { useLocation } from 'react-router-dom';
import News from '../News/News'
import convertStates from '../Regions/Regions'
import MultiBox from '../MultiBox/MultiBox';

import {
  Typography,
  Container,
  Stack,
  Grid,
  Card,
} from '@mui/material'

import './Home.css'

function Home() {
  const { isAuthenticated } = useAuth0()
  const loc = useLocation();
  const [u_loc, setULoc] = React.useState(loc.state ? [loc.state] : null);


  const handleLocation = (value) => {
    setULoc(value);
  }

  const [locations, setLocations] = React.useState([]);
  React.useEffect(() => {
    convertStates().then(result => {
      setLocations(result);
    });

  }, [])
  //console.log(u_loc);

  return (
    <Container maxWidth='xl'>
      <div className='wrapper'>
        <h1>News</h1>
      </div>

      {isAuthenticated && (
        <Typography
          variant='h5'
          fontWeight='bold'
        >
          Saved Articles
        </Typography>
      )}

      <NewsContextProvider u_loc={u_loc ? u_loc : null}>
        <Stack direction="column" spacing={2}>
          <MultiBox
            list={locations}
            label='Select State'
            defaultValue={u_loc ? u_loc : []}
            setValue={handleLocation} />
          <News />
        </Stack>
      </NewsContextProvider>
    </Container>
  )
}

export default Home
