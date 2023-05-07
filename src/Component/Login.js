import React, {useState} from 'react'
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useFormik} from 'formik';
import {object, string} from 'yup';
import './style.css';

const Login = () => {

  const navigate = useNavigate();    

  const handlePost = async (values) => {
    await axios.post(`http://localhost:5000/api/login`, values)
    .then( (res) => {
      console.log(res);
     if(res?.data?.statusCode === 200){
       handleReset();
        setTimeout(() => {
            navigate('/login')
        }, 2000); 
     } 
     else if(res?.data?.statusCode === 400){
        toast.error("Your email hasn't been registered")
     }
     else if(res?.data?.statusCode === 201){
        toast.error("Invalid email or password")
     }
      })
  }
  
  const registerValues = {
    email:'',
    password:''
  }
  
  const RegisterSchema = object().shape({
    email: string().email("Please enter a valid email address").required("Please enter your email address"),
    password: string().required("Please enter your password")
  })
  
  const {values, errors, touched, handleBlur, handleChange, handleSubmit, handleReset} = useFormik({
    initialValues: registerValues,
    validationSchema: RegisterSchema,
    onSubmit : handlePost,
  })
  
  
  const handleRegister = () => {
    navigate('/signup');
  }
  
    return (
      <div>
          <ToastContainer autoClose={2000}/>
        <form onSubmit={handleSubmit} autoComplete='off'>
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
    <div className='btn'>
      <button type="submit" className="btn btn-primary ">Login </button>
      <button className="btn btn-primary "
      onClick={handleRegister}
      >Register</button>
    </div>
        </form>
      </div>
    )
}

export default Login