import React from "react";
import Register from "./Register";
import Login from "./Login";
import { Col, Row } from "react-bootstrap";
// import rafat from 'public/download.jpg'
import background from "../download.jpg";
// const imge = require('/public/download.jpg')
const Signin = ()=>{
   console.log(background)
    return(
        <div className="row" style={{ backgroundImage:`url(${background})` }}>
            <h1>Welcom to our magazine</h1>
            <Col className="col">
                <Register></Register>
            </Col>
            <Col className="col">
                <Login></Login>
            </Col>
        </div>
    )
}
export default Signin;