import React,{useEffect,useState} from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import PropTypes from 'prop-types';
import axios from 'axios'
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { padding } from '@mui/system';
function Item(props) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        p: 1,
        m: 1,
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : 'grey.100'),
        color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800'),
        border: '1px solid',
        borderColor: (theme) =>
          theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
        borderRadius: 2,
        fontSize: '0.875rem',
        fontWeight: '700',
        boxShadow: 3,
        ...sx,
      }}
      {...other}
    />
  );
}

Item.propTypes = {
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool]),
    ),
    PropTypes.func,
    PropTypes.object,
  ]),
};



const Test = () => {

    const navigate = useNavigate();
  

  
  const [city, setCity] = useState({})
    const { id } = useParams();
    const [villages, setVillages] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8000/api/city/' +id)
            .then(res => setCity(res.data))
            .catch(err => console.error(err));
    }, [id]);
    useEffect(() => {
        axios.get('http://localhost:8000/api/village/city/' +id)
            .then(res => setVillages(res.data))
            .catch(err => console.error(err));
    }, [id]);

    return (
<React.Fragment sx={{ padding:"0 0"}}>
    <CssBaseline sx={{ padding:"0 0"}} />
    <Container minWidth="sm" maxWidth="lg" height='100vh' sx={{ padding:"0 0"}}>
        {/* City Name  */}

        <Box sx={{height:'10vh',mt:3 }}>
            <h1>{city.name}</h1>
        </Box>
        {/* description for specific city  */}
        <Box sx={{ bgcolor: 'grey', }}>
            <Box
            sx={{height: '40vh', display: 'flex', p: 1, bgcolor: '#F6FFF8'}}
        >
            
            <Item sx={{ flexGrow: 1,width:'50%' , bgcolor:" #BBD5C0" ,fontSize:"20px", padding:"20px"}}>
              <p style={{ display:'flex', flexDirection:'row'}}>Location:{city.location}</p>
              <p style={{ display:'flex', flexDirection:'row'}}>Area:{city.area}</p>
              <p><a href={city.link1}> Extra link</a></p>
              </Item>
            <img src={`${city.img1}`} style={{width:'40%',height:'100%',padding:"10px"}}/>
        </Box>
            <Box
            sx={{height: '40vh', display: 'flex', p: 1, bgcolor: '#F6FFF8', borderRadius: 1,margin:"10px" }}
        >
            <img style={{width:'60%',height:'100%',padding:"10px"}} src={`${city.img2}`}/>
            <Item sx={{width:'50%',overflow:"auto",outline:'2px solid #6B9080',bgcolor: '#F6FFF8',fontSize:"15px", padding:"20px"}}>
              <p style={{ display:'flex', flexDirection:'row'}}>{city.desc}</p>
              
              </Item>
        </Box>
                
            </Box>
        

        {/* \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ */}
        <Box
            sx={{
                height: '30vh',
                display: 'flex',
                p: 1,
                bgcolor: '#F6FFF8',
                borderRadius: 1,
                width:'100%', margin:"10px"
            }}
        >
            <Item sx={{width:'95%',overflowX: 'scroll',bgcolor: '#F6FFF8', }}>
                {/* images for villages */}
                <div style={{ display:'flex', flexDirection:'row'}}>
                {villages.map((village, index) =>
                <img src={village.img1} alt="pic" onClick={e =>navigate("/Filistin/city/" + village.city +"/village/"+ village._id)}
                style={{
                    maxWidth:"300px",
                    padding: 20,
                    borderRadius:'15px 50px',
                    height:'auto',
                }}
                /> )}

  
                    
                </div>
                {/* /////////////////////////////////////////// */}
                </Item>
            
        </Box>
        {/* ////////////////////////////////////// */}
        {/* \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ */}

        <Box
            sx={{
                height: '5vh',
                display: 'flex',
                justifyContent:"flex-end",
                bgcolor: 'background.paper',
                borderRadius: 1,
                
            }}
        >
            <Item >2</Item>
        </Box>
        {/* ////////////////////////////////////// */}
    </Container>
    </React.Fragment>
    )
}

// const city = {
//     name : 'ramallah',
//     location : 'palestine',
//     img1 : 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
//     img2 : 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
//     description : "lorlorlor lorlo  rlorlorlorlorlo rlorlo rlorlorlo rlorlorlo rlorlorlorl orlorlorlo rlorlorlorlor lorlorlo rlorlor lorlorlo rlorlorlo rlorlorlo rlorlorlo rlorlorl orlorl orlorlorlo r lorlorlorl o rlorlorlorlorlor lorlorlorlo rlorlorlo rlorlorlor lorlorlor lorlorlor lorlorlo rlorlorlor lorlorlorlo rlorlorlor lorlorlorl orlorlorlo rlorlorlorlo rlorlorlo rlorlorlo rlorlorlorl orlorlorl orlorlor lorlorlor lorlorlorl orlorlor lorlorlo rlorlorlo rlorlorlo rlorlorl orlorlorl orlorlor lorlor lorlorlor lorlorlor lorlorl or",
//     link1 : 'https://mui.com/system/shadows/',
//     area : '19868',
// }


export default Test