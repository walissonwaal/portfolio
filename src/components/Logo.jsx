import React from "react";
import './Logo.css'
import { Link } from 'react-router-dom'

export default props => {
    return (
        <div className="logo">
            <Link to="/" className="logo-link">
                <h1>Walisson Gomes</h1>
            </Link>
        </div>
    )
}