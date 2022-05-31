import React from 'react';

import { Container, Box, Stack, } from '@mui/material';

import CollapsibleTable from './CollapsibleTable';
import { useLocation } from 'react-router-dom';

import './Unions.css';

function Unions() {
  const location = useLocation();
  const u_state = location.state;
  return (
    <Container maxWidth="xl">
      <Box
        display='flex'
        justifyContent='center'
        alignItems='center'
      >
        <Stack>
          <div className="wrapper">
            <h1>Unions</h1>
          </div>
          <CollapsibleTable loc = {u_state}/>
        </Stack>
      </Box>
    </Container>
  );
}

export default Unions;