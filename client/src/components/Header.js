import React,{useEffect,useState} from 'react'
import {  Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { width } from '@mui/system';
const Header = () => {
    const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
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
  return (
    <div>
        <div style={{display:"flex", alignItems:"center", justifyContent:"space-between",backgroundColor:"#E6F3EB", width:"105%", position:"relative", right:"30px",padding:"10px"}}>
            <div>
            <h1 onClick={e=> navigate("/Filistin")} style={{marginLeft:"20px", borderBottom:"2px solid #3e584c"}}>Filistin</h1>
            <p style={{fontSize:"17px",marginLeft:"30px",fontFamily:"fantasy",color:"#3e584c"}}>{date}</p>
            </div>
            {loggedUser?
            <div>
            <Button style={{backgroundColor:"#6B9080",borderColor:"#6B9080", height:"45px", padding:"8px",fontSize:"20px",marginRight:"8px"}} size="sm "  onClick={logOut}>
            Logout
            </Button>
            <Button style={{backgroundColor:"#6B9080",borderColor:"#6B9080", height:"45px", padding:"8px",fontSize:"20px",marginRight:"8px"}} size="sm "  onClick={e=>navigate("/Filistin/city/create")}>
            Create City
            </Button>
            <Button style={{backgroundColor:"#6B9080",borderColor:"#6B9080", height:"45px", padding:"8px",fontSize:"20px",marginRight:"8px"}} size="sm "  onClick={e=>navigate("/Filistin/city/create")}>
            Create Village
            </Button>
            </div>
            
            
        :<p></p>}
        </div>
    </div>
  )
}

export default Header