// import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import Footer from "../Footer/Footer";
import useAuth from "../Hooks/useAuth";

const MyOrder = () => {
  const { packageId } = useParams();
  const [services, setServices] = useState({});
  const { register, handleSubmit, reset } = useForm();
  const { user } = useAuth();

  const onSubmit = (data) => {
    if (data.email) {
      data.product = services;
      data.status = "Pending";
      fetch("http://localhost:5000/myorder", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            alert("Added succesfully");
            reset();
          }
        });
    }
  };

  useEffect(() => {
    fetch(`http://localhost:5000/packages/${packageId}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setServices(data);
      });
  }, [packageId]);
  return (
    <div className="container-fluid mt-3">
      <h1 className="text-center text-primary">Place Order</h1>
      <div className=" d-flestify-content-center align-items-center">
        <form onSubmit={handleSubmit(onSubmit)} className="w-50 mx-auto">
          <div className="mb-3">
            <input
              {...register("Name", { required: true, maxLength: 30 })}
              type="text"
              className="form-control p-3"
              placeholder="Name"
              value={user.displayName}
              required
            />
          </div>
          <div className="mb-2">
            <input
              {...register("email")}
              type="email"
              className="form-control p-3"
              value={user.email}
              placeholder="Email"
            />
          </div>
          <div className="mb-2">
            <input
              {...register("city")}
              className="form-control p-3"
              placeholder="City"
            />
          </div>
          <div className="mb-2">
            <input
              {...register("address")}
              className="form-control p-3"
              placeholder="Address"
            />
          </div>
          <div className="mb-2">
            <input
              {...register("Phone")}
              type="tel"
              className="form-control p-3"
              placeholder="Phone"
            />
          </div>
          <div className="mb-2">
            <input
              type="submit"
              className="form-control p-2 text-black fw-bold fs-5 bg-warning"
            />
          </div>
        </form>
      </div>

      <div className="container mt-5">
        <div className="row row-cols-1 row-cols-md-3 g-4 mt-4">
          <div className="col">
            <div className="card h-100">
              <img
                src={services.img}
                className="card-img-top p-2 rounded"
                alt="..."
              />
              <div className="card-body">
                <h4 className="card-title fs-4 text-start text-primary">
                  {services.name}
                </h4>
                <p className="card-text text-start">{services.desc}</p>
                <h5 className="text-dark text-start">${services.price}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MyOrder;
