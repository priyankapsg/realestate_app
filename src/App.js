
import {BrowserRouter , Routes , Route } from 'react-router-dom'
import Login from './Component/Login'
import Register from './Component/Register'
import Home from './Component/Home'
import First from './Component/First'
import Dashboard from './Component/Dashboard';
import Users from './Component/Users';
import Forms from './Component/Forms';

function App() {
  return (
    <div>
      <BrowserRouter>
<Routes>
<Route exact path='/' element={<First/>} />
<Route exact path='/' element={<Home/>} />
<Route exact path='/login' element={<Login/>} />
<Route exact path='/signup' element={<Register/>} />
<Route exact path='/dashboard' element={<Dashboard/>} />
<Route exact path='/flats' element={<Users/>} />
<Route exact path='/form/:type' element={<Forms/>} />
</Routes>
</BrowserRouter>
    </div>
  );
}

export default App;
