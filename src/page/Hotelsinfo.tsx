import React from "react";
import "../Css/Hotelsinfo.css";
import picim from "../Css/Picture/Imagehoteljapan.svg";
import picim2 from "../Css/Picture/Imagehoteljapan2.svg";
import picmap from "../Css/Picture/imagemap.svg";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { Clock } from "../Component/Today";
import { ClockTommorow } from "../Component/Tommorow";
import { RealTime } from "../Component/Realtime";

function Hotelsinfo() {
  const isMobile = useMediaQuery({ query: "(max-width: 760px)" });
  const isIpad = useMediaQuery({
    query: "(min-width: 760px) and (max-width: 1248px)",
  });
  const isLargeDesktop = useMediaQuery({ query: "(min-width: 1920px)" });

  return (
    <div className="Hotelsinfo">
      <div className="bodyhotel1">
        <div>
          <Link to="/">
            <div className="logohotel"></div>
          </Link>
          <ul
            style={{
              marginBottom: "0",
              fontSize: isIpad ? "10px" : isLargeDesktop ? "18px" : "14px",
            }}
          >
            <li>
              <a href="/Hotels">Hotels</a>
            </li>
            <li>
              <a href="/Coupons">Coupons</a>
            </li>
            <li>
              <a href="/Activity">Activity</a>
            </li>

            <div>
              <li
                className="create"
                id="V"
                style={{ float: "right", textAlign: "center" }}
              >
                <a href="/Create" className="active">
                  Create-Account
                </a>
              </li>
            </div>
            <li className="sign" id="C" style={{ float: "right" }}>
              <a className="active2" href="/Login">
                Sign-in
              </a>
            </li>
          </ul>
        </div>
        {/* <div className="body3"></div> */}
      </div>
      <div className="bodyhotel2">
        <Link to="/Checkin">
          <button className="hotel2">
            <div className="checkin"></div>
            <div className="datetoday">
              <Clock />
            </div>
            <div className="Line"></div>
            <div className="checkout"></div>
            <div className="datetomorrow">
              <ClockTommorow />
            </div>
          </button>
        </Link>
        <Link to="/Hotels">
          <button className="hotel3">
            <h1
              style={{
                marginBottom: "0px",
                fontSize: isIpad ? "16px" : isLargeDesktop ? "28px" : "24px",
              }}
              className="two"
            >
              2 adults
            </h1>
            <p
              style={{
                marginBottom: "0px",
                fontSize: isIpad ? "12px" : isLargeDesktop ? "20px" : "14px",
              }}
              className="room"
            >
              1 Room
            </p>
          </button>
        </Link>
        <Link to="/Hotels">
          <button className="hotel4">
            <h1
              style={{
                marginBottom: "0px",
                fontSize: isIpad ? "16px" : isLargeDesktop ? "28px" : "24px",
              }}
              className="hotelname"
            >
              🔍 Yokohama
            </h1>
            <p
              style={{
                marginBottom: "0px",
                fontSize: isIpad ? "12px" : isLargeDesktop ? "20px" : "14px",
              }}
              className="hotelchoices"
            >
              323 choices
            </p>
          </button>
        </Link>
      </div>
      <div className="backgpicinfo">
        hi
        <div className="bodypicinfo">
          <div className="bodyleftinfo">hi</div>
          <div className="bodyrightinfo">
            <div className="bodyrightinfoOne"></div>
            <div className="bodyrightinfoTwo"></div>
            <div className="bodyrightinfoThree"></div>
            <div className="bodyrightinfoFour"></div>
          </div>
        </div>
      </div>
      <div className="bodyinforoom">he</div>
    </div>
  );
}

export default Hotelsinfo;
