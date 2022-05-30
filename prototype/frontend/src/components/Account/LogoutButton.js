import React from 'react'
import { Button } from '@mui/material'

import { useAuth0 } from '@auth0/auth0-react'

const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0()

  return (
    isAuthenticated && (
      <Button
        color='inherit' sx={{ fontWeight: 'bold' }} onClick={() => logout()}
      >
        Log Out
      </Button>
    )
  )
}

export default LogoutButton
