import React,{useEffect} from 'react'
import './cover.css';
import Container from '@mui/material/Container';
import { useNavigate } from "react-router-dom";
const Cover = (props) => {
  const navigate = useNavigate();
  return (

    <Container minWidth="sm" maxWidth="lg"  className='content'> 
    <div className="wrapper"> 
    <div className="left"></div>
    <div className="right"></div>

    <div className="content" style={{backgroundImage:"url(https://thisweekinpalestine.com/wp-content/uploads/2021/02/274-016-a.jpg)",
  backgroundSize:"contain",backgroundRepeat:"no-repeat",height:"1090px"}}>
      
      <div className="text">
        <div className="word" style={{color:"#E6F3EB"}}>
          <span>F</span>
          <span>i</span> 
          <span>l</span>
          <span>i</span>
          <span>s</span>
          <span>t</span>
          <span>i</span>
          <span>n</span>
        </div>
        <p style={{color:"#C9DECF"}}>Palestenian Magazine</p>
      </div>

      <div className="name"> Filistine</div>

      <div className="bottomnav">
        <ul>
          <li onClick={e=>navigate("/Filistin/aboutus/")} >Aboutus  </li>
          <li onClick={e=>navigate("/Filistin/cities/")}>All Cities</li>
          <li onClick={e=>navigate("/Filistin/register")}>Join Us</li>
        </ul>
      </div>
      <div className="img-wrapper">
        <img src='https://www.globeguide.ca/wp-content/uploads/2019/07/Israel-Sebastia-landscape-2.jpg'></img>
      </div>
      <div className="info">
        <ul>
          <li>Filistin.com </li>
          <li>@Filistin</li>
          <li>Filistin.com</li>
          <li><i className="fa fa-share-alt"></i></li>
        </ul>
      </div> 
    </div>
  </div>
  </Container>
  )
}


export default Cover