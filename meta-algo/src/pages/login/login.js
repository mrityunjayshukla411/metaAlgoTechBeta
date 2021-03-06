import React from "react";
import {useState} from "react";

import { BiArrowBack } from "react-icons/bi";
import { provider, auth } from "../../backend/firebase/firebaseConfig";
import { signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";
import "./login.css";

function Login({setIsAuth}) {

  let navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const loginInWithGoogle = () => {
        signInWithPopup(auth, provider).then((res) => {
            navigate("/")
            localStorage.setItem("isAuth", true)
            setIsAuth(true);
        })
    };

    const loginWithEmail = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
                
                navigate("/")
                // localStorage.setItem("isAuth", true)
                // setIsAuth(true);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert("Wrong password")
            });
    }


  return (
    <>
      <section className="gradient-custom-login">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card login-card bg-dark text-white">
                <div className="card-body p-5 text-center">
                  <h1 className="text-start">
                    <a href="/" className="text-white">
                      <BiArrowBack />
                    </a>
                  </h1>
                  <div className="mb-md-5 mt-md-4 pb-5">
                    <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                    <p className="text-white-50 mb-5">
                      Please enter your login credentials!
                    </p>
                    <div className="form-outline form-white mb-4">
                      <label className="form-label" for="typeEmailX">
                        Email
                      </label>
                      <input
                        type="email"
                        id="typeEmailX"
                        className="form-control form-control-lg"
                        onChange={(event) => {
                          setEmail(event.target.value)
                      }}
                      />
                    </div>

                    <div className="form-outline form-white mb-4">
                      <label className="form-label" for="typePasswordX">
                        Password
                      </label>
                      <input
                        type="password"
                        id="typePasswordX"
                        className="form-control form-control-lg"
                        onChange={(event) => {
                          setPassword(event.target.value)
                      }}
                      />
                    </div>

                    <p className="small mb-5 pb-lg-2">
                      <a className="text-white-50" href="#!">
                        Forgot password?
                      </a>
                    </p>

                    <button
                      className="btn btn-outline-light btn-lg px-5 mb-0"
                      type="submit"
                      onClick={loginWithEmail}
                    >
                      Login
                    </button>
                  </div>
                  <p className="mb-0 mt-0 pt-0">
                    Don't have an account?{" "}
                    <a href="/register" className="text-white-50 fw-bold">
                      Sign Up
                    </a>
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
export default Login;
