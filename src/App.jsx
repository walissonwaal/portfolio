import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer'
import { BrowserRouter } from "react-router-dom";
import Routes from './components/Routes';


function App() {
  return (
    <>
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-12">
          <div className='app'>
            <BrowserRouter>
              <Header />
              <Routes />
              <Footer />
            </BrowserRouter>
          </div>

        </div>
      </div>

    </>

  );
}

export default App;
