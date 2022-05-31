import React from 'react'

import { Container, Box, Stack } from '@mui/material'

import CollapsibleTable from './CollapsibleTable'

import './Unions.css'

function Unions () {
  return (
    <Container maxWidth='xl'>
      <Box
        display='flex'
        justifyContent='center'
        alignItems='center'
      >
        <Stack>
          <div className='wrapper'>
            <h1>Unions</h1>
          </div>
          <CollapsibleTable />
        </Stack>
      </Box>
    </Container>
  )
}

export default Unions
