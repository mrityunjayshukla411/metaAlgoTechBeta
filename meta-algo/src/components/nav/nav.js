import React from "react";
import './nav.css'
function Nav() {
  return (
    <div >
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <a className="navbar-brand nav-link" href="/">
            MetaAlgoTech
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className=" collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link  nav-button active" aria-current="page" href="/product">
                MetaAl
              </a>
              <a className="nav-link  nav-button" href="/about">
                About
              </a>
              <a className="nav-link nav-button" href="/login">
                Login
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Nav;
