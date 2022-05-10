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
        <div className="word">
          <span>F</span>
          <span>i</span>
          <span>l</span>
          <span>i</span>
          <span>s</span>
          <span>t</span>
          <span>i</span>
          <span>n</span>
        </div>
        <p>Palestenian Magazine</p>
      </div>

      <div className="name"><strong > F</strong>ilistine</div>

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