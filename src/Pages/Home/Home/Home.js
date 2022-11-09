import React, { useEffect, useState } from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';

const Home = () => {
  const [products, setProducts] = useState('');
  useEffect(() => {
    fetch('products.json')
    .then(res => res.json())
    .then(data => setProducts(data))
  }, [])
  return (
    <div className='container mx-auto'>
      Home
      {/* <ServiceCard /> */}
      <div className='grid lg:grid-cols-3 gap-8'>
      {
        products.map(product => <ServiceCard key={product.id} product={product} />)
      }
      </div>
    </div>
  );
};

export default Home;