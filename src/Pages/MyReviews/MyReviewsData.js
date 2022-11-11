import React from 'react';

const MyReviewsData = ({review}) => {
  const {name, email, photoURL, comment} = review;
  return (
    <div>
      <p>{comment}</p>
    </div>
  );
};

export default MyReviewsData;