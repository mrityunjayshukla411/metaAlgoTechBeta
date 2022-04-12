import React from "react";
import { useState, useEffect } from "react";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db, auth } from "../../backend/firebase/firebaseConfig";
import { useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";

import { BiArrowBack } from "react-icons/bi";
import "./register.css";
function Register({ setIsAuth }) {
  const initialValues = { username: "", email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const userCollectionRef = collection(db, "users");
  let navigate = useNavigate();
  let totalUsers = [];
  getDocs(userCollectionRef)
    .then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        totalUsers.push({ ...doc.data() });
      });
      // console.log(totalUsers[0]['username']);
    })
    .catch((err) => {
      console.log(err.message);
    });

  const isAvailableUsername = (checkUsername) => {
    let flag = true;
    totalUsers.forEach((newUser) => {
      if (newUser["username"] === checkUsername) {
        flag = false;
      }
    });
    return flag;
  };
  const isAvailableMail = (checkEmail) => {
    let flag = true;
    totalUsers.forEach((newUser) => {
      if (newUser["email"] === checkEmail) {
        flag = false;
      }
    });
    return flag;
  };
  const createUser = async (formValues) => {
    createUserWithEmailAndPassword(auth, formValues.email, formValues.password)
      .then((userCredential) => {
        const user = userCredential.user;
        addDoc(userCollectionRef, {
          username: formValues.username,
          email: formValues.email,
          userId: auth.currentUser.uid,
        });
        navigate("/");
        localStorage.setItem("isAuth", true);
        setIsAuth(true);
        console.log("Heloooooooooooooooo");
        console.log("Heloooooooooooooooo");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
      createUser(formValues);
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = "Username is required!";
    } else if (!isAvailableUsername(values.username)) {
      errors.username = "This is username is already taken ";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    } else if (!isAvailableMail(values.email)) {
      errors.email = "This is email is already taken ";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    return errors;
  };

  return (
    <>
      <section className="gradient-custom">
        <div className="container py-5 h-100">
          <form onSubmit={handleSubmit}>
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                <div className="card register-card bg-dark text-white">
                  <div className="card-body p-5 text-center">
                    <h1 className="text-start">
                      <a href="/" className="text-white">
                        <BiArrowBack />
                      </a>
                    </h1>
                    <div className="mb-md-5 mt-md-4 pb-5">
                      <h2 className="fw-bold mb-2 text-uppercase">Register</h2>
                      <p className="text-white-50 mb-5">
                        Please enter your details
                      </p>

                      <div className="form-outline form-white mb-4">
                        <label className="form-label" for="typeEmailX">
                          Username
                        </label>
                        <input
                          type="text"
                          id="typeEmailX"
                          name="username"
                          onChange={handleChange}
                          className="form-control form-control-lg"
                        />
                      </div>
                      <p>{formErrors.username}</p>
                      <div className="form-outline form-white mb-4">
                        <label className="form-label" for="typeEmailX">
                          Email
                        </label>
                        <input
                          type="text"
                          id="typeEmailX"
                          name="email"
                          onChange={handleChange}
                          className="form-control form-control-lg"
                        />
                      </div>
                      <p>{formErrors.email}</p>
                      <div className="form-outline form-white mb-4">
                        <label className="form-label" for="typePasswordX">
                          Password
                        </label>
                        <input
                          type="password"
                          id="typePasswordX"
                          name="password"
                          onChange={handleChange}
                          className="form-control form-control-lg"
                        />
                      </div>
                      <p>{formErrors.password}</p>
                      <button
                        className="btn btn-outline-light btn-lg px-5 mt-3 mb-0 py-0"
                        type="submit"
                        onClick={handleSubmit}
                      >
                        Register
                      </button>
                    </div>
                    <p className="mb-0 mt-0">
                      Already have an account?{" "}
                      <a href="/login" className="text-white-50 fw-bold">
                        Log in
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
export default Register;
