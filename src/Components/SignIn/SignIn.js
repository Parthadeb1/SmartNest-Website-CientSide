import React, { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const {
    user,
    setUser,
    signInUsingGoogle,
    customSignInWithEmailAndPassword,
    saveUser,
  } = useAuth();

  if (user.email) {
    window.location.replace("/");
  }
  //email and password setup
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  //user sign in process
  const handleSignIn = (e) => {
    e.preventDefault();
    // console.log(email, password);
    if (password.length < 6) {
      setError("Password Must be at least 6 characters long.");
      return;
    }
    // if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
    //   setError('Password Must contain 2 upper case');
    //   return;
    // }

    processLogin(email, password);
  };

  const processLogin = (email, password) => {
    customSignInWithEmailAndPassword(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        setError("");
        saveUser(email, "PUT");
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  return (
    <div className="container">
      <div className=" d-flex flex-column justify-content-center align-items-center mt-3">
        <h1 className="fs-1 fw-bold">
          Smart<span className="text-danger">Nest</span>{" "}
        </h1>
        <form onSubmit={handleSignIn} className="w-50 mx-auto">
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
              className="btn btn-info fw-bold text-dark fs-5 w-100"
            >
              SignIn
            </button>
          </div>
          <div className="mt-4">
            <Link to="/signup">
              <p className="text-danger text-center fs-5">Need an account ?</p>
            </Link>
          </div>
          <div className="d-flex justify-content-center align-items-center ">
            <button
              onClick={signInUsingGoogle}
              type="button"
              className="btn btn-danger text-white fs-5 fw-normal w-100"
            >
              Sign In With Google
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
