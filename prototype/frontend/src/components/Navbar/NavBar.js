import React from 'react'
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem
} from '@mui/material'

import PriorityHighIcon from '@mui/icons-material/PriorityHigh'
import MenuIcon from '@mui/icons-material/Menu'
import { useAuth0 } from '@auth0/auth0-react'
import LogoutButton from '../Account/LogoutButton'

const pages = ['Home', 'Unions', 'Compare', 'Forum', 'About']
// const settings = ['Profile', 'Account', 'Settings', 'Login'];

const NavBar = () => {
  const { logout, isAuthenticated } = useAuth0()

  const [anchorElNav, setAnchorElNav] = React.useState(null)
  // const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  }

  // const handleOpenUserMenu = (event) => {
  //   setAnchorElUser(event.currentTarget);
  // };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  // const handleCloseUserMenu = () => {
  //   setAnchorElUser(null);
  // };

  return (
    <AppBar elevation={0} position='static' color='primary'>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <PriorityHighIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant='h6'
            noWrap
            component='a'
            href='/splash'
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'inherit',
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none'
            }}
          >
            INFOUNION
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size='large'
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleOpenNavMenu}
              color='inherit'
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id='menu-appbar'
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left'
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left'
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' }
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Button
                    key={page}
                    onClick={handleCloseNavMenu}
                    href={`/${page.toLowerCase()}`}
                  >
                    <Typography textAlign='center' fontWeight='bold'>
                      {page}
                    </Typography>
                  </Button>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <PriorityHighIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant='h5'
            noWrap
            href='/splash'
            component='a'
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'inherit',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none'
            }}
          >
            INFOUNION
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                href={`/${page.toLowerCase()}`}
                sx={{ my: 2, color: 'white', display: 'block', fontWeight: 'bold' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          {/* <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Avatar Picture" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center" fontWeight='bold' >{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box> */}

          <LogoutButton />
          {window.location.pathname !== '/account' && (
            <Button
              color='inherit'
              sx={{ fontWeight: 'bold' }}
              href='/account'
            >
              Account
            </Button>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default NavBar
