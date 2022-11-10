import React from 'react';
import { Button } from 'antd';
import '../Css/Bill.css';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { Col, Container, Row } from '../Component/StyledGrid';

function Bill() {


    const isMobile = useMediaQuery({ query: '(max-width: 760px)' });
    const isIpad = useMediaQuery({ query: '(min-width: 760px) and (max-width: 1248px)' });
    const isLargeDesktop = useMediaQuery({ query: '(min-width: 1920px)' });

    return (
        <div className="Bill">
            <div className='body1'>
                <div>
                    <Link to="/">
                        <div className="logoP">
                        </div>
                    </Link>
                    <ul style={{ marginBottom: '0', fontSize: isIpad ? '10px' : isLargeDesktop ? '18px' : '14px' }}>
                        <li><a href="/Hotels" >Hotels</a></li>
                        <li><a href="/Coupons">Coupons</a></li>
                        <li><a href="/Bill">Bill</a></li>

                    </ul>

                </div>

            </div>

            <div className='Billbg'>
                <h1>Motella</h1>
                <div className='Billname'>
                    <h2>Booker</h2>
                    <h3>Name: Pracharapol Jaruvanawat</h3>
                    <h3>E-mail: 63010630@kmitl.ac.th</h3>
                    <h3>Phone: 0623865222</h3>
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
                                    - No smoke
                                </h3>
                                <h3 style={{ fontSize: '14px', textAlign: 'left', marginLeft: '10%' }}>
                                    - Twinbed
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