import React from "react";
import "./footer.css";
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { BsTelegram } from "react-icons/bs";

function Footer() {
  return (
    <div className="container">

    <section className="mb-4">
      <footer className="text-center text-white footer-container">
        <div className="container p-4">
          <section className="mb-4">
            <a className="btn" href="/" role="button">
              <AiFillInstagram className="display-6  text-light" />
            </a>
            <a className="btn" href="/" role="button">
              <AiFillLinkedin className="display-6  text-light" />
            </a>
            <a className="btn" href="/" role="button">
              <BsTelegram className="display-6  text-light" />
            </a>
          </section>

          <section className="">
            <form action="">
              <div className="row d-flex justify-content-center">
                <div className="col-auto">
                  <p className="pt-2">
                    <strong>Sign up for updates</strong>
                  </p>
                </div>

                <div className="col-md-5 col-12">
                  <div className="form-outline form-white mb-4">
                    <input
                      type="email"
                      id="form5Example21"
                      className="form-control"
                      />
                    <label className="form-label" for="form5Example21">
                      Email address
                    </label>
                  </div>
                </div>

                <div className="col-auto">
                  <button type="submit" className="btn btn-outline-light mb-4">
                    Subscribe
                  </button>
                </div>
              </div>
            </form>
          </section>

          <section className="mb-4 display-2 text-center">
            <p>
              Coming Soon . . . 
            </p>
          </section>
          <section className="">
            <div className="row">
              {/* <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase">Links</h5>

                <ul className="list-unstyled mb-0">
                  <li>
                  <a href="#!" className="text-white">
                      Link 1
                      </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Link 2
                    </a>
                    </li>
                  <li>
                  <a href="#!" className="text-white">
                      Link 3
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Link 4
                    </a>
                  </li>
                </ul>
              </div> */}
            </div>
          </section>
        </div>

        <div className="text-center p-3">
          © 2022 Copyright&nbsp;:- &nbsp;
          <a className="text-white" href="https://metaalgo.in/">
            metaalgo.in
          </a>
        </div>
      </footer>
    </section>
                  </div>
  );
}
export default Footer;
