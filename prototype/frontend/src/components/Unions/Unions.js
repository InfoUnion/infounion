import React, { useState } from 'react'
import axios from 'axios'

import { Container, Box, Stack, } from '@mui/material'
import MultiBox from '../MultiBox/MultiBox';

import CollapsibleTable from '../CollapsibleTable/CollapsibleTable';
import UnionMap from '../UnionMap/UnionMap';

import { useLocation } from 'react-router-dom';

import convertStates from '../Regions/Regions'
import getCities from '../Regions/Cities'



import './Unions.css'

function Unions() {
  const [unions, setUnions] = React.useState([])

  const u_location = useLocation();
  const [u, setU] = React.useState(u_location.state ? [u_location.state] : null);

  //console.log(unions);

  const [occupation, setOccupation] = React.useState('')
  const occupations = 
  [{name: 'Musician'}, 
  {name: 'Construction Worker'}, 
  {name: 'Engineer'}, 
  {name: 'Educator'}, 
  {name: 'Healthcare Worker'},
  {name: 'Plumber'},
  {name: 'Service Worker'}]

  const [location, setLocation] = React.useState((u ? u : null))
  const [locations, setLocations] = React.useState([]);

  React.useEffect(() => {
    convertStates().then(result => {
      setLocations(result);
    });

  }, [])
  

  console.log(locations);


  const [city, setCity] = React.useState([])
  const [cities, setCities] = React.useState([]);

  React.useEffect(() => {
    getCities().then(result => {

      setCities(result);
    });

  }, [])


  const handleLocation = (value) => {
    setLocation(value);
    setU(value)
  }

  const handleOccupation = (value) => {
    setOccupation(value);
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

 
  function createData(name, street, city, state, postal, numEmp, founded, website, phone, description, comments) {
    return { name, street, city, state, postal, numEmp, founded, website, phone, description, comments }
  }

  const rows = unions.map((union) => (
    (u && u.length !== 0 ? (u.some((l) => l.abbr === union.address.addressRegion)) : true) && createData(
      union.name,
      union.address.streetAddress,
      union.address.addressLocality,
      union.address.addressRegion,
      union.address.postalCode,
      union.numberOfEmployees,
      union.foundingDate,
      union.sameAs,
      union.telephone,
      union.description,
      [])
  ));

  const rowsF = rows.filter(row => (row));

  const temp = unions.map((union) => ((u && u.length !== 0 ? (u.some((l) => l.abbr === union.address.addressRegion)) : true)) && union.latitude && union.longitude && union);
  const unionsF = temp.filter(union => (union));
  // console.log(unionsF)
  
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
            <MultiBox defaultValue ={u?[{name: "Educator"}]:[]} list={occupations} label='Category' value={occupation} setValue={handleOccupation} />
            <MultiBox defaultValue ={u? u : []} list={locations} label='State' value={location} setValue={handleLocation} />
            <MultiBox list={cities} label='City' value={city} setValue={setCity} />
          </Stack>
          <Stack
            direction='row'
            spacing={1}
          >
            <CollapsibleTable
              width='40vw'
              height={440}
              rows={rowsF}
            />
            <UnionMap
              width={'40vw'}
              height={500}
              unions={unionsF}
            />
          </Stack>
        </Stack>
      </Box>
    </Container>
  )
}

export default Unions
