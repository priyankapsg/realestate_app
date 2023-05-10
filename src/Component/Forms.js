import React from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useFormik} from 'formik';
import {object, string, number} from 'yup';
import './style.css';

const Forms = () => {

let { type } = useParams();

const navigate = useNavigate();    

const handlePost = async (values) => {
  await axios.post(`http://localhost:5000/api/flat`, values)
  .then( (res) => {
    if(res?.data?.acknowledged === true){
     handleReset();
      toast.success('Property created successfully');
      setTimeout(() => {
          navigate('/dashboard')
      }, 2000); 
   }
  })
}

const saleValues = {
  location:'',
  size:'',
  price:'',
  negotiable:'',
  age:'',
  type:'',
  advance:'',
  rent:'',
  pet:'',
  bhk:'',
  parking:'',
  description:'',
  property: type === 'sale' ? 'sale' : 'rent',
  email: sessionStorage.getItem('user') ? sessionStorage.getItem('user') : ''
}

const saleSchema = object().shape({
  location:string().required("Please enter the location"),
  size: number().positive().integer().required("Please enter the size"),
  price: number().positive().integer().required("Please enter the price amount"),
  negotiable: type === 'sale' ? string().required("Please choose any one option") : '',
  age: type === 'sale' ? string().required("Please choose any one option") : '',
  type: type === 'sale' ? string().required("Please choose any one option") : '',
  advance: type === 'rent' ? number().positive().integer().required("Please enter a description") : '',
  rent: type === 'rent' ? number().positive().integer().required("Please enter a description") : '',
  pet: type === 'rent' ? string().required("Please choose any one option") : '',
  bhk:string().required("Please choose any one option"),
  parking:string().required("Please choose any one option"),
  description:string().required("Please enter a description")
})

const {values, errors, touched, setFieldValue, handleBlur, handleChange, handleSubmit, handleReset} = useFormik({
  initialValues: saleValues,
  validationSchema: saleSchema,
  onSubmit : handlePost,
})


const handleLogin = () => {
  navigate('/login');
}

  return (
    <div className='header'>
    <ToastContainer autoClose={2000}/>
  <form onSubmit={handleSubmit} autoComplete='off'>
  <div className="card border-primary mb-3"  style={{width: "25%", margin: "70px 0px 0px 550px"}}>
<div className="card-body text-primary">
<h5 className="card-title"> 
<label htmlFor="staticEmail" style={{margin:'20px 0px'}}>Location</label>
<div className="col-sm-20">
  <input
  value={values.location}
  onChange={handleChange}
  onBlur={handleBlur} 
  id="location"  
  type="location"  
  className="form-control" 
  placeholder='Enter the location of the Property'
  autoComplete='off'
 />
 {errors.location && touched.location && <p className='error'>{errors.location}</p>}
</div>


<label htmlFor="staticEmail" style={{margin:'20px 0px'}}>Size (sq.ft)</label>
<div className="col-sm-20">
  <input
  value={values.size}
  onChange={handleChange}
  onBlur={handleBlur} 
  id="size"  
  type="size"  
  className="form-control" 
  placeholder='Enter the Size of the Property'
  autoComplete='off'
 />
 {errors.size && touched.size && <p className='error'>{errors.size}</p>}
</div>

<label htmlFor="staticEmail" style={{margin:'20px 0px'}}>Price (rs)</label>
<div className="col-sm-20">
  <input
  value={values.price}
  onChange={handleChange}
  onBlur={handleBlur} 
  id="price"  
  type="price"  
  className="form-control" 
  placeholder='Enter the Price of the Property'
  autoComplete='off'
 />
 {errors.price && touched.price && <p className='error'>{errors.price}</p>}
</div>


{type === 'sale' ?
(
<>
<label htmlFor="staticEmail" style={{margin:'20px 0px'}}>Negotiable</label>
<div className="col-sm-20">
<select 
value={values.negotiable}
id="negotiable"
onBlur={handleBlur}  
className="form-control" 
onChange={(e)=> setFieldValue("negotiable",e.target.value)}
>
  <option selected>Select Type</option>
  <option value={'true'}>Yes</option>
  <option value={'false'}>No</option>
</select>
 {errors.negotiable && touched.negotiable && <p className='error'>{errors.negotiable}</p>}
</div>

<label htmlFor="staticEmail" style={{margin:'20px 0px'}}>Age Of Property</label>
<div className="col-sm-20">
<select 
value={values.age}
id="age"
onBlur={handleBlur}  
className="form-control" 
onChange={(e)=> setFieldValue("age",e.target.value)}
>
  <option selected>Select Type</option>
  <option value={'under'}>Under Construction</option>
  <option value={'1'}>Less than 1 Year</option>
  <option value={'3'}>1-3 Years</option>
  <option value={'5'}>3-5 Years</option>
  <option value={'10'}>5-10 Years</option>
  <option value={'More'}>More than 10 Years</option>
</select>
 {errors.age && touched.age && <p className='error'>{errors.age}</p>}
</div>
<label htmlFor="staticEmail" style={{margin:'20px 0px'}}>Sale Type</label>
<div className="col-sm-20">
<select 
value={values.type}
id="type"
onBlur={handleBlur}  
className="form-control" 
onChange={(e)=> setFieldValue("type",e.target.value)}
>
  <option selected>Select Type</option>
  <option value={'sale'}>Resale</option>
  <option value={'new'}>New</option>
</select>
 {errors.type && touched.type && <p className='error'>{errors.type}</p>}
</div>
</>
) : (
<>
<label htmlFor="inputPassword" style={{margin:'20px 0px'}}>Monthly Rent</label>
<div className="col-sm-20">
  <input
  value={values.rent}
  onChange={handleChange}
  onBlur={handleBlur} 
  id="rent" 
  type="rent" 
  className="form-control" 
  placeholder='Enter your rent number'
  autoComplete='off'
  />
 {errors.rent && touched.rent && <p className='error'>{errors.rent}</p>}
</div>

<label htmlFor="inputPassword" style={{margin:'20px 0px'}}>Advance / Security Deposit</label>
<div className="col-sm-20">
  <input
  value={values.advance}
  onChange={handleChange}
  onBlur={handleBlur} 
  id="advance" 
  type="advance" 
  className="form-control" 
  placeholder='Enter your advance number'
  autoComplete='off'
  />
 {errors.advance && touched.advance && <p className='error'>{errors.advance}</p>}
</div>



<label htmlFor="staticEmail" style={{margin:'20px 0px'}}>Pet Allowed</label>
<div className="col-sm-20">
<select 
value={values.pet}
id="pet"
onBlur={handleBlur}  
className="form-control" 
onChange={(e)=> setFieldValue("pet",e.target.value)}
>
  <option selected>Select Type</option>
  <option value={'true'}>Yes</option>
  <option value={'false'}>No</option>
</select>
 {errors.pet && touched.pet && <p className='error'>{errors.pet}</p>}
</div>
</>
)
}

<label htmlFor="staticEmail" style={{margin:'20px 0px'}}>BHK</label>
<div className="col-sm-20">
<select 
value={values.bhk}
id="bhk"
onBlur={handleBlur}  
className="form-control" 
onChange={(e)=> setFieldValue("bhk",e.target.value)}
>
  <option selected>Select Type</option>
  <option value={'1'}>1 BHK</option>
  <option value={'2'}>2 BHK</option>
  <option value={'3'}>3 BHK</option>
  <option value={'4'}>4 BHK</option>
</select>
 {errors.bhk && touched.bhk && <p className='error'>{errors.bhk}</p>}
</div>


<label htmlFor="staticEmail" style={{margin:'20px 0px'}}>Parking</label>
<div className="col-sm-20">
<select 
value={values.parking}
id="parking"
onBlur={handleBlur}  
className="form-control" 
onChange={(e)=> setFieldValue("parking",e.target.value)}
>
  <option selected>Select Type</option>
  <option value={'two'}>Two Wheeler</option>
  <option value={'four'}>Four Wheeler</option>
  <option value={'both'}>Both</option>
</select>
 {errors.parking && touched.parking && <p className='error'>{errors.parking}</p>}
</div>
<label htmlFor="inputPassword" style={{margin:'20px 0px'}}>Description</label>
<div className="col-sm-20">
  <input
  value={values.description}
  onChange={handleChange}
  onBlur={handleBlur} 
  id="description" 
  type="description" 
  className="form-control" 
  placeholder='Enter your description number'
  autoComplete='off'
  />
 {errors.description && touched.description && <p className='error'>{errors.description}</p>}
</div>
<div className='btn'>
<button type="submit" className="btn btn-danger " style={{marginLeft:'70px'}}>Save & Continue</button>
</div>
</h5>
</div>
</div>
  </form>
</div>
  )
}

export default Forms