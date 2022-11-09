import React from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import picim from "../Css/Picture/Imagebglog.svg";
import "../Css/Login.css";
function Login() {
  return (
    <div className="Create">
      <div className="navbar">
        <h1 className="clh">.</h1>
      </div>
      <div className="bodyoflogin">
        <div className="loginbody">
          <h1 className="logh">LOGIN</h1>
          <form action="" className="fo">
            {/* <br /> */}
            <h3 className="forse">
              For security, please sign in to access your information
            </h3>
            <label className="emailposi" htmlFor="email">
              Email
            </label>
            <br />
            <input type="text" id="email" />
            <br />
            <label className="passposi" htmlFor="pass">
              Password
            </label>
            <br />
            <input type="text" id="pass" />
            <br />
            <br />
            <input
              type="checkbox"
              id="staylog"
              name="staylog"
              // value="Stay Login"
            ></input>
            <label id="staylogin" htmlFor="staylog">
              {" "}
              Stay Login
            </label>
            <br></br>
            <br />
            {/* <input className="summitbut" type="Submit" value="Submit"></input> */}
            <button className="summitbut">LOGIN</button>
            <div className="">
              <Link to="/Regis" className="crAcc">
                Create Account
              </Link>
            </div>
          </form>
        </div>
        <div className="picbody">
          <img
            className="pic"
            style={
              {
                // width: "100%",
                // height: "100%",
                // position: "relative",
                // backgroundSize: "cover",
              }
            }
            src={picim}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Login;
