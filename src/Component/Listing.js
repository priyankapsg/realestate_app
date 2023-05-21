import React, {useEffect, useState} from 'react'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './style.css';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Forms from './Forms';
import Rent from '../images/rent.png';
import Sale from '../images/sale.png';

const Listing = () => {

let Email = sessionStorage.getItem('user');    
const [flat, setflat] = useState([]);

useEffect(()  => {
  getflat();
}, [])

const getflat = () => {
  axios.get(`http://localhost:5000/app/flat/getFlat/${Email}`)
  .then( (res) => {
  if(res?.data?.statusCode === 200){
    setflat(res?.data?.data);
  }
  else if(res?.data?.statusCode === 400){
    toast.error("Something went wrong");
  }    
  })
}

const [modal, setModal] = useState({
  show: false,
  data: "",
})

const [modalForm, setModalForm] = useState(false);
const [modalFormData, setModalFormData] = useState([]);

const [formopen, setFormopen] = useState(true);

const handleEdit = (data) => {
  setModalForm(true);
  setModalFormData(data);
  setFormopen(false);
}

const handleDelete = (data) => {
setModal({
  show: true,
  data: data?._id,
});
}

const handleDeleteAPI = async (values) => {
  await axios.delete(`http://localhost:5000/app/flat/delateFlat/${values}`)
  .then( (res) => {
    if(res?.data?.statusCode === 200){
      toast.success("Property deleted successfully");
      handleClose();
      getflat();
    } 
    })
}

const theme = useTheme();
const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

const handleClose = () => {
  setModal({
    show: false,
    data: '',
  });
};

  return (
    <div className='header'>
      <ToastContainer autoClose={2000}/>
      <div style={{margin: "0px 0px 0px 100px"}}> 
      {(flat?.length > 0 && formopen)? 
      flat?.map( (data) => {
        return (
          <div className="card border-primary mb-3"  style={{width: "25%", margin: "70px 0px 0px 550px"}}>
          <img className="card-img-top" 
          src={data?.property === 'rent' ? Rent : Sale} 
          alt="Card image cap"/>
          <div className="card-body text-primary ">
          <h5 className="card-title">
         {data?.bhk} BHK Flat For {data?.property} in {data?.location} 
          </h5>
          <p className="card-text">Size : {data?.size}</p>
          <p className="card-text">Price : {data?.price}</p>
          <div className='btn_header'>
    <button onClick={() => handleEdit(data)} type="submit" className="btn btn-danger ">Edit</button>
    <button className="btn btn-danger " onClick={() => handleDelete(data)} >Delete</button>
  </div>
          </div>
          </div>
        )
      })
      : ''
    }
          </div>

    
    <Dialog
        fullScreen={fullScreen}
        open={modal.show}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Are you sure, You wanna delete this Property?"}
        </DialogTitle>
        <DialogActions>
          <Button autoFocus onClick={() => handleDeleteAPI(modal.data)}>
            Yes
          </Button>
          <Button onClick={handleClose} autoFocus>
            No
          </Button>
        </DialogActions>
      </Dialog>
    
    {modalForm === true &&
    <Forms data={modalFormData} Modal={setModalForm} Show={setFormopen}/>
    }


    </div>
  )
}

export default Listing