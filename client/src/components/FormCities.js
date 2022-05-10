import React,{useEffect,useState} from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { Form, Button, Row } from "react-bootstrap";

const FormCities = () =>{
    const [loggedUser, setLoggedUser]= useState(null)
    useEffect(()=>{
        axios.get('http://localhost:8000/api/loggedUser', {withCredentials:true})
        .then(res=>{console.log(res)
          setLoggedUser(res.data.user)
        })
        .catch(err=>{console.log(err)
            navigate("/Filistin")})
      },[])
      const logOut=()=>{
        axios.get('http://localhost:8000/api/logout', {withCredentials:true})
        .then(res=>{console.log(res)
            navigate("/Filistin")
        })
        .catch(err=>console.log(err))
      }
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
            navigate("/Filistin");
          })
        .catch(err=>{
            console.log(err)
            
            // Set Errors
            setErrors(err.response.data.errors);
        })            
    }
    return (

        <div>
        {loggedUser? <Row className="justify-content-center">
            <h1>Create City</h1>
            <Form onSubmit={onSubmitHandler} className=" col-6 m-3 " >
                {/* {errors.map((err, index) => <p key={index}>{err}</p>)} */}
                <Form.Floating className="mb-3">
                    <Form.Control
                        id="floatingInputCustom"
                        type="name"
                        placeholder="name@example.com"
                        name="name"
                            onChange={changehandler} />
                        <label htmlFor="floatingInputCustom">Name</label>
                        {errors.name?<p className="text-danger">{errors.name.message}</p>:""}
                </Form.Floating>
                <Form.Floating className="mb-3">
                
                    <Form.Control
                    id="floatingInputCustom"
                    type="location"
                    placeholder="name@example.com"
                    name="location"
                        onChange={changehandler}  />
                    <label htmlFor="floatingInputCustom">Location</label>
                    {errors.location? <p className="text-danger"> {errors.location.message}</p>: ""}
                </Form.Floating>
                <Form.Floating className="mb-3">
                
                    <Form.Control
                    id="floatingInputCustom"
                    type="url"
                    placeholder="name@example.com"
                    name="img1"
                    onChange={changehandler}

                    />
                    <label htmlFor="floatingInputCustom">Image1</label>
                    {errors.img1? <p className="text-danger"> {errors.img1.message}</p>: ""}
                </Form.Floating>
                <Form.Floating >
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
                
                    <Form.Control
                    className="mb-3"
                    id="floatingPasswordCustom"
                    type="desc"
                    placeholder="desc"
                    onChange={changehandler}                
                    name="desc"
                    />
                    <label htmlFor="floatingPasswordCustom">Desc</label>
                    {errors.desc? <p className="text-danger">{errors.desc.message}</p>: ""}
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
                    Create
                    </Button>
            </Form> 
        </Row>         
        :<p>Login first</p>}
        </div>
             
               
    )
}

export default FormCities;