import React, {useEffect, useState} from 'react'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useFormik} from 'formik';
import {object, string, number} from 'yup';
import './style.css';
import Home from '../images/small.jpg';
import { useParams, useNavigate } from 'react-router-dom';

const Flat = () => {

let { type } = useParams(); 
  
const [flat, setflat] = useState([]);

useEffect(()  => {
   axios.get(`http://localhost:5000/api/flats/${type}`)
  .then( (res) => {
  if(res?.status === 200){
    setflat(res?.data);
  }
  })
}, [])


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
          <a href="#" className="btn btn-primary">Contact Owner</a>
          </div>
          </div>
        )
      })}
    </div>
  )
}

export default Flat