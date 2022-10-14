import React from 'react';
import Go from './page/Go';
import Homepage from './page/Homepage';
import Loginpage from './page/Login';
import {
    BrowserRouter, Link, Route, Routes, useLocation,
} from 'react-router-dom';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Go />} />
            <Route path="/Home" element={<Homepage />} />
            <Route path="/Login" element={<Loginpage />} />
        </Routes>
    );
}
export default App;