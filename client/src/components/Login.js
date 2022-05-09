import React, { useState } from "react";
import {  Form, Button, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios'

const Login = () =>{
    const [formInfo, setFormInfo] = useState({
        email:"",
        Password:""
    })
    const changehandler = (e)=>{
        setFormInfo({
            ...formInfo,
            [e.target.name]:e.target.value
        })
    }
    const register = (e)=>{
        e.preventDefault();
        axios.post('http://localhost:8000/api/login', formInfo, {withCredentials:true})
        .then(res=>{
            console.log(res)
        })
        .catch(err=>{
            console.log(err)
        })
    }

    return (
     <div>
        <h2>Login</h2>
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
            <Button variant="primary" type="submit">
                    Login 
                </Button>
          </Form>      

   </div>
    );
};

export default Login;