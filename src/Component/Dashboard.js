import React, {useState, useEffect} from 'react'
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
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Forms from './Forms';
import Listing from './Listing';
import axios from 'axios';
import { Link, useLocation } from 'react-router-dom';

const drawerWidth = 240;

const Dashboard = () => {

const DD = useLocation();

console.log(DD);

const [modal, setmodal] = useState(false);
const [modalType, setmodalType] = useState([]);

const [modal2, setmodal2] = useState(false);
const [flag, setflag] = useState(true);
const [contact, setContact] = useState([]);

let email = sessionStorage.getItem('user');

useEffect(()  => {
  axios.get(`http://localhost:5000/app/contact/getContact/${email}`)
 .then( (res) => {
 if(res?.data?.statusCode === 200){
  setContact(res?.data?.data);
 }
 })
}, [])


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


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
              
            <Link to="/dashboard/contact">
            <ListItemButton>
                <ListItemIcon>
               <InboxIcon />
                </ListItemIcon>
                <ListItemText primary={'Contact Details'} />
              </ListItemButton>
            </Link>
       

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
    
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="right">Name</StyledTableCell>
            <StyledTableCell align="right">Email</StyledTableCell>
            <StyledTableCell align="right">Mobile number</StyledTableCell>
            <StyledTableCell align="right">Flat</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {contact?.length > 0 && 
           contact.map((row) => (
            <StyledTableRow key={row._id}>
              <StyledTableCell align="right">{row.name}</StyledTableCell>
              <StyledTableCell align="right">{row.email}</StyledTableCell>
              <StyledTableCell align="right">{row.mobile}</StyledTableCell>
              <StyledTableCell align="right">{row.common?.bhk} Flat in {row.common?.location}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    </Box>

{modal=== true && <Forms detail={modalType} Save={setmodal} List={setmodal2}/>}

{modal2 === true && <Listing/>}
{/* <Outlet /> */}
    </div>
  )
}

export default Dashboard