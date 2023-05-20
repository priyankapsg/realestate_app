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
     <div className='header'>
      <div className='animate-charcter' style={{color:"ButtonHighlight",fontFamily:"Lucida Handwriting",padding: "200px 110px 10px 504px"}}> <h1 color='blue'>WELCOME TO DREAM HOME</h1></div>

<nav className="navbar navbar-expand-lg navbar-light" style={{padding: "5px 110px 330px 594px"}}>
  <div className="collapse navbar-collapse" id="navbarText">
    <ul className="navbar-nav mr-auto" style={{gap:'20px'}}>
      <li className="nav-item active">
      <button       onClick={() => handleFlat('sale')} className="btn btn-primary ">Buy</button>
      </li>
      <li className="nav-item">
            <button onClick={() => handleFlat('rent')} className="btn btn-primary ">Rent</button>
      </li>
      <li className="nav-item">
            <button onClick={handleRoute} className="btn btn-primary ">Post your Property</button>
      </li>
    </ul>
  </div>
</nav>
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