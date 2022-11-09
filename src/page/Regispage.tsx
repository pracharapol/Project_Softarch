import React from "react";
import { Button } from "antd";
import "../Css/Regis.css";
import { Link } from "react-router-dom";
import picim from "../Css/Picture/Imagebglog.svg";

function Regispage() {
  return (
    <div className="Regispage">
      <div className="navbar">
        <h1 className="clh">.</h1>
      </div>
      <div className="body2">
        <div className="Regisbody">
          <h1 className="logh">REGISTER</h1>
          <form action="" className="fo">
            <label className="fnameposi" htmlFor="fname">
              Firstname
            </label>
            <br />
            {/* <br /> */}
            <input type="text" id="fname" />
            <br />
            <br />
            <label className="lnameposi" htmlFor="lname">
              Lastname
            </label>
            {/* <br /> */}
            <br />
            <input type="text" id="lname" />
            <br />
            <label className="emailposi" htmlFor="email">
              Email
            </label>
            <br />0
            <input type="text" id="email" />
            <br />
            <label className="passposi" htmlFor="pass">
              Password
            </label>
            <br />
            <input type="text" id="pass" />
            <label className="passenposi" htmlFor="passen">
              Confirm Password
            </label>
            <br />
            <input type="text" id="passen" />
            <br />
            <br />
            {/* <input
              type="checkbox"
              id="staylog"
              name="staylog"
              // value="Stay Login"
            ></input>
            <label id="staylogin" htmlFor="staylog">
              {" "}
              Stay Login
            </label> */}
            <br></br>
            <br />
            {/* <input className="summitbut" type="Submit" value="Submit"></input> */}
            <button className="summitbut">LOGIN</button>
            <div className="">
              <Link to="/Login" className="log">
                LOGIN
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

export default Regispage;
