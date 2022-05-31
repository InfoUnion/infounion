import React from 'react'
import { useNavigate } from 'react-router-dom'

import { Grid, Box, Typography, Stack, Paper, Button, Container } from '@mui/material'
import { styled } from '@mui/material/styles'

import SearchIcon from '@mui/icons-material/Search'

import axios from 'axios'

import ComboBox from './ComboBox'
import './Splash.css'

function Splash() {
  const [occupation, setOccupation] = React.useState('')
  const occupations = ['Teacher', 'Lawyer', 'Engineer']

  const [information, setInformation] = React.useState('')
  const informations = ['Unions', 'News', 'Connections']



  const [regions, setRegions] = React.useState([])
  async function states() {
    try {
      const response = await axios.get('http://localhost:4000/states')
      return response
    } catch (error) {
      // We're not handling errors. Just logging into the console.
      console.log(error)
      return false
    }
  }

  React.useEffect(() => {
    states().then(result => {
      if (result) { setRegions(result.data) }
    })
  }, [])

  const [location, setLocation] = React.useState('')
  const locations = regions.map((r) => {
    switch (r) {
      case 'CA':
        return [r, 'California'];
      case 'CT':
        return [r, 'Connecticut'];
      case 'DC':
        return [r, 'Washington DC'];;
      case 'MN':
        return [r, 'Minnesota'];
      case 'MO':
        return [r, 'Missouri'];
      case 'MT':
        return [r, 'Montana'];
      case 'NY':
        return [r, 'New York'];
      case 'NJ':
        return [r, 'New Jersey'];
      case 'PA':
        return [r, 'Pennsylvania'];
      default:
        return null;
    }
  });

  const navigate = useNavigate()

  const Item = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(1),
    textAlign: 'center',
    background: 'transparent'
  }))

  const handleSearch = () => {
    switch (information) {
      case "Unions":
        navigate('/unions', { state: locations.find(l => l[1] === location) });
        break;
      case "News":
        navigate('/home');
        break;
      case "Connections":
        navigate('/forum');
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
                  locations.map((l) => l[1])} label='Location' value={location} setValue={setLocation} />
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
