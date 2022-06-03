import React from 'react'
import { useLocation } from 'react-router-dom';
import convertStates from '../Regions/Regions'

import axios from 'axios'

import {
  Box,
  Collapse,
  IconButton,
  TableCell,
  TableRow,
  Typography,
  Container,
  Stack,
  Grid,
  Card
} from '@mui/material'
import MultiBox from '../MultiBox/MultiBox';
import { Link } from 'react-router-dom';
//import unions from '../assets/data/unions.jsx';


function Compare() {

  const [unions, setUnions] = React.useState([]);
  const [u, setU] = React.useState();

  const u_location = useLocation();
  const [u_loc, setULoc] = React.useState(u_location.state ? [u_location.state] : null);
  console.log(u_loc)

  const [locations, setLocations] = React.useState([]);

  const handleUnionSelect = (value) => {
    setU(value)
  }

  const handleLocation = (value) => {
    setULoc(value);
  }

  React.useEffect(() => {
    fetchAll().then(result => {
      if (result) {
        setUnions(result.data)
      }
    })
  }, []);

  React.useEffect(() => {
    convertStates().then(result => {
      setLocations(result);
    });

  }, [])

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

  const temp = unions.map((union) => (
    (u_loc && u_loc.length !== 0 ? (u_loc.some((l) => l.abbr === union.address.addressRegion)) : true) && 
    union));

  const filteredUnions = temp.filter((check) => (check));

  //console.log(filteredUnions)

  return (
    <Container maxWidth='xl' >
      <div className='wrapper'>
        <h1>Compare</h1>
        <h4>Select up to three unions to compare side-by-side</h4>
      </div>


      <Stack
        direction='row'
        spacing={1}
        sx={{ margin: 1 }}
      >
        <Stack direction="column" spacing={2}>
          <MultiBox
            list={locations}
            label='Select State'
            defaultValue={u_loc ? u_loc : []}
            setValue={handleLocation} />
          <MultiBox
            list={u ? u.length < 3 ? filteredUnions : [] : filteredUnions}
            label='Select Union'
            value={''}
            setValue={handleUnionSelect} />
        </Stack>
        {u ? u.map((uni) => {
          const row = uni
          return (
            <Card sx={{ height: 500, width: 325 }} elevation={4}>
              <Grid container height={150} width={325} paddingTop={1} borderBottom={1} alignContent="center" textAlign="center">
                <Typography variant='h6' gutterBottom component='div' fontWeight={"bold"}>
                  <Link to={`${uni.name}`} state={{ u: { row } }}>{uni.name}</Link>
                </Typography>
              </Grid>
              <Grid container paddingLeft={2} paddingRight={1} paddingTop={1}>
                <Typography>
                  <b>Telephone:</b> {uni.phone ? uni.phone : 'Unavailable'}
                </Typography>
                <Typography>
                  <b>Address: </b>
                  {uni.address.streetAddress ? uni.address.streetAddress
                    + ' ' + uni.address.addressLocality + ', ' + uni.address.addressRegion + ' ' + uni.address.postalCode : 'Unavailable'}
                </Typography>
                <Typography>
                  <b>Founded in:</b> {uni.founded ? uni.founded : 'Unavailable'}
                </Typography>
                <Typography>
                  <b>Number of Employees:</b> {uni.numEmp ? uni.numEmp : 'Unavailable'}
                </Typography>
                <Typography>
                  <b>Description:</b> {uni.description ? uni.description : 'Unavailable'}
                </Typography>
              </Grid>
            </Card>

          )
        }
        ) : null}
      </Stack>
    </Container>
  )
}

export default Compare
