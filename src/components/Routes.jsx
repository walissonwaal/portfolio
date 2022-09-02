import React from "react";
import {Route, Routes} from 'react-router-dom'
import Home from "../home/Home";
import Portfolio from "./Portfolio";
import Sobre from "./Sobre";

export default props => {
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="sobre" element={<Sobre />} />
            <Route path="portfolio" element={<Portfolio />} />
        </Routes>
    )
}