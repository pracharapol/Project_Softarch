import React, { useEffect } from 'react';
import { Button } from 'antd';
import '../Css/PaymentInformation.css';
import { Link, useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

function PaymentInformation() {

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




  const handleSubmit = (event: { preventDefault: () => void; currentTarget: HTMLFormElement | undefined; }) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
  
    const jsonData = {
  
        firstname: data.get('Fname'),
        lastname: data.get('Lname'),
        phone: data.get('Phone'),
        email: data.get('Email'),
    }
    if (Checksmoke() && Checkbed()) {
        const token = localStorage.getItem('token')
        fetch('http://localhost:3001/users/booking', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
            body:JSON.stringify({ firstName: jsonData.firstname, lastName: jsonData.lastname, email: jsonData.email, phone: jsonData.phone})
        })
            .then(response => response.json())
            .then(data => {
                if(data.success == false){
                    alert('Your password is Incorrect')
                }else{
                alert('Bill success')
                navigate('/Bill')
            }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
  
  };










    const isMobile = useMediaQuery({ query: '(max-width: 760px)' });
    const isIpad = useMediaQuery({ query: '(min-width: 760px) and (max-width: 1248px)' });
    const isLargeDesktop = useMediaQuery({ query: '(min-width: 1920px)' });

    function Checksmoke() {
        const checkBox = document.getElementById("myCheck") as HTMLInputElement;
        const checkBox2 = document.getElementById("myCheck2") as HTMLInputElement;
        var count = 1;
        const notfound = 'notfound' ;
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
            console.log(checkBox2.value)
            localStorage.setItem('smoke', checkBox2.value)
            return true
        }
        if (count == 0) {
            checkBox2.checked = false
            checkBox.checked = true
            localStorage.setItem('smoke', checkBox.value)
            console.log(checkBox.value)
            return true
        }
        if (count == 1) {
            checkBox2.checked = false
            checkBox.checked = false
            localStorage.setItem('smoke', notfound)
            return false
        }
    }

    function Checkbed() {
        const checkBox = document.getElementById("bedCheck") as HTMLInputElement;
        const checkBox2 = document.getElementById("bedCheck2") as HTMLInputElement;
        var count = 1;
        const notfound = 'notfound' ;
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
            localStorage.setItem('bed', checkBox2.value)
            return true
        }
        if (count == 0) {
            checkBox2.checked = false
            checkBox.checked = true
            localStorage.setItem('bed', checkBox.value)
            return true
        }
        if (count == 1) {
            checkBox2.checked = false
            checkBox.checked = false
            localStorage.setItem('bed', notfound)
            return false
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
                        <li><a href="/" >Home</a></li>
                        <li><a href="/Bill">Bill</a></li>
                        <li><a href="/Hotels">Hotels</a></li>

                    </ul>

                </div>

            </div>
            <div className='bgp3'>
                <div className='Headers'>
                <h1>กรุณากรอกข้อมูล</h1>
                </div>
                <div className='inpaa'>

                    <form noValidate name="inpa" onSubmit={handleSubmit}>
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

                            <input className='smokecheck' type="checkbox" id="myCheck" name="cansmoke" value= "Can smoke" onClick={Checksmoke} required />
                            <label className='smoke' htmlFor="myCheck">สูบบุหรี่ได้</label>
                            <input className='notsmokecheck' type="checkbox" id="myCheck2" name="cannotsmoke" value= "Can't smoke" onClick={Checksmoke} required />
                            <label className='notsmoke' htmlFor="myCheck2">สูบบุหรี่ไม่ได้</label>

                            <h3 style={{ marginTop: '10%' }}>เลือกรูปเเบบเตียง</h3>

                            <input className='bedcheck' type="checkbox" id="bedCheck" name="bed" value= "Single bed" onClick={Checkbed} required />
                            <label className='bed' htmlFor="bedCheck">เตียงเดี่ยว</label>
                            <input className='notbedcheck' type="checkbox" id="bedCheck2" name="beds"  value= "Twin beds" onClick={Checkbed} required />
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