import React from "react";

const ManageAllProduct = ({ service }) => {
  const { name, price, img, _id } = service;

  const handleDelete = (id) => {
    const procced = window.confirm("Are you sure you want to Delete ?");
    if (procced) {
      fetch(`https://fierce-ridge-17971.herokuapp.com/packages/${id}`, {
        method: "DELETE",
      })
        .then((response) => response.json())
        .then((deleteData) => {
          console.log(deleteData);
          if (deleteData.deletedCount > 0) {
            alert("Deleted Successfully");
          }
        });
    }
  };
  return (
    <div className="col">
      <div className="card h-100">
        <img src={img} className="card-img-top p-2 rounded" alt="..." />
        <div className="card-body">
          <h4 className="card-title fs-4 text-start text-primary">{name}</h4>
          <h5 className="text-dark text-start">${price}</h5>
        </div>
        <div className="p-2 text-start">
          <button
            onClick={() => handleDelete(_id)}
            className="btn btn-warning pb-2"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ManageAllProduct;
