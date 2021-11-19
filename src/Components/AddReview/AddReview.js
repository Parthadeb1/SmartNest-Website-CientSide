import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../Hooks/useAuth";

const AddReview = () => {
  const { register, handleSubmit, reset } = useForm();
  const { user } = useAuth();

  const onSubmit = (data) => {
    if (data.name) {
      fetch("https://fierce-ridge-17971.herokuapp.com/reviews/", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((result) => {
          console.log(result);
          if (result.insertedId) {
            alert("Review added succefully");
            reset("");
          }
        });
    }

    console.log(data);
  };

  return (
    <div className="container">
      <div className=" d-flestify-content-center align-items-center">
        <h1 className="text-center text-primary">Give a Review!!</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="w-50 mx-auto">
          <div className="mb-3">
            <input
              {...register("name", { required: true, maxLength: 30 })}
              type="text"
              className="form-control p-3"
              placeholder="Name"
              value={user.displayName}
              required
            />
          </div>
          <div className="mb-3">
            <input
              {...register("email", { required: true, maxLength: 30 })}
              type="email"
              className="form-control p-3"
              placeholder="Email"
              value={user.email}
              required
            />
          </div>
          <div className="mb-2">
            <textarea
              {...register("desc")}
              type="text"
              className="form-control p-3"
              placeholder="Give a review"
            />
          </div>
          <div className="mb-3">
            <input
              {...register("rating", { required: true, maxLength: 30 })}
              type="number"
              className="form-control p-3"
              placeholder="Rating between 1 to 5"
              required
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

export default AddReview;
