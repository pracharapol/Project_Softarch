import React from 'react';
import { Button } from "antd";
import '../Css/Go.css';
import { Link } from "react-router-dom";
import { useMediaQuery } from 'react-responsive';

function Go() {
  const isMobile = useMediaQuery({ query: '(max-width: 760px)' });
  const isIpad = useMediaQuery({ query: '(min-width: 760px) and (max-width: 1248px)' });

  return (
    <div className='Go bg'>
      <body >
      <div className='menu'>
        <div>eeeeeee</div>
        <div>Hi</div>
        <div>Home</div>
      </div>
      <Link to='/Login'><button style={{backgroundColor: isMobile ? 'red' : isIpad ? 'aquamarine': 'yellow'}} className='Click'>Click me</button></Link>
      </body>
    </div>
    
  );
}

export default Go;
