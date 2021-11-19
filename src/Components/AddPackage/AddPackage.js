import React from "react";
import { useForm } from "react-hook-form";

const AddPackage = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    if (data.name) {
      fetch("https://fierce-ridge-17971.herokuapp.com/packages/", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            alert("Packages added succesfully!!");
            reset("");
          }
        });
    }
  };

  return (
    <div className="container">
      <div className=" d-flestify-content-center align-items-center">
        <h1 className="text-center text-primary">Add a package</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="w-50 mx-auto">
          <div className="mb-3">
            <input
              {...register("name", { required: true, maxLength: 30 })}
              type="text"
              className="form-control p-3"
              placeholder="Name"
              required
            />
          </div>
          <div className="mb-2">
            <textarea
              {...register("desc")}
              type="text"
              className="form-control p-3"
              placeholder="description"
            />
          </div>
          <div className="mb-2">
            <input
              {...register("img")}
              className="form-control p-3"
              placeholder="image"
            />
          </div>
          <div className="mb-2">
            <input
              {...register("price")}
              type="number"
              className="form-control p-3"
              placeholder="price"
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
    </div>
  );
};

export default AddPackage;
