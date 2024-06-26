import React from "react";

import '../../styles/navbar.css'

import { Link } from "react-router-dom";

const Navbar=()=>{
    return (
      <nav className="navbar fixed-top navbar-expand-lg" style={{ backgroundColor: '#e3f2fd' }}>
        <div className="container-fluid">
          <h5 className="shadow-sm" style={{ color: '#354f87' }}>Smart Contact Manager</h5>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>

          <div className="d-flex" >
            <div className="collapse navbar-collapse" id="navbarSupportedContent">

            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                  <Link className="nav-link" to="/home">HOME</Link>
              </li>&nbsp; 
              <li className="nav-item">
                <Link className="nav-link" to="/about">ABOUT</Link>
              </li>&nbsp;
              <li className="nav-item">
                <Link className="nav-link" to="/signup">SIGNUP</Link>
              </li>&nbsp;
              <li className="nav-item">
                <Link className="nav-link" to="/login">LOGIN</Link>
              </li>
            </ul>

          </div>
          </div>
        </div>
      </nav>
    );
}

export default Navbar;