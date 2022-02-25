import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Home from './pages/Home';

const theme = {
  mainColors: {
    darkpurple: '#77499d',
    midpurple: '#9966cc',
    lightpurple: '#bd9deb',
    light: '#e5e3e6',
    grey: '#757575',
    dark: '#1d1e18',
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
