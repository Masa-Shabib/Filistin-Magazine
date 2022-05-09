import React,{useState, useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { Form, Button, Row } from "react-bootstrap";

const FormVillages = () =>{
    const [formInfo, setFormInfo] = useState({
        name:"",
        location:"",
        img1:"",
        img2:"",
        desc:"",
        link1:"",
        area:"",
    })
    const navigate = useNavigate();
    const [errors, setErrors] = useState([]); 
    const [cities, setCities] = useState([])
    const [citId, setCitId] = useState([])
  useEffect(() => {
    axios.get('http://localhost:8000/api/city' )
        .then(res => setCities(res.data))
        .catch(err => console.error(err));
}, []);
    const changehandler = (e)=>{
        setFormInfo({
            ...formInfo,
            [e.target.name]:e.target.value
        })
    }
    const onSubmitHandler = e =>{
        e.preventDefault();
        axios.post('http://localhost:8000/api/village/'+citId, formInfo, {withCredentials:true})

        .then((res) => {
            console.log("Response, ", res);
            navigate("/Filistin");
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
                        <h1>Create Village</h1>
            <Form onSubmit={onSubmitHandler} className=" col-6 m-3 ">
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

                    <Form.Select aria-label="Default select example" className="mb-3" onChange={e=> setCitId(e.target.value)}
    >                   {cities.map((city, index) => <option key={index} value={city._id} name="city">{city.name}</option>)}
                       
                    </Form.Select>
                </Form.Floating>
                <Button variant="primary" type="submit">
                    Create
                    </Button>
            </Form>      
      </Row>
    ) 
}

export default FormVillages;