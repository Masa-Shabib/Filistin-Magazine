import React from 'react'
import Header from './Header'
import VanillaTilt from 'vanilla-tilt'
import './AboutUsStyle.css'

const About = () => {
  VanillaTilt.init(document.querySelector(".box"), {
    max: 25,
    speed: 400,
  });
  
  //It also supports NodeList
  VanillaTilt.init(document.querySelectorAll(".your-element"));
  return (
    <div>
      <Header/>
    <h1>About Filistin</h1>
    <p style={{ color:"black", padding:"35px",fontSize:"22px"}}>This web application is an online 
    magazine that will help to document Palestinian Cities and Villages and allow the world 
    to get to know more about Palestine. We got motivated to create this magazine because of the situation that
     Palestine is facing so we can show the world what is real Palestine. 
    <br/>
    
</p>
    <p style={{ color:"black", padding:"35px",fontSize:"20px", color:"#3e584c", fontWeight:"bolder"}}>
      Designed and maintained By: Rafat Darawshe, Masa Shabib, Abdelhadi Numan, Mahmoud Aleassa</p>
    <div className="container">
      <div className="box">    
        <div className="imgBx"> 
          <img 
            src="https://media.istockphoto.com/photos/jerusalem-picture-id1154113791?b=1&k=20&m=1154113791&s=170667a&w=0&h=iS51tj2VsVzTCy2mkAJuvGuDWWaEMAorrftTQUErTUY="
            alt=""
          />
        </div>
        <div className="contentBx" style={{padding:"50px"}}>
          <h2>Palestine</h2>
          <p>
          Palestine, area of the eastern Mediterranean region,The term Palestine has been associated 
          variously and sometimes controversially with this small region, which some have asserted 
          also includes Jordan. Both the geographic area designated by the name and the political 
          status of it have changed over the course of some three millennia.
          </p>
        </div>
      </div> 
    </div>

    </div> 
  )
}



export default About