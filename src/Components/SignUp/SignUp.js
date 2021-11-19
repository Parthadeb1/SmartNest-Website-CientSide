import React, { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const {
    user,
    setUser,
    handleName,
    profileName,
    customSignUpWithEmailAndPassword,
    saveUser,
  } = useAuth();

  if (user.email) {
    window.location.replace("/");
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRegistration = (e) => {
    e.preventDefault();
    if (password.length < 6) {
      setError("Password Must be at least 6 characters long.");
      return;
    }
    // if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
    //   setError('Password Must contain 2 upper case');
    //   return;
    // }

    registerNewUser(email, password, profileName);
  };

  const registerNewUser = (email, password, profileName, name) => {
    customSignUpWithEmailAndPassword(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);

        console.log(user);
        profileName();
        setError("");
        //save user to database
        saveUser(email, name, "POST");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className="container">
      <h1 className="fs-1 fw-bold mt-3 text-center">
        Create<span className="text-danger">New Account</span>{" "}
      </h1>
      <div className=" d-flex justify-content-center align-items-center mt-3">
        <form onSubmit={handleRegistration} className="w-50 mx-auto">
          <div className="mb-3">
            <input
              onBlur={handleName}
              type="text"
              className="form-control p-3"
              placeholder="Name"
              required
            />
          </div>
          <div className="mb-3">
            <input
              onBlur={handleEmailChange}
              type="email"
              className="form-control p-3"
              placeholder="Email"
              required
            />
          </div>
          <div className="mb-3">
            <input
              onBlur={handlePasswordChange}
              type="password"
              className="form-control p-3"
              placeholder="Password"
              required
            />
            <p className="text-danger">{error}</p>
          </div>
          <div className="d-flex justify-content-center align-items-center ">
            <button
              type="submit"
              className="btn btn-danger fw-bold text-white fs-5 w-100"
            >
              SignUp
            </button>
          </div>
          <div className="mt-4">
            <Link to="/signin">
              <p className="text-danger text-center fs-5">
                Allready Have a Account?
              </p>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
