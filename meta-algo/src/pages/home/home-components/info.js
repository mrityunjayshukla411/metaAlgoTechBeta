import React from "react";
import "./info.css";
function Info() {
  return (
    <div className="vh-100">
      <section className="vh-100 container">
        <h1 className="display-1 text-center">How it Works?</h1>
        <div className="row g-2">
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div className="card info-card bg-light text-dark mb-3">
              <div className="info-card-header card-header">Low Risk</div>
              <div className="card-body">
                <h5 className="card-title">How we Manage Risk?</h5>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel tristique nulla, quis sollicitudin dui. Vestibulum viverra bibendum volutpat. Suspendisse orci metus, viverra ac erat in, interdum tincidunt orci. Quisque vel tincidunt diam. Vestibulum bibendum sit amet metus eget molestie.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div className="card info-card blue-card text-light  mb-3">
              <div className="info-card-header card-header">Constant Returns</div>
              <div className="card-body">
                <h5 className="card-title">How we gurantee Constant Returns?</h5>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel tristique nulla, quis sollicitudin dui. Vestibulum viverra bibendum volutpat. Suspendisse orci metus, viverra ac erat in, interdum tincidunt orci. Quisque vel tincidunt diam. Vestibulum bibendum sit amet metus eget molestie.</p>
              </div>
            </div>
          </div>
        {/* </div>
        <div className="row"> */}
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div className="card info-card blue-card text-light mb-3">
              <div className="info-card-header card-header">Trust</div>
              <div className="card-body">
                <h5 className="card-title">Why Trust us?</h5>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel tristique nulla, quis sollicitudin dui. Vestibulum viverra bibendum volutpat. Suspendisse orci metus, viverra ac erat in, interdum tincidunt orci. Quisque vel tincidunt diam. Vestibulum bibendum sit amet metus eget molestie.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div className="card info-card text-dark bg-light mb-3">
              <div className="info-card-header card-header">Our Mission</div>
              <div className="card-body">
                <h5 className="card-title">What do we desire?</h5>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel tristique nulla, quis sollicitudin dui. Vestibulum viverra bibendum volutpat. Suspendisse orci metus, viverra ac erat in, interdum tincidunt orci. Quisque vel tincidunt diam. Vestibulum bibendum sit amet metus eget molestie.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Info;
