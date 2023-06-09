import React from 'react'
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
  await axios.post(`http://localhost:5000/app/user/register`, values)
  .then( (res) => {
   if(res?.data?.statusCode === 200){
     handleReset();
      toast.success('Account created successfully');
      setTimeout(() => {
          navigate('/login')
      }, 2000); 
   } else {
    toast.error("This email address has been taken, please try another email address");
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

const handleBack = () => {
  navigate(-1);  
}

  return (
    
    <>
       <div>
      <nav className="navbar navbar-dark bg-dark">
  <a className="navbar-brand"></a>
  <div className='btn_header'>
    <button onClick={handleBack} type="submit" className="btn btn-danger ">Back </button>
  </div>
</nav>
          </div>
    
    <div className='body'>
          <ToastContainer autoClose={2000}/>
        
        <form onSubmit={handleSubmit} autoComplete='off'>
    <div>
    < div className='form'>
  <div className="card-body text-primary">
    <h5 className="card-title">   
    <label htmlFor="staticEmail" style={{margin:'20px 0px'}}>Usertype</label>
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
      <option value={'agent'}>Admin</option>
      {/* <option value={'builder'}>Builder</option> */}
    </select>
     {errors.usertype && touched.usertype && <p className='error'>{errors.usertype}</p>}
    </div>
    <label htmlFor="staticEmail" style={{margin:'20px 0px'}}>Username</label>
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
    <label htmlFor="inputPassword" style={{margin:'20px 0px'}}>Mobile</label>
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
  <div className='btn'>
    <button type="submit" className="btn btn-danger ">Register </button>
    <button className="btn btn-danger "
    onClick={handleLogin}
    >Login</button>
  </div>
  </h5>
  </div>
    </div>
    </div>
      </form>
    </div>

    <div>
<nav className="navbar navbar-dark bg-dark">
  <a className="navbar-brand" href="#"></a>
</nav>
          </div>


    </>
  )
}

export default Register