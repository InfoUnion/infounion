import React from 'react'
import axios from 'axios'

import { Container, Box, Stack, Card } from '@mui/material'
//import { Stack } from '@mui/material'
import LoginButton from '../LoginButton/LoginButton'
//import LogoutButton from './LogoutButton'
import { useAuth0 } from '@auth0/auth0-react'
import Profile from '../Profile/Profile'

function Account() {
  const { user, isAuthenticated } = useAuth0()
  const { copy, setCopy } = React.useState()
  //console.log(user)

  function createData(sub) {
    return { sub }
  }



  async function getUser(sub) {
    try {
      const response = await axios.get(`http://localhost:4000/users?sub=${sub}`)
      return response
    } catch (error) {
      // We're not handling errors. Just logging into the console.
      console.log(error)
      return false
    }
  }

  async function postUser(user) {
    try {
      const response = await axios.post('http://localhost:4000/users', user)
      return response
    } catch (error) {
      // We're not handling errors. Just logging into the console.
      console.log(error)
      return false
    }
  }

  if (isAuthenticated) {
    console.log(isAuthenticated)
    console.log(user)
    getUser(user.sub).then(result => {
      console.log(result)
      if (result.data <= 0) {
        console.log(user)
        postUser(user);
      }
    })
  }

  // console.log(user);

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
