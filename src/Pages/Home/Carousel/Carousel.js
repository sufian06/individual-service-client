import React from "react";

const Carousel = () => {
  return (
    <div className="mb-8">
    <div className="isolate bg-white">
      <main>
        <div className="relative px-6 lg:px-8 bg-orange-100 rounded-md">
          <div className="mx-auto max-w-3xl">
            <div className="py-16">
              <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                <div className="relative overflow-hidden rounded-full py-1.5 px-4 text-sm leading-6 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                  <span className="text-gray-600">
                    Next level recovery service
                  </span>
                </div>
              </div>
              <div>
                <h1 className="text-4xl font-bold tracking-tight sm:text-center sm:text-4xl">
                  It is recovery Agent. I recover any kinds of loan and product.
                </h1>
                
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
    </div>
  );
};

export default Carousel;
