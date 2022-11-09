<<<<<<< HEAD
import React from "react";
import Home from "./page/Home";
import Create from "./page/Create";
import Homepage from "./page/Homepage";
import Loginpage from "./page/Login";
import Hotels from "./page/Hotels";
import Activity from "./page/Activity";
import Cheap from "./page/Cheap";
import Long from "./page/Long";
import Near from "./page/Near";
import Hotelsinfo from "./page/Hotelsinfo";
import Regispage from "./page/Regispage";
=======
import React from 'react';
import Home from './page/Home';
import Create from './page/Create';
import Homepage from './page/Homepage';
import Loginpage from './page/Login';
import Hotels from './page/Hotels';
import Activity from './page/Activity';
import Cheap from './page/Cheap';
import Long from './page/Long';
import Near from './page/Near';
import Map from './page/Map';
import Profile from './page/Profile';
<<<<<<< HEAD
import PaymentInformation from './page/PaymentInformation';
=======
>>>>>>> 0b7df64d6efef4440043c0002f41918db5683abd
>>>>>>> 72daf84f85918d1b1aa18e1c75f0f9e5620107b8
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

function App() {
<<<<<<< HEAD
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Create" element={<Create />} />
      <Route path="/Login" element={<Loginpage />} />
      <Route path="/Homepage" element={<Homepage />} />
      <Route path="/Hotels" element={<Hotels />} />
      <Route path="/Activity" element={<Activity />} />
      <Route path="/Cheap" element={<Cheap />} />
      <Route path="/Long" element={<Long />} />
      <Route path="/Near" element={<Near />} />
      <Route path="Hotelsinfo" element={<Hotelsinfo />} />
      <Route path="Regis" element={<Regispage />} />
    </Routes>
  );
=======
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Create" element={<Create />} />
            <Route path="/Login" element={<Loginpage />} />
            <Route path="/Homepage" element={<Homepage />} />
            <Route path="/Hotels" element={<Hotels />} />
            <Route path="/Activity" element={<Activity />} />
            <Route path="/Cheap" element={<Cheap />} />
            <Route path="/Long" element={<Long />} />
            <Route path="/Near" element={<Near />} />
            <Route path="/Map" element={<Map />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/PaymentInformation" element={<PaymentInformation />} />
            
        </Routes>
    );
>>>>>>> 0b7df64d6efef4440043c0002f41918db5683abd
}
export default App;
