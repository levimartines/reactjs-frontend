import React from 'react';
import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Forbidden } from './pages/Forbidden/Forbidden';
import { Dashboard } from './pages/Dashboard/Dashboard';
import { Preferences } from './pages/Preferences/Preferences';
import Login from './pages/Login/Login';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline/>
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/forbidden" element={<Forbidden/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/preferences" element={<Preferences/>}/>
            <Route path="*" element={<Navigate to="/dashboard"/>}/>
          </Routes>
        </BrowserRouter>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
