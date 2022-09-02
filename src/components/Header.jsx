import React from "react";
import './Header.css'
import Logo from "./Logo";
import Nav from "./Nav";

export default props => {
    return (
        <>
            <header className="header">
                <Logo />
                <Nav />
            </header>
        </>
    )
}