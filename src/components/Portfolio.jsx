import React from "react";
import './Portfolio.css'
import Crud from '../assets/imgs/crud.gif'
import Signin from '../assets/imgs/signin.gif'
import LandingPage from '../assets/imgs/landing-page.gif'
import Orgs from '../assets/imgs/orgs-cesta.gif'
import emDesenvolvimento from '../assets/imgs/em-desenvolvimento.png'

export default props => {
    return (
        <>
            <div className="container-fluid proj mt-5">
                <div className="row mb-4">
                    <div className="col-sm-12 col-md-6 col-lg-4 item-portfolio">
                        <div className="card">
                            <h5><strong>Sistema de cadastros ReactJS</strong></h5>
                            <div className="img-area animate__animated animate__pulse">
                                <a href="https://frontend-crud-react-js.vercel.app" target="_blank" rel="noopener noreferrer" alt="View">
                                    <img src={Crud} alt="Sistema de cadastros" />
                                </a>
                            </div>
                            <div class="blockquote">
                                Clique na <cite title="Source Title"><strong>imagem</strong></cite> acima para visualizar
                            </div>
                            <p className="pgf">
                                Projeto desenvolvido para fins de aprendizado,
                                colocando em prática o estudo de tecnologias como:
                                <strong>ReactJS, Routes, Componentes Funcionais e de
                                    Classes com estado, Bootstrap, Axios, HTML5, CSS3, </strong>dentre outras tecnologias.
                            </p>
                            <div className="links">
                                <a className="btn-links" href="https://github.com/walissonwaal/crudReactJs" rel="noopener noreferrer" target="_blank">Github</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4 item-portfolio">
                        <div className="card">
                            <h5><strong>Landing Page</strong></h5>
                            <div className="img-area animate__animated animate__pulse">
                                <a href="https://landing-page-sigma-nine.vercel.app/" target="_blank" rel="noopener noreferrer">
                                    <img src={LandingPage} alt="Landing Page" />
                                </a>
                            </div>
                            <div class="blockquote">
                                Clique na <cite title="Source Title"><strong>imagem</strong></cite> acima para visualizar
                            </div>
                            <p className="pgf">
                                Projeto simples, desenvolvido em <strong>HTML5</strong> e <strong>CSS3</strong>.
                                <br />
                                As landing pages são as páginas por onde os usuários acessam o site de sua empresa. Elas são essenciais pois possuem uma taxa de conversão maior em comparação às outras páginas de seu site.
                            </p>
                            <div className="links">
                                <a className="btn-links" href="https://github.com/walissonwaal/landingPage" rel="noopener noreferrer" target="_blank">Github</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4 item-portfolio">
                        <div className="card">
                            <h5><strong>Sign in</strong></h5>
                            <div className="img-area animate__animated animate__pulse">
                                <a href="https://sign-in-brown.vercel.app/" target="_blank" rel="noopener noreferrer">
                                    <img src={Signin} alt="Sistema de cadastro e login" />
                                </a>
                            </div>
                            <div class="blockquote">
                                Clique na <cite title="Source Title"><strong>imagem</strong></cite> acima para visualizar
                            </div>
                            <p className="pgf">
                                Sistema de cadastro e login com o Frontend desenvolvido em <strong>ReactJs</strong>.
                                O Backend ainda está em desenvolvimemnto. <span>Para saber mais, acesse o repositório no Github.</span>
                            </p>
                            <div className="links">
                                <a className="btn-links" href="https://github.com/walissonwaal/sistemaDeCadastroELogin" rel="noopener noreferrer" target="_blank">Github</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mb-5">
                    <div className="col-sm-12 col-md-6 col-lg-4 item-portfolio">
                        <div className="card">
                            <h5><strong>E-commerce Frontend - React Native</strong></h5>
                            <div className="img-area animate__animated animate__pulse">
                                <img src={Orgs} alt="E-commerce React Native" />
                            </div>

                            <p className="pgf">
                                Aplicativo móvel acadêmico desenvolvido para aprendizado de conceitos importantes do React Native.
                                Para saber mais, acesse o repositório no Github.
                            </p>
                            <div className="links">
                                <a className="btn-links" href="https://github.com/walissonwaal/orgs-cesta" rel="noopener noreferrer" target="_blank">Github</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4 item-portfolio">
                        <div className="card">
                            <h5><strong>Em desenvolvimento</strong></h5>
                            <div className="img-area-desenvolvimento animate__animated animate__pulse">
                                <img src={emDesenvolvimento} alt="Aplicativo de barbearia" />
                            </div>

                            <p className="pgf">
                                Aplicativo móvel em React Native para controle de agendamentos de uma barbearia.
                            </p>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}