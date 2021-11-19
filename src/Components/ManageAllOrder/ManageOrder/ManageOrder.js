import { Alert, Button, CardActionArea, CardActions } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import React from "react";
import { Col, Row } from "react-bootstrap";

const ManageOrder = ({ service }) => {
  const { product, status, _id } = service;

  // Handle Approved function
  const handleStatus = (id) => {
    const url = `http://localhost:5000/manageallorder/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(service),
    }).then();
  };

  // Handle delete function
  const handleDelete = (id) => {
    const procced = window.confirm("Are you sure you want to Delete ?");
    if (procced) {
      fetch(`http://localhost:5000/manageallorder/${id}`, {
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
    <Col xs={12} md={4}>
      <Card sx={{ minWidth: "100%" }}>
        <CardActionArea>
          <CardMedia component="img" image={product.img} />
          <CardContent>
            <p>{product.name}</p>
            <p className="">${product.price}</p>
            <p className="">{status}</p>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Row>
            <Col xs={6}>
              {status === "Pending" ? (
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => handleStatus(_id)}
                >
                  Pending
                </Button>
              ) : (
                <Alert severity="success">Approved!</Alert>
              )}
            </Col>
            <Col xs={6}>
              <Button variant="contained" onClick={() => handleDelete(_id)}>
                Delete
              </Button>
            </Col>
          </Row>
        </CardActions>
      </Card>
    </Col>
  );
};

export default ManageOrder;
