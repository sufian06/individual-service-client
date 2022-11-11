import React from "react";

const ReviewRow = ({review}) => {
  const {comment, name, photoURl, email} = review;
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <th
        scope="row"
        className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {name}
      </th>
      <td className="py-4 px-6">{comment}</td>
      <td className="py-4 px-6">
        <img src={photoURl} alt="" />
      </td>
      <td>{email}</td>
    </tr>
  );
};

export default ReviewRow;
