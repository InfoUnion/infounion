import React from 'react';

import { Container, } from '@mui/material';
import { NewsContextProvider } from './NewsContext'
import News from "./News";

import './Home.css';


function Home() {
  return (
    <Container maxWidth="xl">
      <div className="wrapper">
        <h1>Home</h1>
      </div>
      <NewsContextProvider>
        <News />
      </NewsContextProvider>
    </Container>
  );
}

export default Home;