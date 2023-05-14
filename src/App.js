
import {BrowserRouter , Routes , Route } from 'react-router-dom'
import Login from './Component/Login'
import Register from './Component/Register'
import Home from './Component/Home'
import Dashboard from './Component/Dashboard';
import Flat from './Component/Flat';
import Header from './Component/Header';
import Footer from './Component/Footer';

function App() {
  return (
    <div>
      <BrowserRouter>
<Header/>  
<Routes>
<Route exact path='/' element={<Home/>} />
<Route exact path='/login' element={<Login/>} />
<Route exact path='/register' element={<Register/>} />
<Route exact path='/flats/:type' element={<Flat/>} />
<Route exact path='/dashboard' element={<Dashboard/>} />
</Routes>
<Footer/>
</BrowserRouter>
    </div>
  );
}

export default App;
