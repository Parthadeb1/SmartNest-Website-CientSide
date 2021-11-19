import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import useAuth from "../Hooks/useAuth";
import MyOrderPackage from "./MyOrderPackage";

const MyOrderPackages = () => {
  const [myorder, setMyOrder] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    const url = `http://localhost:5000/managemyorder/${user.email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMyOrder(data));
  }, [myorder, user.email]);
  return (
    <div>
      <h2 className="text-center">My Order</h2>
      <Row className="g-4">
        {myorder.map((order) => (
          <MyOrderPackage key={order._id} order={order}></MyOrderPackage>
        ))}
      </Row>
    </div>
  );
};

export default MyOrderPackages;
