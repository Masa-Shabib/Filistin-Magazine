
import  React ,{useState}from 'react';
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
import FormCities from './components/FormCities';
import FormVillages from './components/FormVillages';
import City from './components/City';
import FormTest from './components/FormTest';
import UpdateCities from './components/UpdateCities';
import UpdateVillages from './components/UpdateVillages';
import Main from './views/Main';
import './App.css';
function App() {

  return (
    <React.Fragment>
    <CssBaseline />
    <Container minWidth="sm" maxWidth="lg" > 
      <Box sx={{bgcolor:"#F6FFF8", height: '100vh'  ,overflowY: 'auto',outline:'2px solid #6B9080',margin:"10px" }}  >
      
      <BrowserRouter>
    <div className="App">
    <Routes>
      <Route exact path="/Filistin/cities" element={ <AllCities />}  />
      <Route exact path="/Filistin" element={ <Cover  />} />
      <Route path="/" element={<Navigate to="/Filistin"></Navigate>}/>
      <Route  path="/Filistin/register" exact element={<Signin />}/>
      <Route  path="/Filistin/city/:id" exact element={<City />}/>
      <Route  path="/Filistin/test" exact element={<FormTest  />}/>
      <Route  path="/Filistin/city/create" exact element={<FormCities />}/>
      <Route  path="/Filistin/village/create" exact element={<FormVillages />}/>
      <Route path="/Filistin/city/:id/edit" element={<UpdateCities/>}/>
      <Route path="/Filistin/village/:id/edit" element={<UpdateVillages/>}/>
      <Route path="/test" element={<Main/>}/>
    </Routes>
    </div>
  </BrowserRouter>
      </Box>
    </Container>
  </React.Fragment>
  );
}

export default App;
