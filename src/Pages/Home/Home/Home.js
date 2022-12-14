import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import useTitle from "../../../Hooks/useTitle";
import Carousel from "../Carousel/Carousel";
import CTA from "../CTA/CTA";
import ServiceCard from "../ServiceCard/ServiceCard";

const Home = () => {
  const services = useLoaderData();

  useTitle('Home');

  return (
    <div className="container mx-auto mt-8">
      <Carousel />
      {/* <ServiceCard /> */}
      <div className="grid lg:grid-cols-3 gap-8 justify-between">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>
      <div className="text-center mt-12">
        <Link to='/services'>
        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 font-bold text-xl">
            See All Services
          </span>
        </button>
        </Link>
      </div>
      <CTA />
    </div>
  );
};

export default Home;
