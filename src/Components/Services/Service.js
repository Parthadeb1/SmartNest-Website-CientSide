import React from "react";
import { Link } from "react-router-dom";

const Service = ({ service }) => {
  const { name, desc, price, img, _id } = service;
  return (
    <div className="col">
      <div className="card h-100">
        <img src={img} className="card-img-top p-2 rounded" alt="..." />
        <div className="card-body">
          <h4 className="card-title fs-4 text-start text-primary">{name}</h4>
          <p className="card-text text-start">{desc}</p>
          <h5 className="text-dark text-start">${price}</h5>
        </div>
        <div className="p-2 text-start">
          <Link to={`/myorder/${_id}`}>
            <button className="btn btn-warning pb-2">Book Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Service;
