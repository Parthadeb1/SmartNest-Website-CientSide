import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Alert,
} from "@mui/material";
import React from "react";
import { Col, Row } from "react-bootstrap";

const MyOrderPackage = ({ order }) => {
  const status = order.status;
  const product = order.product;
  return (
    <Col xs={12} md={4}>
      <Card sx={{ minWidth: "100%" }}>
        <CardActionArea>
          <CardMedia component="img" image={product.img} />
          <CardContent>
            <p>{product.name}</p>
            <p className="product-price">${product.price}</p>
            <p className="product-vendor">{status}</p>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Row>
            <Col xs={6}>
              {status === "Pending" ? (
                <Button variant="contained" color="secondary">
                  Pending
                </Button>
              ) : (
                <Alert severity="success">Approved!</Alert>
              )}
            </Col>
            <Col xs={6}>
              <Button variant="contained">Delete</Button>
            </Col>
          </Row>
        </CardActions>
      </Card>
    </Col>
  );
};

export default MyOrderPackage;
