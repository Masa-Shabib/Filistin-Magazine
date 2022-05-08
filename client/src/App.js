
import  React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import AllCities from './components/AllCities';
import Cover from './components/Cover';
import Signin from './components/Signin';
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
      <Route path="/" element={<Navigate to="/register"></Navigate>}/>
      <Route  path="/register" exact element={<Signin />}/>
      </Routes>
    </div>
  </BrowserRouter>
      </Box>
    </Container>
  </React.Fragment>
  );
}

export default App;
