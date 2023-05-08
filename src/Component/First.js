import React from 'react';
import { useNavigate } from "react-router-dom";
import './style.css';

function HomePage() {

const navigate =  useNavigate();

const handleRoute = () => {
navigate('./signup')
}



  return (
     <div className='header'>
<nav class="navbar navbar-expand-lg navbar-light" style={{padding: "330px 110px 330px 594px"}}>
  <div class="collapse navbar-collapse" id="navbarText">
    <ul class="navbar-nav mr-auto" style={{gap:'20px'}}>
      <li class="nav-item active">
      <button       onClick={handleRoute} className="btn btn-primary ">Buy</button>
      </li>
      <li class="nav-item">
            <button onClick={handleRoute} className="btn btn-primary ">Rent</button>
      </li>
      <li class="nav-item">
            <button onClick={handleRoute} className="btn btn-primary ">Post your Property</button>
      </li>
    </ul>
  </div>
</nav>
    </div>
     
  );
}

export default HomePage;