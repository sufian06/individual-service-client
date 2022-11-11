import React from 'react';

const MyReviewsData = ({review}) => {
  const {comment} = review;
  return (
    <div>
      <p>{comment}</p>
    </div>
  );
};

export default MyReviewsData;