import React from "react";
import './register.css'
function Register() {
  return (
    <>
    <section className="gradient-custom">
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-12 col-md-8 col-lg-6 col-xl-5">
        <div className="card bg-dark text-white" >
          <div className="card-body p-5 text-center">

            <div className="mb-md-5 mt-md-4 pb-5">

              <h2 className="fw-bold mb-2 text-uppercase">Register</h2>
              <p className="text-white-50 mb-5">Please enter your details</p>

              <div className="form-outline form-white mb-4">
                <label className="form-label" for="typeEmailX">Email</label>
                <input type="email" id="typeEmailX" className="form-control form-control-lg" />
              </div>

              <div className="form-outline form-white mb-4">
                <label className="form-label" for="typePasswordX">Password</label>
                <input type="password" id="typePasswordX" className="form-control form-control-lg" />
              </div>
              <div className="form-outline form-white mb-4">
                <label className="form-label" for="typePasswordX">Confirm Password</label>
                <input type="password" id="typePasswordX" className="form-control form-control-lg" />
              </div>

              {/* <p className="small mb-5 pb-lg-2"><a className="text-white-50" href="#!">Forgot password?</a></p> */}

              <button className="btn btn-outline-light btn-lg px-5 mt-3 mb-0 py-0" type="submit">Register</button>

            </div>
              <p className="mb-0 mt-0">Already have an account? <a href="/login" className="text-white-50 fw-bold">Log in</a>
              </p>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  );
}
export default Register;
