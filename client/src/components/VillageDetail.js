import React,{useEffect,useState} from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import PropTypes from 'prop-types';
import axios from 'axios'
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
// import './style.css';
import {  Button } from "react-bootstrap";
import Header from './Header';
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



const VillageDetail = () => {

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
  

  
  const [village, setVillage] = useState({})
    const { cid ,vid } = useParams();

    useEffect(() => {
        axios.get('http://localhost:8000/api/village/' +vid)
            .then(res => setVillage(res.data))
            .catch(err => console.error(err));
    }, [vid]);
    // useEffect(() => {
    //     axios.get('http://localhost:8000/api/village/city/' +id)
    //         .then(res => setVillages(res.data))
    //         .catch(err => console.error(err));
    // }, [id]);

    return (
<React.Fragment sx={{ padding:"0 0"}}>
    <CssBaseline sx={{ padding:"0 0"}} />
    <Container minWidth="sm" maxWidth="lg" height='100vh' sx={{ padding:"0 0"}}>
        {/* City Name  */}
        <Header/>
        <Box sx={{height:'10vh',mt:3, display: 'flex' ,justifyContent:"space-between",alignItems:"center" }}>
            <h1>{village.name}</h1>
            <div>
            <Button style={{backgroundColor:"#6B9080",borderColor:"#6B9080", height:"40px", padding:"5px",width:"70px",fontSize:"20px"}} size="sm "  onClick={e=>navigate("/Filistin/city/"+village.city)}>
            Back
                      </Button>
            {loggedUser?
            <Button style={{backgroundColor:"#6B9080",borderColor:"#6B9080", height:"40px", padding:"5px",width:"70px",fontSize:"20px",marginLeft:"10px"}} size="sm "  onClick={e=>navigate("/Filistin/village/"+village._id+"/edit")}>
            Edit
                      </Button>
        :<p></p>}
            </div>
        </Box>
        {/* description for specific city  */}
        <Box sx={{ bgcolor: 'grey', }}>
            <Box
            sx={{height: '40vh', display: 'flex', p: 1, bgcolor: '#F6FFF8'}}
        >
             <img className='immmage' src={`${village.img1}`} style={{width:'65%',height:'100%',padding:"10px", borderRadius:'20px ',}}/>
            <Item sx={{ flexGrow: 1,outline:'2px solid #6B9080',width:'30%' ,fontSize:"20px", padding:"20px",bgcolor: '#F6FFF8'}}>
              <p style={{ display:'flex', flexDirection:'row'}}>Location:{village.location}</p>
              <p style={{ display:'flex', flexDirection:'row'}}>Population:{village.area}</p>
              <p><a href={village.link1}> Extra link</a></p>
              </Item>
           
        </Box>
            <Box
            sx={{height: '40vh', display: 'flex', p: 1, bgcolor: '#F6FFF8', borderRadius: 1,margin:"10px" }}
        >
            
            <Item sx={{width:'50%',overflow:"auto",outline:'2px solid #6B9080',bgcolor: '#F6FFF8',fontSize:"15px", padding:"20px"}}>
              <p style={{ display:'flex', flexDirection:'row'}}>{village.desc}</p>
              </Item>
              <img className='immmage' style={{width:'50%',height:'100%',padding:"10px", borderRadius:'20px ',}} src={`${village.img2}`}/>
        </Box>
                
            </Box>
        

        {/* \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ */}

        {/* ////////////////////////////////////// */}
        {/* \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ */}

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


export default VillageDetail