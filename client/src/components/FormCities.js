import React,{useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { Form, Button } from "react-bootstrap";

const FormCities = () =>{
    const [formInfo, setFormInfo] = useState({
        name:"",
        location:"",
        img1:"",
        img2:"",
        desc:"",
        link1:"",
        area:""
    })
    // const [name, setName] = useState("");
    // const [location, setLocation] = useState("");
    // const [img1, setImg1] = useState("");
    // const [img2, setImg2] = useState("");
    // const [desc, setDesc] = useState("");
    // const [link1, setLink1] = useState("");
    // const [area, setArea] = useState("");
    // const [villages, setVillages] = useState("");
    const navigate = useNavigate();
    const [errors, setErrors] = useState([]); 
    const changehandler = (e)=>{
        setFormInfo({
            ...formInfo,
            [e.target.name]:e.target.value
        })
    }
    const onSubmitHandler = e =>{
        e.preventDefault();
        axios.post('http://localhost:8000/api/city', formInfo, {withCredentials:true})

        .then((res) => {
            console.log("Response, ", res);
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
        <Form onSubmit={onSubmitHandler}>
            {errors.map((err, index) => <p key={index}>{err}</p>)}
            <Form.Floating className="mb-3">
                {errors.firstName? <p className="text-danger"> errors.firstName.message</p>: ""}
                <Form.Control
                    id="floatingInputCustom"
                    type="name"
                    placeholder="name@example.com"
                    name="name"
                        onChange={changehandler}                    />
                    <label htmlFor="floatingInputCustom">Name</label>
            </Form.Floating>
            <Form.Floating className="mb-3">
            {errors.location? <p className="text-danger"> errors.location.message</p>: ""}
                <Form.Control
                id="floatingInputCustom"
                type="location"
                placeholder="name@example.com"
                name="location"
                    onChange={changehandler}  />
                <label htmlFor="floatingInputCustom">Location</label>
            </Form.Floating>
            <Form.Floating className="mb-3">
            {errors.img1? <p className="text-danger"> errors.img1.message</p>: ""}
                <Form.Control
                id="floatingInputCustom"
                type="url"
                placeholder="name@example.com"
                name="img1"
                onChange={changehandler}

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
                onChange={changehandler}
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
                onChange={changehandler}                
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
                onChange={changehandler}               
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
                onChange={changehandler}       
                name="area"

                />
                <label htmlFor="floatingPasswordCustom">Area</label>
            </Form.Floating>
            <Button variant="primary" type="submit">
                    Submit
                </Button>
          </Form>      
    )
}

export default FormCities;