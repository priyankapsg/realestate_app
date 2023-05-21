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
import { Link, useLocation , useNavigate } from 'react-router-dom';
import Rent from '../images/rent_n.png';
import Sale from '../images/sale_n.png';
import AddHomeWorkIcon from '@mui/icons-material/AddHomeWork';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import DisplaySettingsIcon from '@mui/icons-material/DisplaySettings';
import PortraitIcon from '@mui/icons-material/Portrait';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const drawerWidth = 320;

const Dashboard = () => {

const navigate = useNavigate();

const [modal, setmodal] = useState(false);
const [modalType, setmodalType] = useState([]);

const [modal2, setmodal2] = useState(false);
const [flag, setflag] = useState(true);
const [contact, setContact] = useState([]);
const [contactTable, setContactTable] = useState(false);


let email = sessionStorage.getItem('user');
let Ownername = sessionStorage.getItem('name');

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
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


const listing = () => {
  setflag(true);
  setmodal(false);
  setmodal2(false);
  setContactTable(false);
}

const handleForm = (type) => {
    setmodal(true);
    setmodalType(type);
    setmodal2(false);
    setflag(false);
    setContactTable(false);
}

const handleForm2 = () => {
    setmodal2(true);
    setmodal(false);
    setflag(false);
    setContactTable(false);
}

const handleLogout = () => {
  navigate('/');
  sessionStorage.clear();
}


const handleContact = () => {
    setmodal(false);
    setmodal2(false);
    setflag(false);
    setContactTable(true);
}

  return (
  
  
  
  <div className='header'>
<Box sx={{ display: 'flex' }}>
      <CssBaseline/>
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
       <Toolbar>
          <AccountCircleIcon
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </AccountCircleIcon>
          Hello, PRIYANKA
        </Toolbar>
        <Divider  />
        <List>
            <ListItem key={'Submit Property'} disablePadding>
              <ListItemButton onClick={() => listing()}>
                <ListItemIcon>
               <AddHomeWorkIcon />
                </ListItemIcon>
                <ListItemText style={{fontSize:'25px'}} primary={'Submit Property'} />
              </ListItemButton>
            </ListItem>
            <ListItem key={'Manage Listing'} disablePadding>
              <ListItemButton onClick={() => handleForm2()}>
                <ListItemIcon>
               <FactCheckIcon />
                </ListItemIcon>
                <ListItemText style={{fontSize:'25px'}} primary={'Manage Listing'} />
              </ListItemButton>
            </ListItem>
            <ListItem key={'Contact Details'} disablePadding>
            <ListItemButton onClick={() => handleContact()}>
                <ListItemIcon >
               <DisplaySettingsIcon />
                </ListItemIcon>
                <ListItemText style={{fontSize:'25px'}} primary={'Contact Details'} />
              </ListItemButton>
            </ListItem>
            <ListItem key={'View Profile'} disablePadding>
              <ListItemButton>
                <ListItemIcon>
               <PortraitIcon />
                </ListItemIcon>
                <ListItemText style={{fontSize:'25px'}} primary={'View Profile'} />
              </ListItemButton>
            </ListItem>
            {/* <ListItem key={'Change Password'} disablePadding>
              <ListItemButton>
                <ListItemIcon>
               <InboxIcon />
                </ListItemIcon>
                <ListItemText primary={'Change Password'} />
              </ListItemButton>
            </ListItem> */}
            <ListItem key={'Logout'} disablePadding>
              <ListItemButton  onClick={handleLogout}>
                <ListItemIcon>
               <LogoutIcon />
                </ListItemIcon>
                <ListItemText primary={'Logout'} />
              </ListItemButton>
            </ListItem>
        </List>
        <Divider />
      </Drawer>
    {flag &&
     <div style={{
      padding: "261px 0px 270px 240px",
      display: "flex",
      gap: "50px"  
      }}>
    <div>
     <a onClick={() => handleForm('sale')} >
     <img src={Sale} alt="Card image cap" width="300px"/>
      </a> 
    </div>
  
    <div>
      <a onClick={() => handleForm('rent')}>
    <img src={Rent} alt="Card image cap" width="300px"/>
      </a>
  </div>  
     </div>
    }

   {contactTable &&
   <div style={{margin:"100px 250px 443px 250px"}}>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Name</StyledTableCell>
            <StyledTableCell align="center">Email</StyledTableCell>
            <StyledTableCell align="center">Mobile number</StyledTableCell>
            <StyledTableCell align="center">Flat</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {contact?.length > 0 && 
           contact.map((row) => (
            <StyledTableRow key={row._id}>
              <StyledTableCell align="center">{row.name}</StyledTableCell>
              <StyledTableCell align="center">{row.email}</StyledTableCell>
              <StyledTableCell align="center">{row.mobile}</StyledTableCell>
              <StyledTableCell align="center">{row.common[0]?.bhk} BHK Flat in {row.common[0]?.location}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
   } 

    </Box>



{modal=== true && <Forms detail={modalType} Save={setmodal} List={setmodal2}/>}

{modal2 === true && <Listing/>}

</div>
  )
}

export default Dashboard