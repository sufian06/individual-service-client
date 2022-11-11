import React from 'react';

const Blog = () => {
  return (
    <div className='container mx-auto'>
      <div className='my-4 border p-3 rounded-lg border-amber-800'>
        <h2 className='text-xl font-bold'>Difference between SQL and NoSQL</h2>
        <p className='mt-2'><span className='font-bold mr-1'>Answer:</span>SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.</p>
      </div>
      <div className='my-4 border p-3 rounded-lg border-blue-800'>
        <h2 className='text-xl font-bold'>What is JWT, and how does it work?</h2>
        <p className='mt-2'><span className='font-bold mr-1'>Answer:</span>JSON Web Token is a proposed Internet standard for creating data with optional signature and/or optional encryption whose payload holds JSON that asserts some number of claims. The tokens are signed either using a private secret or a public/private key.</p>
      </div>
      <div className='my-4 border p-3 rounded-lg border-yellow-400'>
        <h2 className='text-xl font-bold'>What is the difference between javascript and NodeJS?</h2>
        <p className='mt-2'><span className='font-bold mr-1'>Answer:</span>JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.</p>
      </div>
      <div className='my-4 border p-3 rounded-lg border-green-500'>
        <h2 className='text-xl font-bold'>How does NodeJS handle multiple requests at the same time?</h2>
        <p className='mt-2'><span className='font-bold mr-1'>Answer:</span>Node js use event loop for handle multiple request</p>
      </div>
    </div>
  );
};

export default Blog;