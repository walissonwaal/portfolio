import React from "react";
import './Home.css'
import Avatar from '../assets/imgs/avatar.jfif'
import 'animate.css'
import './css/fonts-icones.css'
import './css/style.css'


export default props => {
    return (
        <>
            <div className="container my-sm-12 col-md-12 col-lg-12 col-xl-12">
                <img className="avatar animate__animated animate__flipInY" src={Avatar} alt="" />
                <h2 className="name animate__animated animate__fadeIn"><strong>Walisson Gomes</strong></h2>
                <h4 className="slogan animate__animated animate__fadeIn">Freelance Development</h4>
                <nav className="btn_social animate__animated animate__fadeInRight">
                       <li><a href="https://github.com/walissonwaal" target="_blank" title="github"><i className="icon icon-github"></i></a></li>
                       <li><a href="https://www.linkedin.com/in/walisson-gomes-18647b160/" target="_blank" title="linkedin"><i className="icon icon-linkedin"></i></a></li>
                       <li><a href="https://contate.me/walissongomes" target="_blank" title="whatsapp"><i className="icon icon-whatsapp"></i></a></li>
                </nav>
            </div>
        </>
    )
}