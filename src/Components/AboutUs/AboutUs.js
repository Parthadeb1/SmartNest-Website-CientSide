import React from "react";
import aboutUs from "../../images/aboutUs.png";

const AboutUs = () => {
  return (
    <div className="mb-5 mt-5">
      <div className="row container-fluid">
        <h1 className="text-center">
          Know More <span className="text-danger">About Us</span>{" "}
        </h1>
        <div className="col-lg-6 col-md-6 col-12 mt-5">
          <div className="w-100">
            <img className="w-75 rounded" src={aboutUs} alt="" />
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-12">
          <div className="p-5">
            <h1 className="fs-1 fw-bold text-gray text-start">
              We Are the Best
              <span className="text-danger"> Service Provider</span>
            </h1>

            <p className="fs-4 text-start">
              We are one of the best service provider & this will help you make
              a good property in the easiest way and this is one of the best and
              a proper way to buy of rent your suitable flat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
