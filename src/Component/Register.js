import React, {useState} from 'react'
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useFormik} from 'formik';
import {object, string, number} from 'yup';
import './style.css';
const Register = () => {

const navigate = useNavigate();    

const handlePost = async (values) => {
  await axios.post(`http://localhost:5000/api/register`, values)
  .then( (res) => {
   if(res?.status === 200){
     handleReset();
      toast.success('Account created successfully');
      setTimeout(() => {
          navigate('/login')
      }, 2000); 
   }
  })
}

const registerValues = {
  usertype:'',
  username:'',
  email:'',
  mobile:'',
  password:''
}

const RegisterSchema = object().shape({
  usertype: string().required("Please choose a user type"),
  username: string().required("Please enter your name"),
  email: string().email("Please enter a valid email address").required("Please enter your email address"),
  mobile: number().positive().integer().required("Please enter your mobile number"),
  password: string().required("Please enter your password")
})

const {values, errors, touched, setFieldValue, handleBlur, handleChange, handleSubmit, handleReset} = useFormik({
  initialValues: registerValues,
  validationSchema: RegisterSchema,
  onSubmit : handlePost,
})


const handleLogin = () => {
  navigate('/login');
}

  return (
    <div>
        <ToastContainer autoClose={2000}/>
      <form onSubmit={handleSubmit} autoComplete='off'>
          <div className=" row">
    <label htmlFor="staticEmail" className="col-sm-4 col-form-label">Usertype</label>
    <div className="col-sm-20">
    <select 
    value={values.usertype}
    id="usertype"
    onBlur={handleBlur}  
    className="form-control" 
    onChange={(e)=> setFieldValue("usertype",e.target.value)}
    >
      <option selected>Select Type</option>
      <option value={'owner'}>Owner</option>
      <option value={'rental'}>Rental</option>
      <option value={'buyer'}>Buyer</option>
    </select>
     {errors.usertype && touched.usertype && <p className='error'>{errors.usertype}</p>}
    </div>
  </div>
  <div className=" row">
    <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Username</label>
    <div className="col-sm-20">
      <input
      value={values.username}
      onChange={handleChange}
      onBlur={handleBlur} 
      id="username"  
      type="username"  
      className="form-control" 
      placeholder='Enter your user name'
      autoComplete='off'
     />
     {errors.username && touched.username && <p className='error'>{errors.username}</p>}
    </div>
  </div>
          <div className=" row">
    <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Email</label>
    <div className="col-sm-20">
      <input
      value={values.email}
      onChange={handleChange}
      onBlur={handleBlur} 
      id="email"  
      type="email"  
      className="form-control" 
      placeholder='Enter your email ID'
      autoComplete='off'
     />
     {errors.email && touched.email && <p className='error'>{errors.email}</p>}
    </div>
  </div>
  <div className=" row">
    <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
    <div className="col-sm-20">
      <input
      value={values.password}
      onChange={handleChange}
      onBlur={handleBlur} 
      id="password" 
      type="password" 
      className="form-control" 
      placeholder='Enter your password'
      autoComplete='off'
      />
     {errors.password && touched.password && <p className='error'>{errors.password}</p>}
    </div>
  </div>
  <div className=" row">
    <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Mobile</label>
    <div className="col-sm-20">
      <input
      value={values.mobile}
      onChange={handleChange}
      onBlur={handleBlur} 
      id="mobile" 
      type="mobile" 
      className="form-control" 
      placeholder='Enter your mobile number'
      autoComplete='off'
      />
     {errors.mobile && touched.mobile && <p className='error'>{errors.mobile}</p>}
    </div>
  </div>
  <div className='btn'>
    <button type="submit" className="btn btn-primary ">Register </button>
    <button className="btn btn-primary "
    onClick={handleLogin}
    >Login</button>
  </div>
      </form>
    </div>
  )
}

export default Register