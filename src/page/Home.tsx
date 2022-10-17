import React from 'react';
import { Button } from "antd";
import '../Css/Home.css';
import { Link } from "react-router-dom";
import { useMediaQuery } from 'react-responsive';

function Home() {
  const isMobile = useMediaQuery({ query: '(max-width: 760px)' });
  const isIpad = useMediaQuery({ query: '(min-width: 760px) and (max-width: 1248px)' });

  return (
    <div>
      <div className='F Go'>
        <div className='body1'>
          <div>

            <ul style={{ marginBottom: '0', fontSize: isIpad ? '10px' : '14px' }}>
              <li><a href="/Hotels">Hotels</a></li>
              <li><a href="/Coupons">Coupons</a></li>
              <li><a href="Activity">Activity</a></li>

              <li className='create' style={{ float: 'right', textAlign: 'center' }}><a className="active" href="/Create">Create-Account</a></li>
              <li className='sign' style={{ float: 'right' }}><a className="active2" href="/Login">Sign-in</a></li>
            </ul>

          </div>
        </div>
        <div className='bg2'>
          <div className='HEAD'>
            <h2 style={{ fontSize: isIpad ? '28px' : '36px' }}>Enjoy Life</h2>

          </div>
        </div>
       
        <div className='bg3'>
          <div className='search' style={{ marginBottom: '2%' }}>
            <h1 style={{ marginBottom: '0', fontSize: isIpad ? '24px' : '32px' }}>Hotels, Resorts, Rooms & more</h1>
            <input style={{ fontSize: isIpad ? '12px' : '14px' }} type="text" className='myS' id="mySearch" placeholder="🔍 Search for anything" title="Type in a category"></input>
            <Link to="/Map"><ul className='M' style={{ fontSize: isIpad ? '12px' : '16px' }}>🗺️</ul></Link>
          </div>

          <div className='body2' >

            <ul style={{ marginBottom: '0' }}>
              <li style={{ float: 'left', textAlign: 'center', fontSize: isIpad ? '10px' : '14px' }}><a href="/Home">Hotels</a></li>
              <li style={{ float: 'left', textAlign: 'center', fontSize: isIpad ? '10px' : '14px' }}><a href="Cheap">Cheap Hotel</a></li>
              <li style={{ float: 'left', textAlign: 'center', fontSize: isIpad ? '10px' : '14px' }}><a href="/Near">Hotel near me</a></li>
              <li style={{ float: 'left', textAlign: 'center', fontSize: isIpad ? '10px' : '14px' }}><a href="/Long">Long trip</a></li>
              <li style={{ float: 'left', textAlign: 'center', fontSize: isIpad ? '10px' : '14px' }}><a href="/Activity">Activities</a></li>
            </ul>

          </div>
          <div className='body3' >

          </div>
          <div className='body4' >
          <div className='Line'></div>
          </div>
          <div className='body5' >

          </div>

        </div>
        <div >
          <button className='Bsearch'>Search</button>
        </div>




      </div>
    </div>

  );
}

export default Home;
