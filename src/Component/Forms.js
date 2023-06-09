import React from 'react'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useFormik} from 'formik';
import {object, string, number} from 'yup';
// import './style.css';

const Forms = ({detail, data, Show, Modal, Save, List}) => {

let type = detail;

const handlePost = async (values) => {
  await axios.post(`http://localhost:5000/app/flat/createFlat`, values)
  .then( (res) => {
    if(res?.data?.statusCode === 200){
     toast.success('Property created successfully');
     handleReset();
     setTimeout(() => {
       Save(false);
       List(true);
     }, 2000);
   }
  })
}

const handlePut = async (values) => {
  await axios.put(`http://localhost:5000/app/flat/updateFlat/${values?._id}`, values)
  .then( (res) => {
    if(res?.data?.statusCode === 200){
    handleReset();
    Show(true);
    Modal(false);
    toast.success('Property update successfully');
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
const EditsaleValues = {
  _id : data? data._id : '',
  location:data?  data.location : '',
  size: data? data.size : '',
  price: data? data.price : '',
  negotiable: data? data.negotiable : '',
  age: data? data.age : '',
  type: data?  data.type : '',
  advance:data?  data.advance : '',
  rent: data? data.rent : '',
  pet:data?  data.pet : '',
  bhk: data?  data.bhk : '',
  parking: data? data.parking : '',
  description:data?  data.description : '',
  property:data?  data.property : '',
  email: data? data.email  : ''
}

const saleSchema = object().shape({
  location:string().required("Please enter the location"),
  size: number().positive().integer().required("Please enter the size"),
  price: number().positive().integer().required("Please enter the price amount"),
  negotiable: (type === 'sale' || data?.property === 'sale') ? string().required("Please choose any one option") : '',
  age: (type === 'sale' || data?.property === 'sale') ? string().required("Please choose any one option") : '',
  type: (type === 'sale' || data?.property === 'sale') ? string().required("Please choose any one option") : '',
  advance: (type === 'rent' || data?.property === 'rent') ? number().positive().integer().required("Please enter a description") : '',
  rent: (type === 'rent' || data?.property === 'rent') ? number().positive().integer().required("Please enter a description") : '',
  pet: (type === 'rent' || data?.property === 'rent') ? string().required("Please choose any one option") : '',
  bhk:string().required("Please choose any one option"),
  parking:string().required("Please choose any one option"),
  description:string().required("Please enter a description")
})

const {values, errors, touched, setFieldValue, handleBlur, handleChange, handleSubmit, handleReset} = useFormik({
  initialValues: data? EditsaleValues : saleValues,
  validationSchema: saleSchema,
  onSubmit : data? handlePut : handlePost,
})


  return (
    <div className='header'>
    <ToastContainer autoClose={2000}/>
  <form onSubmit={handleSubmit} autoComplete='off'>
  <div className="card border-primary mb-3"  style={{width: "30%", margin: "70px 0px 0px 625px"}}>
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


{(type === 'sale' || data?.property === 'sale') ?
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