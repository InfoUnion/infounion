import React from 'react'

import { Container, Card, CardHeader, Avatar, CardContent, CardActions, Typography } from '@mui/material'

import { useAuth0 } from '@auth0/auth0-react'
import LogoutButton from '../LogoutButton/LogoutButton'

function Profile() {
  const { user, isAuthenticated } = useAuth0()

  return (
    isAuthenticated && (
      <Container maxWidth='xl'>
        <div className='wrapper'>
          <h1>Profile</h1>
        </div>
        <Card>
          <CardHeader
            avatar={
              <Avatar alt={user.name} src={user.picture} />
            }
            title={user.name}
          />
          <CardContent>
            <Typography>
              Name:&nbsp;{user.name}
              <br />
              Email:&nbsp;{user.email}
            </Typography>
          </CardContent>
          <CardActions>
            <LogoutButton />
          </CardActions>
        </Card>
        <br />
        <Typography
          variant='h5'
          fontWeight='bold'
        >
          Saved Unions
        </Typography>
      </Container>
    )
  )
}

export default Profile
