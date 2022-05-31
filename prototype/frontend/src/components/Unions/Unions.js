import React from 'react'

import { Container, Box, Stack, } from '@mui/material'
import ComboBox from '../Splash/ComboBox'

import CollapsibleTable from './CollapsibleTable';
import { useLocation } from 'react-router-dom';

import './Unions.css'

function Unions() {
  const u_location = useLocation();
  const u_state = u_location.state;

  const [occupation, setOccupation] = React.useState('')
  const occupations = ['Teacher', 'Lawyer', 'Engineer']

  const [location, setLocation] = React.useState('')
  const locations = ['California', 'New York', 'Texas']

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
            <ComboBox list={locations} label='Location' value={location} setValue={setLocation} />
          </Stack>
          <CollapsibleTable loc={u_state} />
        </Stack>
      </Box>
    </Container>
  )
}

export default Unions
