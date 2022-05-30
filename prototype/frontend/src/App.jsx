import React from 'react';
import reducers from 'reducers';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from "redux-thunk";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CssBaseline, createTheme, Box } from '@mui/material';
import { ThemeProvider } from '@emotion/react';

import './App.css';

import NavBar from './components/Navbar/NavBar';

import Splash from './components/Splash/Splash';
import Home from './components/Home/Home';
import Compare from './components/Compare/Compare';
import Forum from './components/Forum/Forum';
import About from './components/About/About';
import Login from './components/Login/Login';
import Unions from './components/Unions/Unions';
import Union from './components/Union/Union';

import Footer from './components/Footer/Footer';

// import { Container } from '@mui/system';

// Broken

const persistedState = {};


const store = createStore(
    reducers,
    persistedState,
    applyMiddleware(reduxThunk))




function App() {

  const theme = createTheme({
    // palette: {
    //   primary: {
    //     light: '#4f5b62',
    //     main: '#263238',
    //     dark: '#000a12',
    //     contrastText: '#fff',
    //   },
    //   secondary: {
    //     light: '#ffffff',
    //     main: '#fffbf0',
    //     dark: '#ccc8bd',
    //     contrastText: '#000',
    //   },
    // },
  });

  return (
      //
        <React.Fragment>
          <Provider store={store} className="app">
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box
              className='page-wrapper'
              display='flex'
              flexDirection='column'
              minHeight='100vh'
            >
              <NavBar />
              <Box
                className='main-wrapper'
                flexGrow={1}
              >
                <BrowserRouter>
                  <Routes>
                    <Route path='/splash' element={<Splash />} />
                    <Route path='/home' element={<Home />} />
                    <Route path='/compare' element={<Compare />} />
                    <Route path='/forum' element={<Forum />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/login' element={<Login />} />
                    <Route path="/unions/:id" element={<Union />} />
                    <Route path='/unions' element={<Unions />} />
                  </Routes>
                </BrowserRouter>
              </Box>
              <Footer />
            </Box>
          </ThemeProvider>
          </Provider>
        </React.Fragment>

  );
}

export default App;