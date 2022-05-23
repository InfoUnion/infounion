import React from 'react'
import { Container, Box, Stack, Button, Typography, TextField, Card, CardMedia, CardContent, CardActions, } from '@mui/material';

import loginImg from "./login.svg"

export class Login1 extends React.Component {

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <Card sx={{ width: 300, }}>
          <CardMedia
            component="img"
            image={loginImg}
          />
          <CardContent
            height='200'
          >
            <Box
              display='flex'
              justifyContent='center'
              alignItems='center'
            >
              <Stack
                direction='column'
                spacing={1}
              >
                <TextField label='Username' size='small' />
                <TextField label='Password' size='small' type='password' />
              </Stack>
            </Box>
          </CardContent>
          <CardActions
            height="25"
          >
            <Button>Login</Button>
          </CardActions>

        </Card>
      </div>
    )
  }

}