import React from 'react';
import { Button } from 'antd';
import '../Css/Homepage.css';
import { Link } from 'react-router-dom';

function Homepage2() {
  return (
    <div className="Homepage">
    
      <Button className = 'Back' type="primary" danger>
        <Link to="/">Back</Link>
      </Button>
    </div>
  );
}

export default Homepage2;
