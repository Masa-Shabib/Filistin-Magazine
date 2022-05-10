import React,{useEffect,useState} from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import PropTypes from 'prop-types';
import axios from 'axios'
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import './style.css';
import {  Button } from "react-bootstrap";
import Header from './Header';
import Main from '../views/Main';
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
    const [loggedUser, setLoggedUser]= useState(null)
    useEffect(()=>{
        axios.get('http://localhost:8000/api/loggedUser', {withCredentials:true})
        .then(res=>{console.log(res)
          setLoggedUser(res.data.user)
        })
        .catch(err=>console.log(err))
      },[])
      const logOut=()=>{
        axios.get('http://localhost:8000/api/logout', {withCredentials:true})
        .then(res=>{console.log(res)
            navigate("/Filistin")
        })
        .catch(err=>console.log(err))
      }
  

  
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
        <Header/>
        <Box sx={{height:'10vh',mt:3, display: 'flex' ,justifyContent:"space-between",alignItems:"center"}}>
            <h1>{city.name}</h1>
            {loggedUser?
            <Button style={{backgroundColor:"#6B9080",borderColor:"#6B9080", height:"40px", padding:"5px",width:"70px",fontSize:"20px"}} size="sm "  onClick={e=>navigate("/Filistin/city/"+city._id+"/edit")}>
            Edit
                      </Button>
        
        :<p></p>}
        </Box>
        {/* description for specific city  */}
        <Box sx={{ bgcolor: 'grey', }}>
            <Box
            sx={{height: '40vh', display: 'flex', p: 1, bgcolor: '#F6FFF8'}}
        >
            <img className='immmage' src={`${city.img1}`} style={{width:'65%',height:'100%',padding:"10px", borderRadius:'20px ',}}/>
            <Item sx={{width:'32%',overflow:"auto",outline:'2px solid #6B9080',bgcolor: '#F6FFF8',fontSize:"18px", padding:"20px"}}>
              <p style={{ display:'flex', flexDirection:'row'}}>Location: {city.location}</p>
              <p style={{ display:'flex', flexDirection:'row'}}>Area: {city.area}</p>
              <p>Extra link: <a href={city.link1}> More About {city.name}</a></p>
              <p>Villages: {villages.map((village, index) =>
              <span>{village.name} , </span>)}</p>
              
              </Item>
            
        </Box>
            <Box
            sx={{height: '40vh', display: 'flex', p: 1, bgcolor: '#F6FFF8', borderRadius: 1,margin:"10px" }}
        >
           
            <Item sx={{width:'50%',overflow:"auto",outline:'2px solid #6B9080',bgcolor: '#F6FFF8',fontSize:"15px", padding:"20px"}}>
              <p style={{ display:'flex', flexDirection:'row', fontSize:"20px"}}>Description</p>
              <p style={{ display:'flex', flexDirection:'row'}}>{city.desc}</p>
              </Item>
              <img className='immmage' style={{width:'50%',height:'100%',padding:"10px", borderRadius:'20px ',}} src={`${city.img2}`}/>
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
          <Item sx={{width:'40%',overflowX: 'scroll',bgcolor: '#F6FFF8',padding:"10px" }}>
                  <Main/>
                  </Item>
            <Item sx={{width:'80%',overflowX: 'scroll',bgcolor: '#F6FFF8', }}>
                {/* images for villages */}
                <div style={{ display:'flex', flexDirection:'row'}}>
                {villages.map((village, index) =>
                <div className='content'>
                  
                <img className='immmage' src={village.img1} alt="pic" onClick={e =>navigate("/Filistin/city/" + village.city +"/village/"+ village._id)}
                style={{
                    maxWidth:"250px",
                    padding: 10,
                    borderRadius:'40px ',
                    height:'100%',
                }}
                /> 
                <div className='overlay1' > 
                <div style={{
                  position:"relative",
                  bottom:"50px",
                    textAlign:"center",
                    color:"white"
                }} >
                  <p style={{
                
                    textAlign:"center",
                    
                }}>{village.name}</p>
                  </div>
                  </div>
                  </div> )}

  
                    
                </div>

                </Item>
                
            
        </Box>


        <Box
            sx={{
              padding:"5px",
                display: 'flex',
                justifyContent:"flex-end",
                bgcolor: 'background.paper',
                borderRadius: 1,
                
            }}
        >
          <Button style={{backgroundColor:"#6B9080",borderColor:"#6B9080"}} size="sm "  onClick={e=>navigate("/Filistin/cities")}>
          All Cities
                    </Button>
            
        </Box>

    </Container>
    </React.Fragment>
    )
}




export default Test