import React, { useEffect, useState } from 'react';
import "../Css/Hotels.css";
import picim from "../Css/Picture/hotel1.png";
import picim2 from "../Css/Picture/hotel2.png";
import picim3 from "../Css/Picture/hotel3.png";
import picmap from "../Css/Picture/imagemap.svg";
import { useMediaQuery } from "react-responsive";
import { Clock } from "../Component/Today";
import { ClockTommorow } from "../Component/Tommorow";
import { RealTime } from "../Component/Realtime";
import { Link, useNavigate } from 'react-router-dom';
import Greeting from '../Component/Visbl';

function Cheap() {


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
              ButtonLoggin(3)
              console.log(token)

            }
            console.log(data)
        })

        .catch((error) => {
            console.error('Error:', error);
        });
}, [])

  const [Hotelname, setHotelname] = useState([]);
  const [hinfo, hotelInfo] = useState([]);
  const [hprice, price] = useState([]);
  const [hrate, rating] = useState([0]);

  const [Hotelname1, setHotelname1] = useState([]);
  const [hinfo1, hotelInfo1] = useState([]);
  const [hprice1, price1] = useState([]);
  const [hrate1, rating1] = useState([0]);

  const [Hotelname2, setHotelname2] = useState([]);
  const [hinfo2, hotelInfo2] = useState([]);
  const [hprice2, price2] = useState([]);
  const [hrate2, rating2] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/hotelnearme', {
      method: 'GET', // or 'PUT'
    })
      .then(response => response.json())
      .then(data => {
          setHotelname(data[0].hotelName)
          hotelInfo(data[0].hotelLocation)
          price(data[0].price)
          rating(data[0].rating)

          setHotelname1(data[1].hotelName)
          hotelInfo1(data[1].hotelLocation)
          price1(data[1].price)
          rating1(data[1].rating)

          setHotelname2(data[2].hotelName)
          hotelInfo2(data[2].hotelLocation)
          price2(data[2].price)
          rating2(data[2].rating)



      })


      .catch((error) => {
        console.error('Error:', error);
      });
  }, [])


  function CheckHotel() {
    const one = document.getElementById("zero") as HTMLInputElement;

  
    if (one) {
      localStorage.removeItem('name')
      localStorage.removeItem('location')
      localStorage.removeItem('contact')

      localStorage.setItem('name', 'NovotalBangkok')
      localStorage.setItem('location', '888/8 Ladkrabang 20/2 ,Ladkrabang Road, Ladkrabang')
      localStorage.setItem('contact', '027458896')
      localStorage.setItem('price', '568')
      navigate('/PaymentInformation')
    }
    
    
}


function CheckHotel1() {
  const two = document.getElementById("one") as HTMLInputElement;
  let co = 0;


  
  if (two) {
    localStorage.removeItem('name')
    localStorage.removeItem('location')
    localStorage.removeItem('contact')

    localStorage.setItem('name', 'ESBeeResidentHotel')
    localStorage.setItem('location', '836/2 Ladkrabang  30/4 ,Ladkrabang Road, Ladkraban')
    localStorage.setItem('contact', '023147895')
    localStorage.setItem('price', '699')
    navigate('/PaymentInformation')
    console.log(localStorage.getItem('contact'))
  }
  
  
}


function CheckHotel2() {
 
  const three = document.getElementById("two") as HTMLInputElement;
  


  
  if (three) {
    localStorage.removeItem('name')
    localStorage.removeItem('location')
    localStorage.removeItem('contact')

    localStorage.setItem('name', 'AirportSweetHotel')
    localStorage.setItem('location', '1288/9 Ladkrabang  40/2, Ladkrabang Road, Ladkraba')
    localStorage.setItem('contact', '023584541')
    localStorage.setItem('price', '986')
    console.log(localStorage.getItem('contact'))
    navigate('/PaymentInformation')
}
  
}

