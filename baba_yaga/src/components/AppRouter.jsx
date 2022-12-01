import React from "react";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Contacts from "../pages/Contacts/Contacts";
import Review from "../pages/Review/Review";
import Services from "../pages/Services";
import {Routes, Route} from "react-router-dom"

const AppRouter = () => {
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/reviews" element={<Review />} />
            <Route path="/services" element={<Services />} />
        </Routes>
    )
}
export default AppRouter;