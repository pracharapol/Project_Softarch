import React from 'react';
import { Button } from 'antd';
import '../Css/Profile.css';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from '../Component/StyledGrid';

import picmap from "../Css/Picture/avatar.png";

function Profile() {

  // function checkNewpass(newPassword, password2) {
  //   if (newPassword == password2) {
  //     return true;
  //   }
  //   else {
  //     alert('Your passwords do not match.')
  //   }

  // }

  // function checkPassword1(newPassword) {
  //   var strength = 0;
  //   if (newPassword.match(/[a-z]+/)) {
  //     strength += 1;
  //   }
  //   if (newPassword.match(/[A-Z]+/)) {
  //     strength += 1;
  //   }
  //   if (newPassword.match(/[0-9]+/)) {
  //     strength += 1;
  //   }
  //   if (newPassword.match(/[$@#&!]+/)) {
  //     strength += 1;
  //   }
  //   if (newPassword.length < 8) {

  //     strength -= 4;
  //   }
  //   if (strength < 3) {
  //     alert('Use 8 more characters with a mix of letters, capital letters, numbers & symbols')
  //     return false;
  //   }

  //   switch (strength) {
  //     case 0:
  //       return false;
  //     case 1:
  //       return false;
  //     case 2:
  //       return false;
  //     case 3:
  //       return true;
  //     case 4:
  //       return true;
  //     case 5:
  //       return true;
  //     default: return true
  //   }
  // }


  // function checkPassword(password) {
  //   var strength = 0;
  //   if (password.match(/[a-z]+/)) {
  //     strength += 1;
  //   }
  //   if (password.match(/[A-Z]+/)) {
  //     strength += 1;
  //   }
  //   if (password.match(/[0-9]+/)) {
  //     strength += 1;
  //   }
  //   if (password.match(/[$@#&!]+/)) {
  //     strength += 1;
  //   }
  //   if (password.length < 8) {

  //     strength -= 4;
  //   }
  //   if (strength < 3) {
  //     alert('Use 8 more characters with a mix of letters, capital letters, numbers & symbols')
  //     return false;
  //   }

  //   switch (strength) {
  //     case 0:
  //       return false;
  //     case 1:
  //       return false;
  //     case 2:
  //       return false;
  //     case 3:
  //       return true;
  //     case 4:
  //       return true;
  //     case 5:
  //       return true;
  //     default: return true
  //   }
  // }


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
          <h2>Name : Pracharapol Jaruvanawat</h2>
          <h2>E-mail : 63010630@kmitl.ac.th</h2>
          <h2>Phone : 0623865222</h2>
          <Link to="/"><button className='BH'>Back</button></Link>
        </div>
      </div>
      <div className='Setting'>
        

          <h2 className="SC">Profile Setting</h2>

          <form noValidate name="inf">
            <div className="profileS">
              <label >Firstname</label>
            </div>
            <input className="tp" type="text" id="Fname" name="Fname" required />
            <div className="profileS">
              <label >Lastname</label>
            </div>
            <input className="tp" type="text" id="Lname" name="Lname" required />
            <div className="profileS">
              <label >Phone</label>
            </div>
            <input className="tp" type="text" id="Phone" name="Phone" required />
            <br />


            <button className="button-save" type="submit">

              Submit

            </button>




          </form>
          <h2 className="SC">Password Setting</h2>
        <div className="SCT">

          <form noValidate name="inp">
            <div className="passwordS">
              <label >Password</label>
            </div>
            <input className="ts" type="password" id="password" name="password" required />
            <div className="passwordS">
              <label >New Password</label>
            </div>
            <input className="ts" type="password" id="newPassword" name="newPassword" required />
            <div className="passwordS">
              <label >New Password again</label>
            </div>
            <input className="ts" type="password" id="password2" name="password2" required />
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