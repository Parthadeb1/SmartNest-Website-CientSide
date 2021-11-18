import { TextField, Button, Alert } from "@mui/material";
import React, { useState } from "react";

const MakeAdmin = () => {
  const [email, setEmail] = useState(" ");
  const [success, setSucces] = useState(false);

  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };
  //make admin
  const handleMakeAdmin = (e) => {
    const user = { email };
    fetch("http://localhost:5000/users/admin", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          console.log(data);

          setSucces(true);
        }
      });
    setEmail("");
    e.preventDefault();
  };
  return (
    <div className="text-center">
      <h1 className="text-center text-secondary mb-5">Make Admin</h1>
      <form onSubmit={handleMakeAdmin}>
        <TextField
          sx={{ width: 300 }}
          label="Email"
          type="email"
          onBlur={handleOnBlur}
          variant="standard"
        />
        <Button sx={{ m: 2 }} type="submit" variant="contained">
          Make Admin
        </Button>
      </form>
      {success && <Alert severity="success"> Admin Made successfully!!</Alert>}
    </div>
  );
};

export default MakeAdmin;
