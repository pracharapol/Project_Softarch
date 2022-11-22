import React, { useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import "../Css/Login.css";
function Login() {

  let navigate = useNavigate();
  const handleSubmit = async (event: { preventDefault: () => void; currentTarget: HTMLFormElement | undefined; }) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const jsonData ={
        username: data.get('username'),
        password: data.get('password'),
    }
    await fetch('http://localhost:3001/auth/login', {
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(jsonData),
        
      })
      .then((response) => response.json())
      .then((data) => {
        if(data.message == "Unauthorized"){
          alert('invalid email or password')
        }else{
          alert('Login success')
          localStorage.setItem('token', data.jwtToken)
          navigate('/')
        }
      })


      .catch((err) => {
        console.log(err);
       });
           
  };

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







  return (
    <div className="bgr">
      <h2 className="cr">Login</h2>


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

        
            <br />
            <br />
            <br />

            <button className="button-save1" type="submit">

              Sign in


            </button>

          </form>
          <br />
          <div className="txs1"><a  href="/Regis">Don't have an account? Sign up</a></div>
        </div>
      </div>

    </div>

  );
}

export default Login;
