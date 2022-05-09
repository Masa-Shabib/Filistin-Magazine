import React,{useState, useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';
import { Form, Button, Row } from "react-bootstrap";

const UpdateCities = (props) =>{
    const { id } = useParams();
    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [img1, setImg1] = useState("");
    const [img2, setImg2] = useState("");
    const [desc, setDesc] = useState("");
    const [link1, setLink1] = useState("");
    const [area, setArea] = useState("");
    const { cityId, successCallback } = props;
    const navigate = useNavigate();
    const [errors, setErrors] = useState([]); 
    const deleteCity = e =>{
        axios.delete('http://localhost:8000/api/city/' + cityId)
            .then(res=>{
                successCallback();
            })
    }
    useEffect(() => {
        axios.get('http://localhost:8000/api/city', +id)
            .then(res => {
                setName(res.data.name);
                setLocation(res.data.location);
                setImg1(res.data.img1);
                setImg2(res.data.img2);
                setDesc(res.data.desc);
                setLink1(res.data.link1);
                setArea(res.data.area);
                
            })
    }, []);
    const UpdateCities = e =>{
        e.preventDefault();
        axios.put('http://localhost:8000/api/city' + id,{
            name,
            location,
            img1,
            img2,
            desc,
            link1,
            area
        })
        .then((res) => {
            console.log(res);
            navigate("/city");
          })
        .catch(err=>{
            const errorResponse = err.response.data.errors; // Get the errors from err.response.data
            const errorArr = []; // Define a temp error array to push the messages in
            for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                errorArr.push(errorResponse[key].message)
            }
            // Set Errors
            setErrors(errorArr);
        })            
    }
    return (
        <Row className="justify-content-center">
            <h1>Update City</h1>
            <Form onSubmit={UpdateCities} className=" col-6 m-3 " >
                {errors.map((err, index) => <p key={index}>{err}</p>)}
                <Form.Floating className="mb-3">
                    {errors.firstName? <p className="text-danger"> errors.firstName.message</p>: ""}
                    <Form.Control
                        id="floatingInputCustom"
                        type="name"
                        placeholder="name@example.com"
                        name="name"
                        onChange={(e) => { setName(e.target.value) }}/>
                        <label htmlFor="floatingInputCustom">Name</label>
                </Form.Floating>
                <Form.Floating className="mb-3">
                {errors.location? <p className="text-danger"> errors.location.message</p>: ""}
                    <Form.Control
                    id="floatingInputCustom"
                    type="location"
                    placeholder="name@example.com"
                    name="location"
                    onChange={(e) => { setLocation(e.target.value) }}/>
                    <label htmlFor="floatingInputCustom">Location</label>
                </Form.Floating>
                <Form.Floating className="mb-3">
                {errors.img1? <p className="text-danger"> errors.img1.message</p>: ""}
                    <Form.Control
                    id="floatingInputCustom"
                    type="url"
                    placeholder="name@example.com"
                    name="img1"
                    onChange={(e) => { setImg1(e.target.value) }}
                    />
                    <label htmlFor="floatingInputCustom">Image1</label>
                </Form.Floating>
                <Form.Floating >
                {errors.img2? <p className="text-danger"> errors.img2.message</p>: ""}
                    <Form.Control
                    className="mb-3"
                    id="floatingimg2Custom"
                    type="url"
                    placeholder="img2"
                    name="img2"
                    onChange={(e) => { setImg2(e.target.value) }}
                    />
                    <label htmlFor="floatingimg2Custom">Image2</label>
                </Form.Floating>
                <Form.Floating>
                {errors.desc? <p className="text-danger">errors.desc.message</p>: ""}
                    <Form.Control
                    className="mb-3"
                    id="floatingPasswordCustom"
                    type="desc"
                    placeholder="desc"
                    onChange={(e) => { setDesc(e.target.value) }}                
                    name="desc"

                    />
                    <label htmlFor="floatingPasswordCustom">Desc</label>
                </Form.Floating>
                <Form.Floating>
                {errors.link1? <p className="text-danger">errors.link1.message</p>: ""}
                    <Form.Control
                    className="mb-3"
                    id="floatingPasswordCustom"
                    type="url"
                    placeholder="link1"
                    onChange={(e) => { setLink1(e.target.value) }}             
                    name="link1"

                    />
                    <label htmlFor="floatingPasswordCustom">Link</label>
                </Form.Floating>
                <Form.Floating>
                {errors.area? <p className="text-danger">errors.area.message</p>: ""}
                    <Form.Control
                    className="mb-3"
                    id="floatingPasswordCustom"
                    type="numb"
                    placeholder="Number"
                    onChange={(e) => { setArea(e.target.value) }}      
                    name="area"

                    />
                    <label htmlFor="floatingPasswordCustom">Area</label>
                </Form.Floating>
                <Button variant="primary" type="submit">
                    Create
                    </Button>
                    <Button onClick={deleteCity}>
                        Delete
                    </Button>
            </Form> 
        </Row>         
    )
}

export default UpdateCities;