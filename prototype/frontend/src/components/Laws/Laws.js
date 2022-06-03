import React from 'react'

import { Container, Card, CardContent, Accordion, AccordionSummary, AccordionDetails, Typography, Divider, } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import convertStates from '../Regions/Regions'
import info from './info'


function Laws() {
  const [locations, setLocations] = React.useState([]);

  React.useEffect(() => {
    convertStates().then(result => {
      setLocations(result);
    });

  }, [])

  return (
    <Container maxWidth='xl'>
      {info.map((f) => {
        return (
          <Accordion>
            <AccordionSummary>
              <Typography
                sx={{ fontWeight: 'bold' }}
                variant="h5">
                {f.name.toUpperCase()}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                {f.cond}
              </Typography>
              <Typography
                sx={{ fontWeight: 'bold' }}>
                {f.basic}
              </Typography>
              <Typography>
                {f.premium}
              </Typography>
              <Divider />
              <Typography>
                {f.cond_two}
              </Typography>
              <Typography
                sx={{ fontWeight: 'bold' }}>
                {f.basic_two}
              </Typography>
              <Typography>
                {f.premium_two}
              </Typography>
              <Typography>
                {f.body}
              </Typography>
              <Divider />
              <Typography
                sx={{ fontWeight: 'bold' }}>
                {f.empl}
              </Typography>
            </AccordionDetails>
          </Accordion>
        )
      })}

    </Container >


  )
}

export default Laws
