import React from 'react'

import { Container, Box, Stack, } from '@mui/material'
import ComboBox from '../ComboBox/ComboBox'
import MultiBox from '../MultiBox/MultiBox';

import CollapsibleTable from '../CollapsibleTable/CollapsibleTable';
import { useLocation } from 'react-router-dom';

import Regions from '../Regions/Regions'


import './Unions.css'

function Unions() {
  const u_location = useLocation();
  const [u, setU] = React.useState(u_location.state ? [u_location.state] : null);

  console.log(u);

  const [occupation, setOccupation] = React.useState('')
  const occupations = ['Teacher', 'Lawyer', 'Engineer']

  const [location, setLocation] = React.useState((u ? u : []))
  const locations = Regions();
  
  console.log(location);

  const [city, setCity] = React.useState([])
  const cities = Regions();


  const handleLocation = (value) => {
    setLocation(value);
    setU(value);
  }

  return (
    <Container maxWidth='xl'>
      <Box
        display='flex'
        justifyContent='center'
        alignItems='center'
      >
        <Stack
          spacing={1}
        >
          <div className='wrapper'>
            <h1>Unions</h1>
          </div>
          <Stack
            direction='row'
            spacing={1}
          >
            <ComboBox list={occupations} label='Occupation' value={occupation} setValue={setOccupation} />
            <MultiBox list={locations} label='State' value={location} setValue={handleLocation} />
            <MultiBox list={locations} label='City' value={city} setValue={setCity} />
          </Stack>
          <CollapsibleTable loc={u} />
        </Stack>
      </Box>
    </Container>
  )
}

export default Unions
