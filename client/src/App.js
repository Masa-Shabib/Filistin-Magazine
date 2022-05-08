
import  React from 'react';
import './App.css';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import AllCities from './components/AllCities';
import Cover from './components/Cover';
function App() {
  return (
    <React.Fragment>
    <CssBaseline />
    <Container minWidth="sm" maxWidth="lg">
      <Box sx={{ bgcolor: '#c1daff', height: '100vh' ,padding:"20px" ,overflowY: 'auto'}}  >
      
      <BrowserRouter>
    <div className="App">
    <Routes>
      <Route exact path="/Filistin/cities" element={ <AllCities />} />
      <Route exact path="/Filistin" element={ <Cover />} />
      </Routes>
    </div>
  </BrowserRouter>
      </Box>
    </Container>
  </React.Fragment>
  );
}

export default App;
