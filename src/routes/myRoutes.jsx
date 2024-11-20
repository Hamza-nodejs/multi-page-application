import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Pricing from "../pages/Pricing";
import Contact from "../pages/Contact";
import PopulationData from "../components/PopulatedData";
import JsonApi from "../components/JsonApi";
import JsonDetail from "../components/JsonDetail";

export default function myRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/api" element={<PopulationData />} />
            <Route path="/json" element={<JsonApi />} />
            <Route path="/json/:postid" element={<JsonDetail />} />
        </Routes>
    );
}
