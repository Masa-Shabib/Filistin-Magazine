import React, { useState } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios'
import { bottomNavigationClasses } from "@mui/material";
import { useNavigate, Link } from 'react-router-dom';

const Register = () =>{
    const [formInfo, setFormInfo] = useState({
        firstName:"",
        lastName:"",
        email:"",
        Password:"",
        confirmPassword:""
    })
    const [errors, setErrors]= useState([]);
    const navigate = useNavigate();

    const changehandler = (e)=>{
        setFormInfo({
            ...formInfo,
            [e.target.name]:e.target.value
        })
    }
    const register = (e)=>{
        e.preventDefault();
        axios.post('http://localhost:8000/api/register', formInfo, {withCredentials:true})
        .then(res=>{
            console.log(res)
            if(res.data.errors){
                setErrors(res.data.errors)
            }else {
                navigate("/")
            }
        })
        .catch(err=>{
            console.log(err)
        })
    }


    return (
      <div>
        <h2>Registration</h2>
         <Form onSubmit={register}>
            <Form.Floating className="mb-3">
                {errors.firstName? <p className="text-danger"> errors.firstName.message</p>: ""}
                <Form.Control
                    id="floatingInputCustom"
                    type="name"
                    placeholder="name@example.com"
                    name="firstName"
                    onChange={changehandler}
                    />
                    <label htmlFor="floatingInputCustom">Firt Name</label>
            </Form.Floating>
            <Form.Floating className="mb-3">
            {errors.lastName? <p className="text-danger"> errors.lastName.message</p>: ""}
                <Form.Control
                id="floatingInputCustom"
                type="name"
                placeholder="name@example.com"
                name="lastName"
                onChange={changehandler}
                />
                <label htmlFor="floatingInputCustom">Last Name</label>
            </Form.Floating>
            <Form.Floating className="mb-3">
            {errors.email? <p className="text-danger"> errors.email.message</p>: ""}
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
            {errors.password? <p className="text-danger"> errors.password.message</p>: ""}
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
            <Form.Floating>
            {errors.confirmPassword? <p className="text-danger">errors.confirmPassword.message</p>: ""}
                <Form.Control
                className="mb-3"
                id="floatingPasswordCustom"
                type="Password"
                placeholder="Password"
                onChange={changehandler}
                name="confirmPassword"

                />
                <label htmlFor="floatingPasswordCustom">confirm Password</label>
            </Form.Floating>
            <Button variant="primary" type="submit">
                    Register
                </Button>
          </Form>      
        </div>
    );
};

export default Register;