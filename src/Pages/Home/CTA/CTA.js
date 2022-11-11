import React from "react";

const CTA = () => {
  return (
    <div className="bg-green-200 text-center flex justify-evenly rounded-md py-16 my-12 items-center">
      <h2 className="text-xl">NEED RECOVERY AGENTS AND COLLECTION AGENTS</h2>
      <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
        <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 font-bold text-xl">
          Contact
        </span>
      </button>
    </div>
  );
};

export default CTA;
