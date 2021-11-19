import * as React from "react";
import { Rating } from "@mui/material";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import { useEffect } from "react";
import { Container } from "react-bootstrap";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import './ShowReviews.css';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

function ShowReviews() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const [reviews, setReviews] = React.useState([]);

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);



  return (
    <Container className='text-center my-md-5 my-3 review-container p-sm-5 mx-auto'>
      <Box>
        <h1 className='review-title'>What People Say!!!</h1>
        <h4 className='review-text'>Reviews</h4>
        <AutoPlaySwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents>
          {reviews.map((review) => (
            <div className='review-section mx-auto' key={review._id}>
              <p>{review.desc}</p>
              <Rating
                name='read-only'
                size='medium'
                value={review.rating}
                readOnly
              />
              <p className='review-name'>{review.name}</p>
            </div>
          ))}
        </AutoPlaySwipeableViews>
      </Box>
    </Container>
  );
}

export default ShowReviews;
