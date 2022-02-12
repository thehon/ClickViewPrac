import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage';

import {Container, CssBaseline} from '@mui/material';
function App() {
  return (

    <div className="App">
      <CssBaseline />
      <Container>
        <HomePage />
      </Container>
    </div>
  );
}

export default App;
