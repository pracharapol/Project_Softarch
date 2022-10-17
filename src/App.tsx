import React from 'react';
import Home from './page/Home';
import Homepage from './page/Homepage';
import Loginpage from './page/Login';
import {
    BrowserRouter, Link, Route, Routes, useLocation,
} from 'react-router-dom';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Homepage" element={<Homepage />} />
            <Route path="/Login" element={<Loginpage />} />
        </Routes>
    );
}
export default App;