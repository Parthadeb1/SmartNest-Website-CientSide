import React from "react";
import {
  faEnvelopeOpenText,
  faPhoneSquareAlt,
  faStreetView,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  const element1 = <FontAwesomeIcon icon={faStreetView} />;
  const element2 = <FontAwesomeIcon icon={faEnvelopeOpenText} />;
  const element3 = <FontAwesomeIcon icon={faPhoneSquareAlt} />;
  return (
    <div className="container-fluid mt-4 bg-dark text-light">
      <div className="d-flex justify-content-between">
        <div className="item-center p-4">
          <div>
            <h1 className="fs-3 fw-bold text-start">
              Smart<span className="text-danger">Nest</span>{" "}
            </h1>
            <div className="w-50 text-auto text-start">
              <p>
                “Take vacations and book a appartment, go as many places as you
                can, you can always make money, you can’t awakes make memories.
                We provide the best appartment.”
              </p>
            </div>
          </div>
        </div>

        <div className="p-3 text-start">
          <h1 className="text-danger">Contact</h1>
          <p>{element1} 350 Avenue, Gulshan, Dhaka 1211</p>
          <p>{element2} smart.nest78@gmail.com </p>
          <p>{element3} +880192XXXXXXX </p>
        </div>
      </div>

      <div className=" d-flex justify-content-center align-item-center">
        <h5>
          ®™ Copyright reserve to Smart{" "}
          <span className="text-danger">Nest</span>{" "}
        </h5>
      </div>
    </div>
  );
};

export default Footer;
