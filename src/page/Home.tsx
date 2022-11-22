import React from 'react';
import { Button } from "antd";
import '../Css/Home.css';
import { Link, useNavigate } from "react-router-dom";
import { useMediaQuery } from 'react-responsive';
import { useEffect, useState } from "react";
import { getByTestId, render } from '@testing-library/react';
import ReactDOM from 'react-dom/client';
import Greeting from '../Component/Visbl';
import { Clock } from '../Component/Today';
import { ClockTommorow } from '../Component/Tommorow';
import { RealTime } from '../Component/Realtime';



function Home() {
  const isMobile = useMediaQuery({ query: '(max-width: 760px)' });
  const isIpad = useMediaQuery({ query: '(min-width: 760px) and (max-width: 1248px)' });
  const isLargeDesktop = useMediaQuery({ query: '(min-width: 1920px)' });

  //Return Visibility token manage on Visibl Component  
  // useEffect(() => {
  //   Visibl();
  // }, []);
  // useEffect will Render manage for function การเรียกทำงานฟังก์ชันนั้นๆ
  // รอ token เพื่อปรับฟังก์ชัน Visibl component.

  function ButtonLoggin(x: number | undefined) {
    if(x === 1){
    return false
    }
    else{
      return true
    }
  }


  
  let navigate = useNavigate();
  
  useEffect(() => {
    const token = localStorage.getItem('token')
    fetch('http://localhost:3001/auth/testDecodeHeaderToken', {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify(token),
    })
        .then(response => response.json())
        .then(data => {
            if (token === null) {
                localStorage.removeItem('token')
                navigate('/Login')
            }else{
              ButtonLoggin(3)
              console.log(token)

            }
            console.log(data)
        })

        .catch((error) => {
            console.error('Error:', error);
        });
}, [])


const handleLogout = (event: { preventDefault: () => void; }) => {
  event.preventDefault();
  localStorage.removeItem('token')
  navigate('/Login')

}




  return (

    <div>

      <div className='F Go' >

        <div className='body1'>
          <div>
            <Link to="/">
              <div className="logoh">
              </div>
            </Link>
            <ul style={{ marginBottom: '0', fontSize: isIpad ? '10px' : isLargeDesktop ? '18px' : '14px'}}>
              <li><a href="/Hotels" >Hotels</a></li>
              <li><a href="/Bill">Bill</a></li>
              <li className='Logout' id='C' style={{ float: 'right' }} onClick ={handleLogout}><a className="active3">Logout</a></li>;
              <Greeting isLoggedIn={ButtonLoggin(3)} />
              
              
            </ul>
            
          </div>
          
        </div>
        <div className='bg2'>
          <div className='HEAD'>
            <h2 style={{ fontSize: isIpad ? '28px' : isLargeDesktop ? '44px' : '36px' }}>Enjoy Life</h2>

          </div>
        </div>

        <div className='bg3'>
          <div className='search' style={{ marginBottom: '2%' }}>
            <h1 style={{ marginBottom: '0', fontSize: isIpad ? '24px' : isLargeDesktop ? '40px' : '32px' }}>Hotels, Resorts, Rooms & more</h1>
            

          </div>

          <div className='body20' >

            <ul style={{ marginBottom: '0' }}>
              <li style={{ float: 'left', textAlign: 'center', fontSize: isIpad ? '10px' : isLargeDesktop ? '18px' : '14px' }}><a href="/Hotels">Hotels</a></li>
              <li style={{ float: 'left', textAlign: 'center', fontSize: isIpad ? '10px' : isLargeDesktop ? '18px' : '14px' }}><a href="Cheap">Cheap Hotel</a></li>
              <li style={{ float: 'left', textAlign: 'center', fontSize: isIpad ? '10px' : isLargeDesktop ? '18px' : '14px' }}><a href="/Near">Hotel near me</a></li>

            </ul>

          </div>

          <div className='body30' >
          <input style={{ fontSize: isIpad ? '12px' : isLargeDesktop ? '16px' : '20px' }} type="text" className='myS' id="mySearch" placeholder="🔍 Search for anything" title="Type in a category"></input>
          </div>


          <Link to="/Checkin">
            <button className='body4' >
              <div className='checkin'></div>
              <div className='datetoday'><Clock /></div>
              <div className='Line'></div>
              <div className='checkout'></div>
              <div className='datetomorrow'><ClockTommorow /></div>
            </button>
          </Link>
          <Link to="/Hotels">
            <button className='body5' >
              <h1 style={{ marginBottom: '0px', fontSize: isIpad ? '16px' : isLargeDesktop ? '28px' : '24px' }} className='two'>2 adults</h1>
              <p style={{ marginBottom: '0px', fontSize: isIpad ? '12px' : isLargeDesktop ? '20px' : '14px' }} className='room'>1 Room</p>
            </button>
          </Link>

          <div className='realtime'><RealTime /></div>
        </div>

        <div >

          <button className='Bsearch'>Search</button>
        </div>




      </div>
    </div>

  );

}
export default Home;
