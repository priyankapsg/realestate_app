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
<nav class="navbar navbar-expand-lg navbar-light" style={{padding: "330px 110px 330px 594px"}}>
  <div class="collapse navbar-collapse" id="navbarText">
    <ul class="navbar-nav mr-auto" style={{gap:'20px'}}>
      <li class="nav-item active">
      <button onClick={() => handleForm('sale')} className="btn btn-primary ">For Sale</button>
      </li>
      <li class="nav-item">
            <button onClick={() => handleForm('rent')} className="btn btn-primary ">For Rent</button>
      </li>
      <li class="nav-item">
            <button onClick={handleFlat} className="btn btn-primary ">Manage Listing</button>
      </li>
    </ul>
  </div>
</nav>
    </div>
  )
}

export default Dashboard