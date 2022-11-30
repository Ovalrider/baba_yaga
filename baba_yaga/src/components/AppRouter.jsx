import React from "react";
import Home from "../pages/Home/Home";
import About from "../pages/About";
import Contacts from "../pages/Contacts";
import Review from "../pages/Review";
import Services from "../pages/Services";
import {Routes, Route} from "react-router-dom"

const AppRouter = () => {
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/review" element={<Review />} />
            <Route path="/services" element={<Services />} />
        </Routes>
    )
}
export default AppRouter;