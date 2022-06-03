import React from 'react'
import { useNavigate } from 'react-router-dom'

import { Grid, Box, Typography, Stack, Paper, Button, Container } from '@mui/material'
import { styled } from '@mui/material/styles'

import SearchIcon from '@mui/icons-material/Search'

import ComboBox from '../ComboBox/ComboBox'
import convertStates from '../Regions/Regions'

import './Splash.css'

function Splash() {
  const [occupation, setOccupation] = React.useState('')
  const occupations = ['Teacher', 'Lawyer', 'Engineer']

  const [information, setInformation] = React.useState('')
  const informations = ['Unions', 'News', 'Compare']


  const [location, setLocation] = React.useState('')
  const [locations, setLocations] = React.useState([]);

  const navigate = useNavigate()

  const Item = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(1),
    textAlign: 'center',
    background: 'transparent'
  }))

  React.useEffect( () => {
    convertStates().then( result => {
      setLocations(result);
    });
    
  }, [])

  const handleSearch = () => {
    switch (information) {
      case "Unions":
        navigate('/unions', { state: locations.find(l => l.name === location) });
        break;
      case "News":
        navigate('/news', { state: locations.find(l => l.name === location)});
        break;
      case "Compare":
        navigate('/compare', { state: locations.find(l => l.name === location) });
        break;
      default:
        break
    }
  }

  return (
    <Container maxWidth='xl'>
      <Box
        display='flex'
        justifyContent='center'
        alignItems='center'
        height='100vh'
      >
        <Stack className='splash-page-stack' width='100%'>
          <Item className='splash-page-stack-item' elevation={0}>
            <Typography
              fontWeight='bold'
              fontSize='100px'
              fontFamily='playfair'
            >
              INFOUNION!
            </Typography>
          </Item>

          <Item className='splash-page-stack-item' elevation={0}>
            <Grid
              container
              columns={{ xs: 4, sm: 8, md: 12 }}
              direction={{ xs: 'column', sm: 'row' }}
              justifyContent='center'
              alignItems='center'
              width='100%'
            >
              <Grid item xs={1}>
                <Typography
                  fontWeight='bold'
                  fontSize='20px'
                >
                  I&nbsp;AM&nbsp;A/AN
                </Typography>
              </Grid>

              <Grid item xs={1}>
                <ComboBox list={occupations} label='Occupation' value={occupation} setValue={setOccupation} />
              </Grid>

              <Grid item xs={1}>
                <Typography
                  fontWeight='bold'
                  fontSize='20px'
                >
                  BASED&nbsp;IN
                </Typography>
              </Grid>

              <Grid item xs={1}>
                <ComboBox list={
                  locations.map((l) => l.name)} label='Location' value={location} setValue={setLocation} /> 
              </Grid>
            </Grid>
          </Item>

          <Item className='splash-page-stack-item' elevation={0}>
            <Grid
              container
              columns={{ xs: 2, sm: 8, md: 12 }}
              direction={{ xs: 'column', sm: 'row' }}
              justifyContent='center'
              alignItems='center'
              width='100%'
            >

              <Grid item xs={1}>
                <Typography
                  fontWeight='bold'
                  fontSize='20px'
                >
                  I&nbsp;WANT
                </Typography>
              </Grid>

              <Grid item xs={1}>
                <ComboBox list={informations} label='Information' value={information} setValue={setInformation} />
              </Grid>
            </Grid>
          </Item>

          <Item className='splash-page-stack-item' elevation={0}>
            <Button onClick={handleSearch}>
              <SearchIcon />
            </Button>
          </Item>

        </Stack>
      </Box>
    </Container>
  )
}

export default Splash
