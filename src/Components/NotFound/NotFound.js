import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center">
      <div className="mt-5">
        <h1 className="text-danger fs-1">404</h1>
        <h1 className="fs-1 fw-bolder">
          Error:) <span className="text-danger ">Page Not Found</span>
        </h1>
        <h4>We cant find the page what you are looking for..!!</h4>
        <Link to="/home">
          <button className="btn btn-danger tex-white fw-bolder">
            Go Back
          </button>{" "}
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
