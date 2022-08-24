import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import React from 'react'
import Home from "../pages/Home";
import About from "../pages/About";

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route index element={<About />} />
                <Route path="home" element={<Home />} />
            </Routes>
        </Router>
    )
}

export default AppRoutes
