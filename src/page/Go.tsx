import React from 'react';
import '../Css/Go.css';
import { Link } from "react-router-dom";

function Go() {
  return (
    <div className='Go bg'>
      <body >
      <div className='menu'>
        <div>eeeeeee</div>
        <div>Hi</div>
        <div>Home</div>
      </div>
      <Link to='/Home'><button className='Click'>Click me</button></Link>
      </body>
    </div>
    
  );
}

export default Go;
