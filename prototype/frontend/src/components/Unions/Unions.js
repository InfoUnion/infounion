import React, { useState } from 'react'
import axios from 'axios'

import { Container, Box, Stack, } from '@mui/material'
import MultiBox from '../MultiBox/MultiBox';

import CollapsibleTable from '../CollapsibleTable/CollapsibleTable';
import UnionMap from '../UnionMap/UnionMap';

import { useLocation } from 'react-router-dom';

import convertStates from '../Regions/Regions'


import './Unions.css'

function Unions() {
  const [unions, setUnions] = React.useState([])

  const u_location = useLocation();
  const [u, setU] = React.useState(u_location.state ? [u_location.state] : null);

  console.log(u);

  const [occupation, setOccupation] = React.useState('')
  const occupations = ['Teacher', 'Lawyer', 'Engineer']

  const [location, setLocation] = React.useState((u ? u : null))
  const [locations, setLocations] = React.useState([]);

  React.useEffect(() => {
    convertStates().then(result => {
      setLocations(result);
    });

  }, [])

  console.log(locations);

  const [city, setCity] = React.useState([])
  const cities = ['Sacramento', 'Bakersfield', 'San Diego', 'San Francisco']


  const handleLocation = (value) => {
    setLocation(value);
    (setU(value))
  }

  async function fetchAll() {
    try {
      const response = await axios.get('http://localhost:4000/unions')
      return response
    } catch (error) {
      // We're not handling errors. Just logging into the console.
      console.log(error)
      return false
    }
  }


  React.useEffect(() => {
    fetchAll().then(result => {
      if (result) {
        setUnions(result.data)
      }
    })
  }, []);

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
            <MultiBox list={occupations} label='Category' value={occupation} setValue={setOccupation} />
            <MultiBox list={locations} label='State' value={location} setValue={handleLocation} />
            <MultiBox list={locations} label='City' value={city} setValue={setCity} />
          </Stack>
          <Stack
            direction='row'
            spacing={1}
          >
            <CollapsibleTable
              width='40vw'
              height={440}
              loc={(u)}
            />
            <UnionMap
              width={'40vw'}
              height={500}
              lat={39.8283}
              lng={-98.5795}
              unions={unions}
            />
          </Stack>
        </Stack>
      </Box>
    </Container>
  )
}

export default Unions
