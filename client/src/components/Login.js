import React, { useState } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom';
const Login = () =>{
    const [formInfo, setFormInfo] = useState({
        email:"",
        password:""
    })
    const [errors, setErrors]= useState([]);
    const navigate = useNavigate();
    const changehandler = (e)=>{
        setFormInfo({
            ...formInfo,
            [e.target.name]:e.target.value
        })
    }
    const Login = (e)=>{
        e.preventDefault();
        axios.post('http://localhost:8000/api/login', formInfo,{withCredentials:true})
        .then(res=>{
            if(res.data.msg === "success!"){
                navigate("/Filistin")
                
            }else {
                setErrors(res.data.msg)
            }
        })
        .catch(err=>{
            console.log(err)
        })
    }

    return (
     <div>
        <h2>Login</h2>
        {errors?<p className="text-danger">{errors}</p>:""}
         <Form onSubmit={Login}>
            <Form.Floating className="mb-3">

                <Form.Control
                id="floatingInputCustom"
                type="email"
                placeholder="name@example.com"
                name="email"
                onChange={changehandler}
                />
                <label htmlFor="floatingInputCustom">Email</label>
            </Form.Floating>
            <Form.Floating >
                <Form.Control
                className="mb-3"
                id="floatingPasswordCustom"
                type="password"
                placeholder="Password"
                name="password"
                onChange={changehandler}

                />
                <label htmlFor="floatingPasswordCustom">Password</label>
            </Form.Floating>
            <Button variant="primary" type="submit" style={{margin:"0 40%"}}>
                    Login 
                </Button>
          </Form>      

   </div>
    );
};

export default Login;