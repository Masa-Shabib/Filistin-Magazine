import React,{useState, useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';
import { Form, Button, Row } from "react-bootstrap";
import Header from "./Header";

const UpdateCities = (props) =>{

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


    const { id } = useParams();
    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [img1, setImg1] = useState("");
    const [img2, setImg2] = useState("");
    const [desc, setDesc] = useState("");
    const [link1, setLink1] = useState("");
    const [area, setArea] = useState("");
    const [city, setCity] = useState("");

    const navigate = useNavigate();
    const [errors, setErrors] = useState([]); 
    const deleteVillage = e =>{
        axios.delete('http://localhost:8000/api/village/' + id)
            .then(res=>{
                navigate("/Filistin/cities");
            })
    }
    useEffect(() => {
        axios.get('http://localhost:8000/api/village/' +id)
            .then(res => {
                console.log(res.data)
                setName(res.data.name);
                setLocation(res.data.location);
                setImg1(res.data.img1);
                setImg2(res.data.img2);
                setDesc(res.data.desc);
                setLink1(res.data.link1);
                setArea(res.data.area);
                setCity(res.data.city);
                
            })
    }, []);
    const UpdateCities = e =>{
        e.preventDefault();
        axios.put('http://localhost:8000/api/village/' + id,{
            name,
            location,
            img1,
            img2,
            desc,
            link1,
            area,
   
        })
        .then((res) => {
            console.log(res);
            navigate("/Filistin/city/"+city+"/village/"+id);
          })
          .catch(err=>{
            console.log(err)
            
            // Set Errors
            setErrors(err.response.data.errors);
        })            
    }
    return (
        <div>
        {loggedUser?
        <Row className="justify-content-center">
            <Header/>
            <h1>Update Village</h1>
            <Form onSubmit={UpdateCities} className=" col-6 m-3 " >
                <Form.Floating className="mb-3">
                    {/* {errors.name? <p className="text-danger"> errors.firstName.message</p>: ""} */}
                    <Form.Control
                        id="floatingInputCustom"
                        type="name"
                        placeholder="name@example.com"
                        name="name"
                        value={name}
                        onChange={(e) => { setName(e.target.value) }}/>
                        <label htmlFor="floatingInputCustom">Name</label>
                </Form.Floating>
                <Form.Floating className="mb-3">
                {/* {errors.location? <p className="text-danger"> errors.location.message</p>: ""} */}
                    <Form.Control
                    id="floatingInputCustom"
                    type="location"
                    placeholder="name@example.com"
                    name="location"
                    value={location}
                    onChange={(e) => { setLocation(e.target.value) }}/>
                    <label htmlFor="floatingInputCustom">Location</label>
                </Form.Floating>
                <Form.Floating className="mb-3">
                {/* {errors.img1? <p className="text-danger"> errors.img1.message</p>: ""} */}
                    <Form.Control
                    id="floatingInputCustom"
                    type="url"
                    placeholder="name@example.com"
                    name="img1"
                    value={img1}
                    onChange={(e) => { setImg1(e.target.value) }}
                    />
                    <label htmlFor="floatingInputCustom">Image1</label>
                </Form.Floating>
                <Form.Floating >
                {/* {errors.img2? <p className="text-danger"> errors.img2.message</p>: ""} */}
                    <Form.Control
                    className="mb-3"
                    id="floatingimg2Custom"
                    type="url"
                    placeholder="img2"
                    name="img2"
                    value={img2}
                    onChange={(e) => { setImg2(e.target.value) }}
                    />
                    <label htmlFor="floatingimg2Custom">Image2</label>
                </Form.Floating>
                <Form.Floating>
                {/* {errors.desc? <p className="text-danger">errors.desc.message</p>: ""} */}
                    <Form.Control
                    className="mb-3"
                    id="floatingPasswordCustom"
                    type="desc"
                    placeholder="desc"
                    value={desc}
                    onChange={(e) => { setDesc(e.target.value) }}                
                    name="desc"

                    />
                    <label htmlFor="floatingPasswordCustom">Desc</label>
                </Form.Floating>
                <Form.Floating>
                {/* {errors.link1? <p className="text-danger">errors.link1.message</p>: ""} */}
                    <Form.Control
                    className="mb-3"
                    id="floatingPasswordCustom"
                    type="url"
                    placeholder="link1"
                    value={link1}
                    onChange={(e) => { setLink1(e.target.value) }}             
                    name="link1"

                    />
                    <label htmlFor="floatingPasswordCustom">Link</label>
                </Form.Floating>
                <Form.Floating>
                {/* {errors.area? <p className="text-danger">errors.area.message</p>: ""} */}
                    <Form.Control
                    className="mb-3"
                    id="floatingPasswordCustom"
                    type="numb"
                    placeholder="Number"
                    value={area}
                    onChange={(e) => { setArea(e.target.value) }}      
                    name="area"

                    />
                    <label htmlFor="floatingPasswordCustom">Population</label>
                </Form.Floating>
                <div className="d-grid gap-4">
                    <Button style={{backgroundColor:"#6B9080",borderColor:"#6B9080"}} size="lg "  type="submit">
                    Update
                    </Button>
                    <Button variant="secondary" size="lg" onClick={deleteVillage}>
                    Delete
                    </Button>
                    </div>
            </Form> 
        </Row> 
        :<p>Login first</p>}
        </div>         
    )
}

export default UpdateCities;