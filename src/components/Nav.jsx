import React from "react";
import './Nav.css'
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

export default props => {
    let activeStyle = {
        color: "var(--secondary-color)"
    }
    let activeClassName = activeStyle

    return (

        <>
            <nav className="menu-area">
                <NavLink className="menu-item" style={({ isActive }) => isActive ? activeStyle : undefined} to="/">Início</NavLink>
                <NavLink className="menu-item" style={({ isActive }) => isActive ? activeClassName : undefined} to="/sobre">Sobre mim</NavLink>
                <NavLink className="menu-item" style={({ isActive }) => isActive ? activeClassName : undefined} to="/portfolio">Projetos</NavLink>
                <a className="menu-item" target="_blank" href="https://drive.google.com/file/d/1jOr9AVaSemo1dGz1dE2AP9G3nJZFgNKa/view?usp=sharing">Resumo</a>
            </nav>
            {/* <div className="menu-toggle side-toggle me-3">
                <img className="menu-toggle" src={Toggle}/>
            </div> */}
            <nav className="navbar navbar-dark bg-dark fixed-top">
                <div className="container-fluid">
                    <div className="logo-toggle">
                        <Link to="/" className="logo-link">
                            <h1>Walisson Gomes</h1>
                        </Link>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Menu</h5>
                            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li className="nav-item">
                                    <Link to='/' className="nav-link active" aria-current="page" href="#">Início</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/sobre' className="nav-link active" data-bs-dismiss="offcanvas"  aria-current="page" href="#">Sobre mim</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/portfolio' className="nav-link active" aria-current="page" href="#">Projetos</Link>
                                </li>
                                <li className="nav-item">
                                    <a  className="nav-link active" target="_blank" href="https://drive.google.com/file/d/1jOr9AVaSemo1dGz1dE2AP9G3nJZFgNKa/view?usp=sharing">Resumo</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}