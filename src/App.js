
import {Routes, Route } from 'react-router-dom'
import Login from './Component/Login'
import Register from './Component/Register'
import Home from './Component/Home'
import Dashboard from './Component/Dashboard';
import Flat from './Component/Flat';
import Contact from './Component/Contact';

function App() {
  return (
    <div>
<Routes>

<Route exact path='/' element={<Home/>} />
<Route path='login' element={<Login/>} />
<Route path='register' element={<Register/>} />
<Route path='flats/:type' element={<Flat/>} />
<Route path='dashboard' element={<Dashboard/>}>
     <Route path='contact' element={<Contact/>} />
</Route>

</Routes>
    </div>
  );
}

export default App;
