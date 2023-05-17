import React, {useEffect, useState} from 'react'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useFormik} from 'formik';
import {object, string, number} from 'yup';
import './style.css';
import Home from '../images/small.jpg';
import { useParams, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const Flat = () => {

let { type } = useParams();


const [flat, setflat] = useState([]);

useEffect(()  => {
   axios.get(`http://localhost:5000/app/flat/getFlats/${type}`)
  .then( (res) => {
  if(res?.data?.statusCode === 200){
    setflat(res?.data?.data);
  }
  })
}, [])


const [open, setOpen] = useState(false);
const [openData, setOpenData] = useState([]);
const [ownerData, setOwnerData] = useState([]);
const theme = useTheme();
const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

const handleClickOpen = (data) => {
  setOpenData(data);  
  setOpen(true);
};

const handleClose = () => {
  setOpen(false);
  handleReset();
  setOwnerData([]);
};

const handlePost = async (values) => {
  await axios.post(`http://localhost:5000/app/contact/createContact`, {
  ownerEmail: openData?.email,
  name: values?.name,
  email: values?.email,
  password: values?.password,
  mobile: values?.mobile,
  })
  .then( (res) => {
    console.log(res);
    if(res?.data?.statusCode === 200){
     handleReset();
     setOwnerData(res?.data?.data);
   }
    })
}

const registerValues = {
  ownerEmail:'',
  name:'',
  email:'',
  password:'',
  mobile:'',
}

const RegisterSchema = object().shape({
  name: string().required("Please enter your name"),
  email: string().email("Please enter a valid email address").required("Please enter your email address"),
  password: string().required("Please enter your password"),
  mobile: number().positive().integer().required("Please enter your mobile number")
})

const {values, errors, touched, handleBlur, handleChange, handleSubmit, handleReset} = useFormik({
  initialValues: registerValues,
  validationSchema: RegisterSchema,
  onSubmit : handlePost,
})




  return (
    <div className='header'>
      {flat?.length > 0 && flat?.map( (data) => {
        return (
          <div className="card border-primary mb-3"  style={{width: "25%", margin: "70px 0px 0px 550px"}}>
          <img className="card-img-top" src='https://www.coimbatoreproperty.com/property/image-not-available.jpg' alt="Card image cap"/>
          <div className="card-body text-primary ">
          <h5 className="card-title">
         {data?.bhk} BHK Flat For {type} in {data?.location} 
          </h5>
          <p className="card-text">Size : {data?.size}</p>
          <p className="card-text">Price : {data?.price}</p>
          <button className="btn btn-primary" onClick={() => handleClickOpen(data)} >Contact Owner</button>
          </div>
          </div>
        )
      })}

      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Contact with the Seller Right Now"}
        </DialogTitle>
        <DialogContent>
        <form onSubmit={handleSubmit} autoComplete='off'>
    <div style={{display: "flex",
    flexDirection: "column",
    gap: "20px"}}>
      {ownerData?.length > 0 ? 
     
     <>
      {ownerData?.map ( (data) => {
        return (
          <>
          <h4>NAME : {data?.username}</h4> 
          <h4>EMAIL : {data?.email}</h4> 
          <h4>MOBILE : {data?.mobile}</h4> 
          </>
        )
      })}
      </>
      
      : 
      <>
      <div>
        <input
        value={values.name}
        onChange={handleChange}
        onBlur={handleBlur} 
        id="name"  
        type="name"  
        className="form-control" 
        placeholder='Enter your name'
        autoComplete='off'
       />
       {errors.name && touched.name && <p className='error'>{errors.name}</p>}
      </div>
      <div>
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
      <div>
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
      <div>
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
      </>
      }
    </div>
    <div className='btn'>
    {ownerData?.length > 0 ? '' : <button type="submit" className="btn btn-danger">Get Contact details</button>}
      <button className="btn btn-danger" type='button' 
      onClick={()=> handleClose()}
      >Close</button>
    </div>
        </form>
        </DialogContent>
      </Dialog>

    </div>
  )
}

export default Flat