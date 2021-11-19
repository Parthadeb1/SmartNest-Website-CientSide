import React, { useEffect, useState } from "react";
import ManageAllProduct from "./ManageAllProduct";

const ManageAllProducts = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://fierce-ridge-17971.herokuapp.com/packages")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, [services]);
  return (
    <div>
      <div className="container">
        <h1 className="text-center fs-1 fw-bold">
          Manage All <span className="text-danger">Property</span>{" "}
        </h1>
        <div className="row row-cols-1 row-cols-md-3 g-4 mt-4">
          {services.map((service) => (
            <ManageAllProduct
              key={service._id}
              service={service}
            ></ManageAllProduct>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ManageAllProducts;
