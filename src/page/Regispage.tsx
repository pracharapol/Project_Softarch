import React, { useEffect } from "react";
import { Button } from "antd";
import "../Css/Regis.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
import picim from "../Css/Picture/Imagebglog.svg";
import axios from 'axios';
import { withSuccess } from "antd/lib/modal/confirm";



function Regispage() {

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
            if (token != null) {
                navigate('/')
            }else{

            }
            console.log(data)
        })

        .catch((error) => {
            console.error('Error:', error);
        });
}, [])






  function checkEmail(username: FormDataEntryValue | any) {
    var mail = 0;
    if (username.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
      mail += 1;
    }
    if (mail == 0) {
      alert('Invalid email')
      return false;
    }
    else {
      return true;
    }
  }

  function checkName(name: FormDataEntryValue | any) {
    var base = 0;
    if (name.match(/[a-z]+/)) {
      base += 1;
    }
    if (name.length > 20) {
      base -= 1;

    }
    if (base < 1) {
      alert('Please enter your name in lowercase. and letters from 1 to 20 characters.')
      return false;
    }


    switch (base) {
      case 0:
        return false;
      case 1:
        return true;



      default: return true
    }
  }



  function checkPassword(password: FormDataEntryValue | any) {
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






  let navigate = useNavigate();
  const handleSubmit = async (event: { preventDefault: () => void; currentTarget: HTMLFormElement | undefined; }) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const jsonData = {
      username: formData.get('username'),
      password: formData.get('password'),
      name: formData.get('name'),
      contact: formData.get('contact'),
      phone: formData.get('phone'),


    }
    if (checkPassword(jsonData.password) && checkEmail(jsonData.username) && checkName(jsonData.name)) {
      await fetch('http://localhost:3001/users/create', {
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(jsonData),
      })
      .then((response) => response.json())
      .then((data) => {
        if(data.error == "Bad Request"){
          alert('invalid')
        }else{
          alert('Register success')
          navigate('/Login')
        }
      })
    }
  };


  return (
    <div className="bgr">
      <h2 className="cr">Create Account</h2>


      <div className="bodyAccount">

        <div className="login">

          <form noValidate onSubmit={handleSubmit} name="inp">
            <div className="email1">
              <label >Email Adress</label>
            </div>
            <input className="tx1" type="email" id="username" name="username" />

            <div className="email1">
              <label >Password</label>
            </div>
            <input className="tx1" type="password" id="password" name="password" />

            <div className="email1">
              <label >name</label>
            </div>
            <input className="tx1" type="text" id="name" name="name" />

            <div className="email1">
              <label >Contact</label>
            </div>
            <input className="tx1" type="text" id="contact" name="contact" />

            <div className="email1">
              <label >Phone</label>
            </div>
            <input className="tx1" type="phone" id="phone" name="phone" />




            <br />
            <br />
            <br />

            <button className="button-save1" type="submit">

              Sign up


            </button>

          </form>
          <br />
          <div className="txs1"><a  href="/login">have an account? Sign in</a></div>
        </div>
      </div>

    </div>

  );
}

export default Regispage;
