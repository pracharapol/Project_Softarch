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
        <div className="bodypicinfo">
          <div className="bodyleftinfo">
            {" "}
            <img className="picbodyleftinfo" style={{}} src={picim} alt="" />
          </div>
          <div className="bodyrightinfo">
            <div className="bodyrightinfoOne">
              <img
                className="picbodyrightinfoOne"
                style={{}}
                src={picim}
                alt=""
              />
            </div>
            <div className="bodyrightinfoTwo">
              <img
                className="picbodyrightinfoTwo"
                style={{}}
                src={picim2}
                alt=""
              />
            </div>
            <div className="bodyrightinfoThree">
              <img
                className="picbodyrightinfoThree"
                style={{}}
                src={picim2}
                alt=""
              />
            </div>
            <div className="bodyrightinfoFour">
              <img
                className="picbodyrightinfoFour"
                style={{}}
                src={picmap}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bodyinforoom">
        <h1 className="hotelnamebodyinforoom">
          Hotel Balian Resort Tomei Kawasaki L.C.{" "}
        </h1>
        <h3 className="infobodyinforoom">
          Conveniently situated in the Kawasaki part of Yokohama, this property
          puts you close to attractions and interesting dining options. This
          3-star property is packed with in-house facilities to improve the
          quality and joy of your stay.
        </h3>
      </div>
      <div className="selectroominfo">
        <h1>Select your room</h1>
      </div>
      <div className="anoterRoom">
        <h1>Beds Japanese Style</h1>
        <div className="bedinforoom">
          <div className="firstbedinforoom">
            {" "}
            <img
              className="picbodyrightinfoTwo"
              style={{}}
              src={picim2}
              alt=""
            />
            <div className="picbedinforoom"></div>
          </div>
          <div className="secondbedinforoom">
            <div className="widjedinfo">
              Free Breakfast <br /> Free WiFi
            </div>
          </div>
          <div className="threebedinforoom">
            <div className="priceinfo">880 Bath</div>
            <div className="btnbooking">
              <button>Book now</button>
            </div>
          </div>
          {/* <div className="space">hhee</div> */}
        </div>
      </div>
      {/* <div className="space">hhee</div> */}
    </div>
  );
}

export default Hotelsinfo;
