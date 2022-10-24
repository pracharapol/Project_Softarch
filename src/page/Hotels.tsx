import React from "react";
import { Button } from "antd";
import "../Css/Hotels.css";
import picim from "../Css/Picture/Imagehoteljapan.svg";
import picim2 from "../Css/Picture/Imagehoteljapan2.svg";
import picmap from "../Css/Picture/imagemap.svg";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { Clock } from "../Component/Today";
import { ClockTommorow } from "../Component/Tommorow";
import { RealTime } from "../Component/Realtime";

function Hotels() {
  const isMobile = useMediaQuery({ query: "(max-width: 760px)" });
  const isIpad = useMediaQuery({
    query: "(min-width: 760px) and (max-width: 1248px)",
  });
  const isLargeDesktop = useMediaQuery({ query: "(min-width: 1920px)" });

  return (
    <div className="Hotels">
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

      <div className="bodyhotel3">
        <Link to="/map">
          <button className="mapImage">
            <img
              style={{
                width: "100%",
                height: "100%",
                position: "relative",
                backgroundSize: "cover",
              }}
              src={picmap}
              alt=""
            />
          </button>
        </Link>

        <div className="searchHoteltext">🔍 TEXT SEARCH</div>
      </div>

      <div className="bodyhotel4">
        <div className="sorthotel">
          <button className="sort" disabled>
            <p
              style={{
                marginBottom: "0px",
                fontSize: isIpad ? "12px" : isLargeDesktop ? "20px" : "14px",
              }}
            >
              SORT
            </p>
          </button>
          <button className="bestmatch">
            <p
              style={{
                marginBottom: "0px",
                fontSize: isIpad ? "12px" : isLargeDesktop ? "20px" : "14px",
              }}
            >
              BEST MATCH
            </p>
          </button>
          <button className="cheap">
            <p
              style={{
                marginBottom: "0px",
                fontSize: isIpad ? "12px" : isLargeDesktop ? "20px" : "14px",
              }}
            >
              CHEAP HOTEL
            </p>
          </button>
          <button className="near">
            <p
              style={{
                marginBottom: "0px",
                fontSize: isIpad ? "12px" : isLargeDesktop ? "20px" : "14px",
              }}
            >
              NEAR ME
            </p>
          </button>
          <button className="top">
            <p
              style={{
                marginBottom: "0px",
                fontSize: isIpad ? "12px" : isLargeDesktop ? "20px" : "14px",
              }}
            >
              TOP REVIEW
            </p>
          </button>
        </div>

        <div className="info">
          <button className="hotelImage">
            <img
              style={{
                width: "100%",
                height: "100%",
                position: "relative",
                backgroundSize: "cover",
              }}
              src={picim}
              alt=""
            />
          </button>
          <div className="nameinfo">YOKOHAMA</div>
          <div className="namelocation">Yokohama,Yokohama-0.4km to center</div>
          <div className="Linebody3"></div>
        </div>
        <div className="info">
          <button className="hotelImage">
            <img
              style={{
                width: "100%",
                height: "100%",
                position: "relative",
                backgroundSize: "cover",
              }}
              src={picim2}
              alt=""
            />
          </button>
          <div className="nameinfo">YOKOHAMA</div>
          <div className="namelocation">Yokohama,Yokohama-0.4km to center</div>
          <div className="Linebody3"></div>
        </div>
        <div className="info">
          <button className="hotelImage">
            <img
              style={{
                width: "100%",
                height: "100%",
                position: "relative",
                backgroundSize: "cover",
              }}
              src={picim}
              alt=""
            />
          </button>
          <div className="nameinfo">YOKOHAMA</div>
          <div className="namelocation">Yokohama,Yokohama-0.4km to center</div>
          <div className="Linebody3"></div>
        </div>
        <div className="info">
          <button className="hotelImage">
            <img
              style={{
                width: "100%",
                height: "100%",
                position: "relative",
                backgroundSize: "cover",
              }}
              src={picim}
              alt=""
            />
          </button>
          <div className="nameinfo">YOKOHAMA</div>
          <div className="namelocation">Yokohama,Yokohama-0.4km to center</div>
          <div className="Linebody3"></div>
        </div>
      </div>
    </div>
  );
}

export default Hotels;
