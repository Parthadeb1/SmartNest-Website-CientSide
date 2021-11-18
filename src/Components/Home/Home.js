import React from "react";
import { Carousel } from "react-bootstrap";
import banner2 from "../../images/banner2.jpg";
import banner4 from "../../images/banner4.jpg";
import banner3 from "../../images/banner3.jpg";
import Footer from "../Footer/Footer";
import Services from "../Services/Services";
import AboutUs from "../AboutUs/AboutUs";
import ContactUs from "../ContactUs/ContactUs";

const Home = () => {
  return (
    <div className="container-fluid">
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={banner2} alt="First slide" />
          <Carousel.Caption>
            <h1 className="fs-1 fw-bold text-white">
              "Well-Come To <span className="text-danger">Smart Nest</span> "
            </h1>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={banner4} alt="Second slide" />

          <Carousel.Caption>
            <h1 className="fs-1 fw-bold text-white">
              "Find Your Lovely Home Easily With Us"
            </h1>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={banner3} alt="Third slide" />

          <Carousel.Caption>
            <h1 className="fs-1 fw-bold text-white">
              Travel to the any corner of the world, without going around in
              circles.
            </h1>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Services quantity={6} />
      <AboutUs />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Home;