function ButtonLoggin(x: number | undefined) {
  if(x === 1){
  return false
  }
  else{
    return true
  }
}





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
              <a href="/">Back</a>
            </li>
            <li>
              <a href="/Bill">Bill</a>
            </li>
            

            <Greeting isLoggedIn={ButtonLoggin(3)} />
          </ul>
        </div>
        {/* <div className="body3"></div> */}
      </div>
      




      <div className="bodyhotel4">
        <div className="sorthotel">
          {/* <button className="sort" disabled>
            <p
              style={{
                marginBottom: "0px",
                fontSize: isIpad ? "12px" : isLargeDesktop ? "20px" : "14px",
              }}
            >
              SORT
            </p>
          </button> */}
          
          <button className="bestmatch">
          <Link to="/Hotels" >
            <p
              style={{
                marginBottom: "0px",
                fontSize: isIpad ? "12px" : isLargeDesktop ? "20px" : "14px",
              }}
            >
              BEST MATCH
            </p>
            </Link>
          </button>
          
          
          <button className="cheap">
          <Link to="/cheap" >
            <p
              style={{
                marginBottom: "0px",
                fontSize: isIpad ? "12px" : isLargeDesktop ? "20px" : "14px",
              }}
            >
              CHEAP HOTEL
            </p>
            </Link>
          </button>
          <button className="near">
          <Link to="/Near" >
            <p
              style={{
                marginBottom: "0px",
                fontSize: isIpad ? "12px" : isLargeDesktop ? "20px" : "14px",
              }}
            >
              NEAR ME
            </p>
            </Link>
          </button>
          
        </div>
        <div className="info">
          <Link to="/Hotelsinfo">
            <button className="hotelImage">
              <img
                style={{
                  width: "100%",
                  height: "100%",
                  position: "relative",
                  backgroundSize: "cover",
                  borderRadius: "10px",
                }}
                src={picim}
                alt=""
              />
            </button>
          </Link>
          <div className="infoleft">
            <div className="nameinfo">{Hotelname}</div>
            <div className="namelocation">
            {hinfo}
            </div>
            <div className="Linebody3"></div>
          </div>
          <div className="inforight">
            <div className="review">Excellent</div>
            <div className="userReview">322 review</div>
            <div className="reviewStar">9.8</div>
            <div className="price">{hprice} Bath</div>
            <div className="extra">+FREE CANCELLATION</div>
            <button className="selectR" id='zero' onClick={CheckHotel}>SELECT ROOM</button>
          </div>
        </div> 



        <div className="info">
          <Link to="/Hotelsinfo">
            <button className="hotelImage">
              <img
                style={{
                  width: "100%",
                  height: "100%",
                  position: "relative",
                  backgroundSize: "cover",
                  borderRadius: "10px",
                }}
                src={picim2}
                alt=""
              />
            </button>
          </Link>
          <div className="infoleft">
            <div className="nameinfo">{Hotelname1}</div>
            <div className="namelocation">
            {hinfo1}
            </div>
            <div className="Linebody3"></div>
          </div>
          <div className="inforight">
            <div className="review">Excellent</div>
            <div className="userReview">322 review</div>
            <div className="reviewStar">9.3</div>
            <div className="price">{hprice1} Bath</div>
            <div className="extra">+FREE CANCELLATION</div>
            <button className="selectR" id='one' onClick={CheckHotel1}>SELECT ROOM</button>
          </div>
        </div> 


        

        



        <div className="info">
          <Link to="/Hotelsinfo">
            <button className="hotelImage">
              <img
                style={{
                  width: "100%",
                  height: "100%",
                  position: "relative",
                  backgroundSize: "cover",
                  borderRadius: "10px",
                }}
                src={picim3}
                alt=""
              />
            </button>
          </Link>
          <div className="infoleft">
            <div className="nameinfo">{Hotelname2}</div>
            <div className="namelocation">
            {hinfo2}
            </div>
            <div className="Linebody3"></div>
          </div>
          <div className="inforight">
            <div className="review">Excellent</div>
            <div className="userReview">322 review</div>
            <div className="reviewStar">9.6</div>
            <div className="price">{hprice2} Bath</div>
            <div className="extra">+FREE CANCELLATION</div>
            <button className="selectR" id='two' onClick={CheckHotel2}>SELECT ROOM</button>
          </div>
        </div> 



      </div>




      
    </div>
  );
}

export default Cheap;