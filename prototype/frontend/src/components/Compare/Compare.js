import React from 'react'

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
  Grid
} from '@mui/material'
import MultiBox from '../MultiBox/MultiBox';
import { Link } from 'react-router-dom';
//import unions from '../assets/data/unions.jsx';


function Compare() {

  const [unions, setUnions] = React.useState([]);
  const [u, setU] = React.useState();

  const handleUnionSelect = (value) => {
    setU(value)
  }

  //console.log(u);

  const row = unions.map((union) => (
    createData(
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

  function createData(name, street, city, state, postal, numEmp, founded, website, phone, description, comments) {
    return { name, street, city, state, postal, numEmp, founded, website, phone, description, comments }
  }

  React.useEffect(() => {
    fetchAll().then(result => {
      if (result) {
        setUnions(result.data)
      }
    })
  }, []);

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
        <MultiBox
          list={u ? u.length < 3 ? unions : [] : unions}
          label='Select Union'
          value={''}
          setValue={handleUnionSelect} />
        {u ? u.map((uni) => {
          const row = uni
          return (
            <Box sx={{ height: 500, width: 325, border: 1, }}>
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
            </Box>

          )
        }
        ) : null}
      </Stack>
    </Container>
  )
}

export default Compare
