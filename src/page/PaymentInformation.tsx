import React from 'react';
import { Button } from 'antd';
import '../Css/PaymentInformation.css';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

function PaymentInformation() {
    const isMobile = useMediaQuery({ query: '(max-width: 760px)' });
    const isIpad = useMediaQuery({ query: '(min-width: 760px) and (max-width: 1248px)' });
    const isLargeDesktop = useMediaQuery({ query: '(min-width: 1920px)' });

    function Checksmoke() {
        const checkBox = document.getElementById("myCheck") as HTMLInputElement;
        const checkBox2 = document.getElementById("myCheck2") as HTMLInputElement;
        var count = 1;

        if (checkBox2.checked === true) {
            count += 1;
        }
        if (checkBox.checked === true) {
            count -= 1;

        }
        console.log(count)
        if (count == 2) {
            checkBox.checked = false
            checkBox2.checked = true
        }
        if (count == 0) {
            checkBox2.checked = false
            checkBox.checked = true
        }
        if (count == 1) {
            checkBox2.checked = false
            checkBox.checked = false
        }
    }

    function Checkbed() {
        const checkBox = document.getElementById("bedCheck") as HTMLInputElement;
        const checkBox2 = document.getElementById("bedCheck2") as HTMLInputElement;
        var count = 1;

        if (checkBox2.checked === true) {
            count += 1;
        }
        if (checkBox.checked === true) {
            count -= 1;

        }
        console.log(count)
        if (count == 2) {
            checkBox.checked = false
            checkBox2.checked = true
        }
        if (count == 0) {
            checkBox2.checked = false
            checkBox.checked = true
        }
        if (count == 1) {
            checkBox2.checked = false
            checkBox.checked = false
        }
    }







    return (
        <div className="Pay">
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
            <div className='bgp3'>
                <div className='Headers'>
                <h1>กรุณากรอกข้อมูล</h1>
                </div>
                <div className='inpaa'>

                    <form noValidate name="inpa">
                        <div className='F1'>
                            <h2>ข้อมูลผู้จอง</h2>
                            <div className="profilepa">
                                <label >🧍 ชื่อ</label>
                            </div>
                            <input className="tpa" type="text" id="Fname" name="Fname" required />
                            <div className="profilepa">
                                <label >🧍 นามสกุล</label>
                            </div>
                            <input className="tpa" type="text" id="Lname" name="Lname" required />
                            <div className="profilepa">
                                <label >📩 อีเมล</label>
                            </div>
                            <input className="tpa" type="text" id="Email" name="Email" required />
                            <div className="profilepa">
                                <label >📞 เบอร์โทรศัพท์</label>
                            </div>
                            <input className="tpa" type="text" id="Phone" name="Phone" required />
                            <br />
                        </div>
                        <div className='F2'>
                            <h2>ขอบริการเพิ่มเติม</h2>

                            <h3>เลือกรูปเเบบห้องที่ต้องการ</h3>

                            <input className='smokecheck' type="checkbox" id="myCheck" onClick={Checksmoke} required />
                            <label className='smoke' htmlFor="myCheck">สูบบุหรี่ได้</label>
                            <input className='notsmokecheck' type="checkbox" id="myCheck2" onClick={Checksmoke} required />
                            <label className='notsmoke' htmlFor="myCheck2">สูบบุหรี่ไม่ได้</label>

                            <h3 style={{ marginTop: '10%' }}>เลือกรูปเเบบเตียง</h3>

                            <input className='bedcheck' type="checkbox" id="bedCheck" onClick={Checkbed} required />
                            <label className='bed' htmlFor="bedCheck">เตียงเดี่ยว</label>
                            <input className='notbedcheck' type="checkbox" id="bedCheck2" onClick={Checkbed} required />
                            <label className='notbed' htmlFor="bedCheck2">เตียงคู่</label>
                        </div>
                        <button className="button-pa">

                            Confirm

                        </button>
                    </form>
                </div>


            </div>

        </div>

    );
}

export default PaymentInformation;