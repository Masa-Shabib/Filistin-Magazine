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
        <div className="row" style={{ height:"95vh"}}>
            <h1>Welcom to our magazine</h1>
            <Row className="justify-content-md-center">
            <Col className="col-6 m-3" >
                <Register></Register>
                <Login></Login>
            </Col>
            </Row>
        </div>
    )
}
export default Signin;