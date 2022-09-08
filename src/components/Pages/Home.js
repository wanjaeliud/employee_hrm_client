import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/Home.css'

function Home() {
  return (
      <div className="homepage-container">
        <div>
          <div className="homepage-items">
            <h1 className="home-head">Welcome</h1>
            <p className="home-hp">Recruitors </p>
            <p className="home-p">And choose a desired job that suits you</p>
            <p className="home-p">Add your Organisation</p>
            <p className="home-p">Click to add your Organisation</p>
            <Link className="btn btn-secondary home-link" to={"/add"}>Add Now!!!</Link>
            <br />

            <p className="home-p">To Know more Click the button below:</p>
            <Link className="btn btn-secondary home-link" to={"/contacts"}>Contact Us</Link>
          </div>
        </div>
      </div>
  );
}

export default Home;