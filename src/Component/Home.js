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
        <a>Elite Estates</a>
      </div>
 <ul>
      <li>
      <button className="btn btn-light" onClick={() => handleFlat('sale')}>buy</button>
      </li>
      <li>
      <button className="btn btn-light" onClick={() => handleFlat('rent')} >Rent</button>
      </li>
      <li>
      <button className="btn btn-light" onClick={handleRoute} >Post your Property</button>
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