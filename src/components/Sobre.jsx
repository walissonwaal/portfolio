import React from "react";
import Wallpaper from '../assets/imgs/wallpaper.jpg'
import './Sobre.css'
import 'animate.css'

import Javascript from '../assets/imgs/javascript.png'
import NNode from '../assets/imgs/nodejs.png'
import Python from '../assets/imgs/python.png'
import RReact from '../assets/imgs/react.png'
import 'animate.css'

export default props => {
    return (
        <>
            <div className="container-fluid cnt-geral">
                <div className="row">
                    <div className="wallpaper-area col-lg-4">
                        <img className="wallpaper animate__animated animate__fadeIn" src={Wallpaper} alt="" />
                    </div>
                    <div className="col-lg-8">
                        <div className="container-fluid sobre-container animate__animated animate__fadeInRight  ">
                            <div className="text-area">
                                <h1 className="title">Sobre mim</h1>
                                <p>Me chamo Walisson Gomes, sou um estudante ambicioso que busca um diploma de 
                                    Ciência da Computação, ansioso para contribuir com conhecimento/desenvolvimento 
                                    em Engenharia de Software ou Desenvolvimento Web/Mobile Fullstack. Tenho 
                                    conhecimento em Python, NodeJs, Javascript, ReactJS e os bancos MongoDB e MySQL. 
                                    Também sei o básico das linguágens C# e PHP. Sou um profissional adaptável e orientado 
                                    a uma forte ética de trabalho e motivação para prosperar em um ambiente baseado em equipe 
                                    ou individualmente motivado. Por favor, sinta-se à vontade para entrar em contato comigo pelo 
                                    Whatsapp, Linkedin ou e-mail.
                                </p>
                                <div className="icons-lang">
                                    <img className="img-item" src={Javascript} alt="" />
                                    <img className="img-item" src={RReact} alt="" />
                                    <img className="img-item" src={NNode} alt="" />
                                    <img className="img-item" src={Python} alt="" />
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
