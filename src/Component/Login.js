import React, {useState} from 'react'
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

const navigate = useNavigate();    

const [form, setForm] = useState({
    email: '',
    password: ''
})

const handleChange = e => {
    setForm({...form, [e.target.name]: e.target.value})
}

const handlePost = async (e) => {
    e.preventDefault();
    await axios.post(`http://localhost:5000/api/login`, form)
    .then( (res) => {
     if(res?.status === 200){
        toast.success('Account created successfully');
        // setTimeout(() => {
        //     navigate('/login')
        // }, 2000); 
     }
    })
  }


  return (
    <div>
        <ToastContainer
        autoClose={2000}
        />
        {/* Don't have an account? Sign up */}
      <form>
          <div className="mb-3 row">
    <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Email</label>
    <div className="col-sm-20">
      <input 
      type="text"  
      className="form-control" 
      id="staticEmail"  
      name='email'
      placeholder='email'
      onChange={handleChange}
     />

    </div>
  </div>
  <div className="mb-3 row">
    <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
    <div className="col-sm-20">
      <input 
      type="password" 
      className="form-control" 
      id="inputPassword" 
      name='password'
      placeholder='password'
      onChange={handleChange}
      />

    </div>
  </div>
  <div className="col-auto">
    <button type="submit" className="btn btn-primary mb-3"
    onClick={handlePost}
    >Login </button>
  </div>
      </form>
    </div>
  )
}

export default Login