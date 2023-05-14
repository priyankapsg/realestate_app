import React from 'react'
import {useNavigate, useParams} from 'react-router-dom';

const Header = () => {

let header = window.location.pathname;

const navigate = useNavigate();  
const handleBack = () => {
  navigate(-1);  
}

const handleLogout = () => {
  navigate('/');
  sessionStorage.clear();
}

let Check = sessionStorage.getItem('user');

  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
  <a className="navbar-brand" href="#"></a>
  <div className='btn_header'>
    {header !== '/dashboard' &&
    <button onClick={handleBack} type="submit" className="btn btn-danger ">Back </button>
    }
    {Check?.length > 0 &&
    <button className="btn btn-danger "
     onClick={handleLogout}
    >Logout</button>
    }
  </div>
</nav>
    </div>
  )
}

export default Header