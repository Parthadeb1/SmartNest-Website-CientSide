import React, { useEffect, useState } from "react";
import Service from "./Service";

const Services = ({ quantity }) => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/packages")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <div className="container mt-5">
        <h1 className="text-center fs-1 fw-bold">
          Our Special <span className="text-danger">Property</span>{" "}
        </h1>
        <div className="row row-cols-1 row-cols-md-3 g-4 mt-4">
          {services.slice(0, quantity).map((service) => (
            <Service key={service._id} service={service}></Service>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
