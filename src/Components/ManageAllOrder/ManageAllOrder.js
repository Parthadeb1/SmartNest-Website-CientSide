import React, { useEffect, useState } from "react";
import ManageOrder from "./ManageOrder/ManageOrder";

const ManageAllOrder = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/manageallorder")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, [services]);
  return (
    <div>
      <div className="container">
        <h1 className="text-center fs-1 fw-bold">
          Manage <span className="text-danger">All Order</span>{" "}
        </h1>
        <div className="row row-cols-1 row-cols-md-3 g-4 mt-4">
          {services.map((service) => (
            <ManageOrder key={service._id} service={service}></ManageOrder>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ManageAllOrder;
