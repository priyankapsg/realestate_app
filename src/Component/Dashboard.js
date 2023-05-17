import React, {useState} from 'react'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import Forms from './Forms';
import Listing from './Listing';
import {useNavigate, useParams} from 'react-router-dom';

const drawerWidth = 240;

const Dashboard = () => {

  const navigate = useNavigate();  
  const handleBack = () => {
      navigate('/');
      sessionStorage.clear();
  }

const [modal, setmodal] = useState(false);
const [modalType, setmodalType] = useState([]);

const [modal2, setmodal2] = useState(false);
const [flag, setflag] = useState(true);

const listing = () => {
  setflag(true);
  setmodal(false);
  setmodal2(false);
}

const handleForm = (type) => {
    setmodal(true);
    setmodalType(type);
    setmodal2(false);
    setflag(false);
}

const handleForm2 = () => {
    setmodal2(true);
    setmodal(false);
    setflag(false);
}

  return (
  
  
  
  <div className='header'>
<Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
            <ListItem key={'Submit Property'} disablePadding>
              <ListItemButton onClick={() => listing()}>
                <ListItemIcon>
               <InboxIcon />
                </ListItemIcon>
                <ListItemText primary={'Submit Property'} />
              </ListItemButton>
            </ListItem>
            <ListItem key={'Manage Listing'} disablePadding>
              <ListItemButton onClick={() => handleForm2()}>
                <ListItemIcon>
               <InboxIcon />
                </ListItemIcon>
                <ListItemText primary={'Manage Listing'} />
              </ListItemButton>
            </ListItem>
            <ListItem key={'Contact Details'} disablePadding>
              <ListItemButton onClick={() => handleForm2()}>
                <ListItemIcon>
               <InboxIcon />
                </ListItemIcon>
                <ListItemText primary={'Contact Details'} />
              </ListItemButton>
            </ListItem>
            <ListItem key={'View Profile'} disablePadding>
              <ListItemButton>
                <ListItemIcon>
               <InboxIcon />
                </ListItemIcon>
                <ListItemText primary={'View Profile'} />
              </ListItemButton>
            </ListItem>
            <ListItem key={'Change Password'} disablePadding>
              <ListItemButton>
                <ListItemIcon>
               <InboxIcon />
                </ListItemIcon>
                <ListItemText primary={'Change Password'} />
              </ListItemButton>
            </ListItem>
            <ListItem key={'Logout'} disablePadding>
              <ListItemButton onClick={handleBack}>
                <ListItemIcon>
               <InboxIcon />
                </ListItemIcon>
                <ListItemText primary={'Logout'} />
              </ListItemButton>
            </ListItem>
        </List>
        <Divider />
      </Drawer>
    {flag &&
     <div className="row" style={{padding:'180px 0px 180px 240px'}}>
  <div className="col-sm-6">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">SALE PROPERTY</h5>
        <p className="card-text">* Post Your Property For FREE</p>
        <p className="card-text">* Get Instant Respose</p>
        <p className="card-text">* Showcase Your Property</p>
        <button className="btn btn-primary" onClick={() => handleForm('sale')}>For Sale</button>
      </div>
    </div>
  </div>
  
  <div className="col-sm-6">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">RENT PROPERTY</h5>
        <p className="card-text">* Post Your Property For FREE</p>
        <p className="card-text">* Get Instant Respose</p>
        <p className="card-text">* Showcase Your Property</p>
        <button className="btn btn-primary" onClick={() => handleForm('rent')}>For Rent</button>
      </div>
    </div>
  </div>
  
     </div>
    }
    
    
    </Box>

{modal=== true && <Forms detail={modalType} Save={setmodal} List={setmodal2}/>}

{modal2 === true && <Listing/>}

    </div>
  )
}

export default Dashboard