import React, { useEffect, useState } from 'react';
import { Button } from 'antd';
import '../Css/Bill.css';
import { Link, useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { Col, Container, Row } from '../Component/StyledGrid';

function Bill() {




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
  
              }
          })
  
          .catch((error) => {
              console.error('Error:', error);
          });
  }, [])

  const [Fname, setFname] = useState("");
  const [Lname, setLname] = useState("");
  const [Email, setEmail] = useState("");
  const [Phone, setPhone] = useState("");

  useEffect(() => {
    const token = localStorage.getItem('token')
    fetch('http://localhost:3001/users/booking', {
        method: 'GET', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
    })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            const i = data.booking.length - 1
            console.log(data.booking.length)
            setFname(data.booking[i].firstName)
            setLname(data.booking[i].lastName)
            setEmail(data.booking[i].email)
            setPhone(data.booking[i].phone)
        })

        .catch((error) => {
            console.error('Error:', error);
        });
}, [])


  




    const isMobile = useMediaQuery({ query: '(max-width: 760px)' });
    const isIpad = useMediaQuery({ query: '(min-width: 760px) and (max-width: 1248px)' });
    const isLargeDesktop = useMediaQuery({ query: '(min-width: 1920px)' });

    const [SM, setSM] = useState("");
    const [BD, setBD] = useState("");


   useEffect(() => {
    const smoke = localStorage.getItem('smoke')
    const bed = localStorage.getItem('bed')
    if(smoke != null){
     setSM(smoke)
    }
    if(bed != null){
        setBD(bed)
       }
}, [])
    return (
        <div className="Bill">
            <div className='body1'>
                <div>
                    <Link to="/">
                        <div className="logoP">
                        </div>
                    </Link>
                    <ul style={{ marginBottom: '0', fontSize: isIpad ? '10px' : isLargeDesktop ? '18px' : '14px' }}>
                        <li><a href="/" >Home</a></li>
                        <li><a href="/Hotels">Hotels</a></li>
                        <li><a href="/Bill">Bill</a></li>

                    </ul>

                </div>

            </div>

            <div className='Billbg'>
                <h1>Motella</h1>
                <div className='Billname'>
                    <h2>Booker</h2>
                    <h3>Name: {Fname} &nbsp; {Lname}</h3>
                    <h3>E-mail: {Email}</h3>
                    <h3>Phone: {Phone}</h3>
                </div>

                <div className='BillHotelname'>
                    <h2>Hotel</h2>
                    <h3>Name: Tata bubu</h3>
                    <h3>Location: India</h3>
                    <h3>Phone: 089254xxxx</h3>
                </div>
                <div className='tablebill'>
                    <table>
                        <tr>
                            <th className='th1'>QTY</th>
                            <th className='th2'>Description</th>
                            <th className='th3'>Rooms</th>
                            <th className='th4'>Days</th>
                            <th className='th5'>Amount</th>
                        </tr>
                        <tr>
                            <th className='th1'>1</th>
                            <th className='th2'>
                                <h2 style={{ fontSize: '16px', textAlign: 'left', marginLeft: '5%' }}>
                                    Hotel Name
                                </h2>
                                <h3 style={{ fontSize: '14px', textAlign: 'left', marginLeft: '10%' }}>
                                - &nbsp; {SM}
                                </h3>
                                <h3 style={{ fontSize: '14px', textAlign: 'left', marginLeft: '10%' }}>
                                - &nbsp; {BD}
                                </h3>
                            </th>
                            <th className='th3'>2 Rooms</th>
                            <th className='th4'>2 Days</th>
                            <th className='th5'>
                                <h2 style={{ fontSize: '14px'}}>649 bath</h2>
                                <h2 style={{ fontSize: '14px'}}>Vax 7% = 45.43 bath</h2>
                            </th>
                        </tr>

                    </table>
                    <table style={{ marginTop: '0.2%' }}>
                        <tr className='tr1'>
                            <th className='thE1'>Total</th>

                            <th className='thE2'>684.43 bath</th>
                        </tr>
                    </table>

                    <div className='BillEnd'>
                    <h2>Term & Conditions</h2>
                    <h3>Payment on the day of check-in</h3>
                    <h3>Please make check payable to : Counter</h3>
                </div>
                </div>
            </div>




        </div>
    );
}

export default Bill;