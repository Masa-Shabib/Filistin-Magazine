import React from 'react'
import './cover.css';
import {TweenMax, Circ,Expo,Power2,Power3} from 'gsap'
const Cover = () => {
  return (
    // <div> 
    //     <h1>Filistin</h1>
    //     <div style={{margin:"0 auto",backgroundColor:"black"}} >
    //         <img alt='' src='https://pbs.twimg.com/media/FCcg1JzWYAMBkEo?format=jpg&name=large' style={{height:"auto",width:"100%",maxWidth:"600px",}} ></img>
    //     </div> 
    // </div>
    
    <div className="wrapper">
    <div className="left"></div>
    <div className="right"></div>

    <nav className="nav">
      <ul>
        <li className="logo">unsplash</li>
        <li className="menu"><i className="fa fa-bars"></i></li>
        <li className="collection">collection</li>
        <li className="explore">explore</li>
        <li className="search">search</li>
        <li className="profile">
          <div className="img"></div>
        </li>
      </ul>
    </nav>

    <div className="content">
      <div className="img-wrapper">
        <div className="karina"></div>
      </div>

      <div className="info">
        <ul>
          <li>unsplash.com</li>
          <li>@karinates</li>
          <li>karinates.com</li>
          <li><i className="fa fa-share-alt"></i></li>
        </ul>
      </div>

      <div className="text">
        <h1>karina tes</h1>
        <p>Fashion Photographer</p>
      </div>

      <div className="name">karina tes</div>

      <div className="bottomnav">
        <ul>
          <li>profile</li>
          <li>portfolio</li>
          <li>contact</li>
        </ul>
      </div>
    </div>
  </div>

  )
}


TweenMax.to('.left', 2, {
    delay: .8,
    width: '50%',
    
    ease: Power2.easeInOut
  })

  TweenMax.to('.right', 2, {
    delay: .6,
    width: '50%',
    ease: Power3.easeInOut
  })

  TweenMax.from('.nav', 2, {
    delay: .8,
    opacity: 0,
    ease: Expo.easeInOut
  })

  TweenMax.from('.text h1', 2, {
    delay: .6,
    x: 1000,
    ease: Circ.easeInOut
  })

  TweenMax.from('.text p', 2, {
    delay: .7,
    x: 1000,
    ease: Circ.easeInOut
  })

  TweenMax.to('.karina', 2, {
    delay: 1.5,
    width: '800px',
    ease: Power2.easeInOut
  })

  TweenMax.staggerFrom('.bottomnav ul li', 2, {
    delay: 1,
    x: 1000,
    ease: Circ.easeInOut
  }, 0.08)

  TweenMax.from('.info', 2, {
    delay: 1.5,
    y: 100,
    ease: Circ.easeInOut
  })

  TweenMax.from('.name', 2, {
    delay: 1.5,
    x: -600,
    ease: Circ.easeInOut
  })

export default Cover