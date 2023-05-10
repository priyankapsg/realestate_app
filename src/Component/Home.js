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
<nav className="navbar navbar-expand-lg navbar-light" style={{padding: "330px 110px 330px 594px"}}>
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
    </div>
     
  );
}

export default HomePage;