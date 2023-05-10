import React from 'react'
import {useNavigate} from 'react-router-dom';

const Dashboard = () => {

const navigate = useNavigate();     

const handleForm = (type) => {
    navigate(`/form/${type}`);
}

const handleFlat = () => {
  navigate('/flats');
}

  return (
  
  
  
  <div className='header'>
<nav className="navbar navbar-expand-lg navbar-light" style={{padding: "330px 110px 330px 594px"}}>
  <div className="collapse navbar-collapse" id="navbarText">
    <ul className="navbar-nav mr-auto" style={{gap:'20px'}}>
      <li className="nav-item active">
      <button onClick={() => handleForm('sale')} className="btn btn-primary ">For Sale</button>
      </li>
      <li className="nav-item">
            <button onClick={() => handleForm('rent')} className="btn btn-primary ">For Rent</button>
      </li>
      <li className="nav-item">
            <button onClick={handleFlat} className="btn btn-primary ">Manage Listing</button>
      </li>
    </ul>
  </div>
</nav>
    </div>
  )
}

export default Dashboard