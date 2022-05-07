
import  React from 'react';
import './App.css';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
function App() {
  return (
    <React.Fragment>
    <CssBaseline />
    <Container minWidth="sm" maxWidth="lg">
      <Box sx={{ bgcolor: '#c1daff', height: '100vh' ,padding:"20px" }}  >
      <h1>Filistin</h1>
      <div style={{margin:"0 auto",backgroundColor:"black"}} >
      <img alt='' src='https://pbs.twimg.com/media/FCcg1JzWYAMBkEo?format=jpg&name=large' style={{height:"auto",width:"100%",maxWidth:"600px",}} ></img>
      </div>
      </Box>
    </Container>
  </React.Fragment>
  );
}

export default App;
