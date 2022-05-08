
import  React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  // useNavigate
} from "react-router-dom";
import './App.css';
import CssBaseline from '@mui/material/CssBaseline';
import Signin from './components/Signin';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Navigate to="/register"></Navigate>}/>
          <Route  path="/register" exact element={<Signin />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
