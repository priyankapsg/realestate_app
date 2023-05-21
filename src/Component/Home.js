import React from 'react';
import { useNavigate } from "react-router-dom";
import './style.css';

function HomePage() {

const navigate =  useNavigate();

const handleRoute = () => {
navigate('./register')
}

const handleFlat = (type) => {
navigate(`./flats/${type}`)
}

  return (
    
     <div>
      <nav>
    <div class="menu">
      <div class="logo">
        <a href="#">Elite Estates</a>
      </div>
      {/* <div className='animate-charcter' style={{color:"ButtonHighlight",fontFamily:"Lucida Handwriting",padding: "200px 110px 10px 504px"}}> <h1 color='blue'>WELCOME TO DREAM HOME</h1></div>

<nav className="navbar navbar-expand-lg navbar-light" style={{padding: "5px 110px 330px 594px"}}>
  <div className="collapse navbar-collapse" id="navbarText">
    <ul className="navbar-nav mr-auto" style={{gap:'20px'}}> */}
 <ul>
      <li>
      <a href='#'onClick={() => handleFlat('sale')}>buy</a>
      </li>
      <li>
            <a href="#" onClick={() => handleFlat('rent')} >Rent</a>
      </li>
      <li>
            <a href="#" onClick={handleRoute} >Post your Property</a>
      </li>
    </ul>
  </div>
</nav>
 
  <div class="img"></div>
  <div class="center">
    <div class="title">Sell your home, open new doors</div>
    <div class="sub_title"> Our app makes it effortless</div>
    <div class="btns">
      <button>SEARCH</button>
      {/* <button>Subscribe</button> */}
    </div>
  </div>

{/* <body>
<div class="waviy">
   <span style="--i:1">A</span><br/>
   <span style="--i:2">House</span><br/>
   <span style="--i:3">Is</span>
   <span style="--i:4">Made</span>
   <span style="--i:5">Of</span>
   <span style="--i:6">Bricks</span>
   <span style="--i:7">And</span>
   <span style="--i:8">Beams</span>
   <span style="--i:9">,</span>
   <span style="--i:11">A</span>
   <span style="--i:12">Home</span>
   <span style="--i:13">Is</span>
   <span style="--i:14">Made</span>
   <span style="--i:15">Of</span>
   <span style="--i:16">Love</span>
   <span style="--i:17">And</span>
   <span style="--i:18">Dreams</span>
   <span style="--i:19">.</span>
  </div>
  </body> */}
  </div>
  );
}

export default HomePage;