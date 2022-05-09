import React,{useEffect,useState} from 'react'
import axios from 'axios'
import { useNavigate} from 'react-router-dom';

const FormTest = (props) => {
    const [loggedUser, setLoggedUser]= useState(null)
    const navigate = useNavigate();
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
        {loggedUser?<div> <p>hi {loggedUser.firstName}</p>
        <button onClick={logOut}>Log Out</button>
        </div>:<p>Login first</p>}

        </div>
  )
}

export default FormTest