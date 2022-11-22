import React, { useEffect, useState } from 'react';
import { Button } from 'antd';
import '../Css/Profile.css';
import { Link, useNavigate } from 'react-router-dom';
import { Col, Container, Row } from '../Component/StyledGrid';
import picmap from "../Css/Picture/avatar.png";



function Profile() {

  const [Fullname, setFullname] = useState("");
  const [Email, setEmail] = useState("");
  const [Phone, setPhone] = useState("");

  useEffect(() => {
    const token = localStorage.getItem('token')
    fetch('http://localhost:3001/users/profile/' + token, {
        method: 'GET', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },

    })
        .then(response => response.json())
        .then(data => {
            setFullname(data.name)
            setEmail(data.username)
            setPhone(data.phone)
        })

        .catch((error) => {
            console.error('Error:', error);
        });
}, [])


  let navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem('token')
    fetch('http://localhost:3001/api/auth/testDecodeHeaderToken', {
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
                console.log(token)
            }
            console.log(data)
        })

        .catch((error) => {
            console.error('Error:', error);
        });
}, [])


function checkNewpass(newPassword: any, newPassword1: any) {
  if (newPassword == newPassword1) {
      return true;
  }
  else {
      alert('Your passwords do not match.')
  }

}

function checkPassword1(newPassword: any) {
  var strength = 0;
  if (newPassword.match(/[a-z]+/)) {
      strength += 1;
  }
  if (newPassword.match(/[A-Z]+/)) {
      strength += 1;
  }
  if (newPassword.match(/[0-9]+/)) {
      strength += 1;
  }
  if (newPassword.match(/[$@#&!]+/)) {
      strength += 1;
  }
  if (newPassword.length < 8) {

      strength -= 4;
  }
  if (strength < 3) {
      alert('Use 8 more characters with a mix of letters, capital letters, numbers & symbols')
      return false;
  }

  switch (strength) {
      case 0:
          return false;
      case 1:
          return false;
      case 2:
          return false;
      case 3:
          return true;
      case 4:
          return true;
      case 5:
          return true;
      default: return true
  }
}


function checkPassword(password: any) {
  var strength = 0;
  if (password.match(/[a-z]+/)) {
      strength += 1;
  }
  if (password.match(/[A-Z]+/)) {
      strength += 1;
  }
  if (password.match(/[0-9]+/)) {
      strength += 1;
  }
  if (password.match(/[$@#&!]+/)) {
      strength += 1;
  }
  if (password.length < 8) {

      strength -= 4;
  }
  if (strength < 3) {
      alert('Use 8 more characters with a mix of letters, capital letters, numbers & symbols')
      return false;
  }

  switch (strength) {
      case 0:
          return false;
      case 1:
          return false;
      case 2:
          return false;
      case 3:
          return true;
      case 4:
          return true;
      case 5:
          return true;
      default: return true
  }
}



const handleSubmit = (event: { preventDefault: () => void; currentTarget: HTMLFormElement | undefined; }) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);

  const jsonData = {

      oldPassword: data.get('oldPassword'),
      newPassword: data.get('newPassword'),
      newPassword1: data.get('newPassword1'),
  }
  if (checkPassword1(jsonData.newPassword) && checkNewpass(jsonData.newPassword, jsonData.newPassword1)) {
      const token = localStorage.getItem('token')
      fetch('http://localhost:3001/users/reset', {
          method: 'PUT', // or 'PUT'
          headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + token
          },
          body:JSON.stringify({token, newPassword: jsonData.newPassword, oldPassword: jsonData.oldPassword})
      })
          .then(response => response.json())
          .then(data => {
              if(data.success == false){
                  alert('Your password is Incorrect')
              }else{
              alert('Change password success')
              localStorage.removeItem('token')
              navigate('/Login')
          }
          })
          .catch((error) => {
              console.error('Error:', error);
          });
  }

};


const handleSubmitname = (event: { preventDefault: () => void; currentTarget: HTMLFormElement | undefined; }) => {
  event.preventDefault();
  const data1 = new FormData(event.currentTarget);

  const jsonData1 = {

      name: data1.get('name'),
      phone: data1.get('phone'),
  }
      const token = localStorage.getItem('token')
      fetch('http://localhost:3001/users/resetname', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
          },
          body:JSON.stringify({name: jsonData1.name, phone: jsonData1.phone})
      })
      
          .then(response => response.json())
          .then(data => {
            if(data.success == true){
                alert('correct')
                window.location.reload();
            }else{
              alert('incorrect')
              
            }
        })
          .catch((error) => {
              console.error('Error:', error);
          });
  

};








  return (
    <div className='BgP'>
      <div className='Picture'>
        <div className='Profilepicture'>

          <img className='Avatar'
            style={{
              width: "100%",
              height: "100%",
              borderRadius: '100%',
              position: "relative",
              backgroundSize: "cover",
              backgroundPosition: 'center',
            }}
            src={picmap}
            alt=""
          />

        </div>
        <div className='TextProfile'>
          <h2>Name : {Fullname}</h2>
          <h2>E-mail : {Email}</h2>
          <h2>Phone : {Phone}</h2>
          <Link to="/"><button className='BH'>Back</button></Link>
        </div>
      </div>
      <div className='Setting'>
        

          <h2 className="SC">Profile Setting</h2>

          <form noValidate name="inf" onSubmit={handleSubmitname}>
            <div className="profileS">
              <label >Name</label>
            </div>
            <input className="tp" type="text" id="name" name="name" required />
  
            <div className="profileS">
              <label >Phone</label>
            </div>
            <input className="tp" type="text" id="phone" name="phone" required />
            <br />


            <button className="button-save" type="submit">

              Submit

            </button>
          </form>


          <h2 className="SC">Password Setting</h2>
        <div className="SCT">

          <form noValidate name="inp" onSubmit={handleSubmit}>
            
            <div className="passwordS">
              <label >Your Password</label>
            </div>
            <input className="ts" type="password" id="oldPassword" name="oldPassword" required />
            <div className="passwordS">
              <label >New Password</label>
            </div>
            <input className="ts" type="password" id="newPassword" name="newPassword" required />
            <div className="passwordS">
              <label >New Password again</label>
            </div>
            <input className="ts" type="password" id="newPassword1" name="newPassword1" required />
            <br />


            <button className="button-save" type="submit">

              Submit

            </button>




          </form>

        </div>

      </div>
    </div>

  );
}

export default Profile;