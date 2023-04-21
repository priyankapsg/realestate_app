import React from 'react';
import { useNavigate } from "react-router-dom";

function HomePage() {

const navigate =  useNavigate();

const handleRoute = () => {
navigate('./signup')
}


  return (
    <div>
      <h1>Welcome to realestate application</h1><table><tr>
      <td><button
      onClick={handleRoute}
      >BUYER</button><br></br></td>
      <td><button
            onClick={handleRoute}
      >SELLER</button><br></br></td>
      <td><button
            onClick={handleRoute}
      >RENTAL</button><br></br></td>
       </tr></table>
    </div>
     
  );
}

export default HomePage;