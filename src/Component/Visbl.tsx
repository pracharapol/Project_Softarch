import { useState } from "react";
import React, { Component } from 'react'; 

import { useMediaQuery } from 'react-responsive';

function UserGreeting(props: any) {

  return <li className='create' id='V' style={{ float: 'right', textAlign: 'center'}}><a href="/Regis" className="active">Create-Account</a></li>;
        
}
function UserGreeting2(props: any) {
  return <li className='sign' id='C' style={{ float: 'right' }}><a className="active2" href="/Login">Sign-in</a></li>;
        
}

function GuestGreeting(props: any) {
  
  return <li className='profile' id='C' style={{ float: 'right'}}><a className="active3" href="/Profile">Profile</a></li>;
}



export default function Greeting(props: { isLoggedIn: any; }) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <GuestGreeting />;
    
  }
  return <><UserGreeting /><UserGreeting2 /></>;
  
}







// export const Vs = () => { 
//     const maybeMyElement = document.getElementById('V') as HTMLElement;
//     const maybeMyElement1 = document.getElementById('C') as HTMLElement;
//         //รอ token ตัวแปร visib จะเปลี่ยนเป็นค่า token โดยใช้ string
//     const visib = '';
//     const token = '';
//     if(visib === token){
//       maybeMyElement.style.visibility = 'visible';
//       maybeMyElement1.style.visibility ='visible';

//     }
//     else{
//         maybeMyElement.style.visibility = 'hidden';
//         maybeMyElement1.style.visibility ='hidden';
//     }
    
//   }
//   export default Vs;