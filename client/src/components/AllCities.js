import React,{useEffect,useState} from 'react'
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Container from '@mui/material/Container';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { useNavigate } from "react-router-dom";
import './AllCities.css';
import axios from 'axios'
import Header from './Header';
const AllCities = () => {
  const [cities, setCities] = useState([])
  useEffect(() => {
    axios.get('http://localhost:8000/api/city' )
        .then(res => setCities(res.data))
        .catch(err => console.error(err));
}, []);
    const navigate = useNavigate();
  return (
    <Container minWidth="sm" maxWidth="lg" >
      <Header/>
      <h1>Palestenian Cities</h1>
    <Box sx={{  height: '100vh'}}>
      <ImageList variant="masonry" cols={3} gap={18}>
        {cities.map((item) => (
          <ImageListItem className='immmg' key={item._id} style={{transition:"1s"}}>
            <img
              src={`${item.img1}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.name}
              loading="lazy"
              onClick={()=>navigate("/Filistin/city/"+item._id)}
            />
            
            <ImageListItemBar position="bottom" title={item.name}  />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
    </Container>
  )
}

export default AllCities