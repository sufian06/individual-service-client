import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";

const ServiceDetails = () => {
  const service = useLoaderData();
  const { user } = useContext(AuthContext);
  console.log(user);

  // const [comment, setComment] = useState();

  const { name, img, details } = service;

  const handleReview = (event) => {
    event.preventDefault();
    const form = event.target;
    const comment = form.comment.value;
    const email = user?.email || "unregistered";
    const name = user?.displayName || "no name";
    const photoURL = user?.photoURL;

    if (!user) {
      alert("Please login to add a review");
      return false;
    }

    const review = {
      comment,
      email,
      name,
      photoURL,
    };

    fetch("https://individual-service-server.vercel.app/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          alert("review placed successfully");
          form.reset();
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="container mx-auto my-8">
      <div className="max-w-full bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <img
          className="rounded-t-lg w-full h-[500px] object-cover"
          src={img}
          alt=""
        />
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {name}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {details}
          </p>
        </div>
      </div>

      {/* all comments */}
      {/* <p>{comment}</p> */}

      {/* reviews */}
      <form onSubmit={handleReview}>
        <label className="block" htmlFor="">
          add your comment
        </label>
        <textarea className="block w-2/3" name="comment" required></textarea>
        <button
          type="submit"
          className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 mt-2"
        >
          Add Comment
        </button>
      </form>
    </div>
  );
};

export default ServiceDetails;
