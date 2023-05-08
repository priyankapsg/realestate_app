import React from 'react'
import {useNavigate} from 'react-router-dom';

const Dashboard = () => {

const navigate = useNavigate();     

const handleForm = (type) => {
    navigate(`/form/${type}`);
}    

  return (
    <div style={{display:'flex'}}>
        <div className="card-group">
  <div className="card">
    <img className="card-img-top" src="..." alt="Card image cap"/>
    <div className="card-body">
      <h5 className="card-title">Submit Property</h5>
      <h5 className="card-title">Manage Listing</h5>
      <h5 className="card-title">View Profile</h5>
      <h5 className="card-title">Change Password</h5>
      <h5 className="card-title">Logout</h5>
    </div>
  </div>
  <div className="card">
    <img className="card-img-top" src="..." alt="Card image cap"/>
    <div className="card-body">
    <div className="card-title" style={{display:'flex'}}>
            <button onClick={() => handleForm('sale')} className="btn btn-primary ">For Sale</button>
            <button onClick={() => handleForm('rent')} className="btn btn-primary ">For Rent</button>
        </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Dashboard