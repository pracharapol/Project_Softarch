<<<<<<< HEAD

import Hotelsinfo from "./page/Hotelsinfo";
import Regispage from "./page/Regispage";
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
import PaymentInformation from './page/PaymentInformation';

=======
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
import Map from "./page/Map";
import Profile from "./page/Profile";
import Hotelsinfo from "./page/Hotelsinfo";
import Regispage from "./page/Regispage";
>>>>>>> 2c57d168b0d49bea444fee4a820660df0108eac7
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

function App() {
<<<<<<< HEAD

=======
>>>>>>> 2c57d168b0d49bea444fee4a820660df0108eac7
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
<<<<<<< HEAD
      <Route path="/PaymentInformation" element={<PaymentInformation />} />
=======
>>>>>>> 2c57d168b0d49bea444fee4a820660df0108eac7
      <Route path="Hotelsinfo" element={<Hotelsinfo />} />
      <Route path="Regis" element={<Regispage />} />

    </Routes>
  );
}
export default App;
