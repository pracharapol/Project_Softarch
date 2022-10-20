import React from 'react';
import { useEffect, useState } from "react";

export const Vs = () => { 
    const maybeMyElement = document.getElementById('V') as HTMLElement;
    const maybeMyElement1 = document.getElementById('C') as HTMLElement;
        //รอ token ตัวแปร visib จะเปลี่ยนเป็นค่า token โดยใช้ string
    const visib = '';
    const token = '';
    if(visib === token){
      maybeMyElement.style.visibility = 'visible';
      maybeMyElement1.style.visibility ='visible';

    }
    else{
        maybeMyElement.style.visibility = 'hidden';
        maybeMyElement1.style.visibility ='hidden';
    }
    
  }
  export default Vs;