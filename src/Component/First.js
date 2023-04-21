import React from 'react';
import { useNavigate } from "react-router-dom";

function HomePage() {

const navigate =  useNavigate();

const handleRoute = () => {
navigate('./signup')
}


  return (
    <div>
      <h1>Welcome to realestate application</h1>
      <button
      onClick={handleRoute}
      >BUYER</button><br></br>
      <button
            onClick={handleRoute}
      >SELLER</button><br></br>
      <button
            onClick={handleRoute}
      >RENTAL</button><br></br>
    </div>
  );
}

export default HomePage;