import React from 'react'

import { Container, Box, Typography, Stack, Card } from '@mui/material'
import LoginButton from './LoginButton'
import LogoutButton from './LogoutButton'
import { useAuth0 } from '@auth0/auth0-react'
import Profile from '../Profile/Profile'

function Account () {
  const { user, isAuthenticated } = useAuth0()
  console.log(user)

  return (
    <>
      {!isAuthenticated && (
        <Container maxWidth='xl'>
          <Box
            display='flex'
            justifyContent='center'
            alignItems='center'
            height='75vh'
          >
            <Card sx={{
              width: 300,
              height: 300,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
            >
              <Stack>
                <div className='wrapper'>
                  <h1>Account</h1>
                </div>
                <LoginButton />
              </Stack>
            </Card>
          </Box>
        </Container>
      )}
      <Profile />
    </>
  )
}

export default Account
