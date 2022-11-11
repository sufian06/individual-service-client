import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import MyReviewsData from "./MyReviewsData";

const MyReviews = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`https://individual-service-server.vercel.app/reviews?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [user?.email]);

  return (
    <div className="container mx-auto my-8">
      <h2 className="text-3xl">You have: {reviews.length} reviews</h2>
      {reviews.map((review) => (
        <MyReviewsData key={review._id} review={review} />
      ))}
    </div>
  );
};

export default MyReviews;
