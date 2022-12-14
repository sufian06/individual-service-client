import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../Hooks/useTitle';
import ServiceItem from './ServiceItem';

const Services = () => {
  const services = useLoaderData();

  useTitle('Services');

  return (
    <div className='container mx-auto grid lg:grid-cols-3 gap-7 my-8'>
      {
        services.map(service => <ServiceItem key={service._id} service={service} />)
      }
    </div>
  );
};

export default Services;