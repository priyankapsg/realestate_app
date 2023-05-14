import React from 'react'
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
    await axios.post(`http://localhost:5000/app/user/login`, values)
    .then( (res) => {
      if(res?.data?.statusCode === 200){
       handleReset();
       sessionStorage.setItem('user', values?.email);
       navigate('/dashboard');
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
    navigate('/register');
  }
  
    return (
      <div className='header'>
          <ToastContainer autoClose={2000}/>
        <form onSubmit={handleSubmit} autoComplete='off'>
    <div className="card border-primary"  style={{width: "25%", margin: "180px 0px 200px 550px"}}>
  <div className="card-body text-primary">
    <h5 className="card-title">
      <label htmlFor="staticEmail" style={{margin:'20px 0px'}}>Email</label>
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
      <label htmlFor="inputPassword" style={{margin:'20px 0px'}}>Password</label>
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
    <div className='btn'>
      <button type="submit" className="btn btn-danger">Login </button>
      <button className="btn btn-danger"
      onClick={handleRegister}
      >Register</button>
    </div>
    </h5>
  </div>
    </div>
        </form>
      </div>
    )
}

export default Login