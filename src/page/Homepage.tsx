import React from 'react';
import '../Css/Homepage.css';
import { Link } from 'react-router-dom';

function Homepage() {
  return (
    <div className="Homepage">
      <Link to='/'><button className='Back'>Back</button></Link>
    </div>
  );
}

export default Homepage;
