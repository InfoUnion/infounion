import React from 'react'

import { Container, Box, Stack, } from '@mui/material'
import ComboBox from '../Splash/ComboBox'

import CollapsibleTable from './CollapsibleTable';
import { useLocation } from 'react-router-dom';

import Regions from '../Splash/Regions'


import './Unions.css'

function Unions() {
  const u_location = useLocation();
  const [u, setU] = React.useState(u_location.state);

  console.log(u);

  const [occupation, setOccupation] = React.useState('')
  const occupations = ['Teacher', 'Lawyer', 'Engineer']

  const [location, setLocation] = React.useState((u ? u : ""))
  const locations = Regions();

  const handleLocation = (value) => {
    setLocation(value);
    setU(locations.filter((l) => l[1] === value)[0]);
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
            <ComboBox list={
              locations.map((l) => l[1])} label='Location' value={location} setValue={handleLocation} />
          </Stack>
          <CollapsibleTable loc={u} />
        </Stack>
      </Box>
    </Container>
  )
}

export default Unions
