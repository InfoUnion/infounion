import React, { useEffect } from 'react'
// import { useState } from 'react'
import { useLocation } from 'react-router-dom'

import { Container, Stack, Button, Typography } from '@mui/material'
// import { Box } from '@mui/system'
// import { TextField } from '@mui/material'
import Comments from './Comments'

function Union () {
  const location = useLocation()
  const { u } = location.state
  console.log(u)

  useEffect(() => { console.log(u) }, [u])

  return (
    <Container maxWidth='xl'>
      <Stack spacing={2}>
        <Stack direction='row' spacing={2} paddingTop={2}>
          <Typography
            variant='h4'
            fontWeight='bold'
          >
            {u.row.name ? u.row.name : 'Name Unavailable'}
          </Typography>
          <Button
            href={u.row.website ? u.row.website[0] : ''}
            target='_blank'
            rel='noreferrer'
          >
            <Typography
              fontWeight='bold'
            >
              Visit
            </Typography>
          </Button>
        </Stack>
        <Typography>
          Telephone: {u.row.phone ? u.row.phone : 'Unavailable'}
        </Typography>
        <Typography>
          Address:  {u.row.street ? u.row.street + ' ' + u.row.city + ', ' + u.row.state + ' ' + u.row.postal : 'Unavailable'}
        </Typography>
        <Typography>
          Founded in: {u.row.founded ? u.row.founded : 'Unavailable'}
        </Typography>
        <Typography>
          Number of Employees: {u.row.numEmp ? u.row.numEmp : 'Unavailable'}
        </Typography>
        <Typography>
          Description: {u.row.description ? u.row.description : 'Unavailable'}
        </Typography>
        <Typography
          variant='h4'
          fontWeight='bold'
        >
          Comments
        </Typography>
        <Comments
          commentsUrl='http://localhost:3004/comments'
          currentUserId='1'
        />
      </Stack>
    </Container>

  )
}

export default Union
