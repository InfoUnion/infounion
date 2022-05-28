import React from 'react';
import { Button, } from '@mui/material';

import { useAuth0 } from '@auth0/auth0-react';

// https://postimg.cc/7Cfd0xBP/bc85ab19

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    !isAuthenticated && (
      <Button color="inherit" sx={{ fontWeight: 'bold' }} onClick={() => loginWithRedirect()}
      >
        Log In
      </Button>

    )
  )
}

export default LoginButton