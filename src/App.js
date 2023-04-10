
import './App.css';
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Login from './Component/Login'
import Register from './Component/Register'
import Home from './Component/Home'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <BrowserRouter>
<Routes>
<Route exact path='/' element={<Home/>} />
<Route exact path='/login' element={<Login/>} />
<Route exact path='/signup' element={<Register/>} />
</Routes>
</BrowserRouter>
      </header>
    </div>
  );
}

export default App;
