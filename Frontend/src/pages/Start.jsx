import React from 'react';
import getStarted from '../assets/getStarted.jpg';
import { Link } from 'react-router-dom';


const Start = () => {

 
  return (
    <div className="w-full flex justify-center "> 
    
    <div
      className="h-[98vh]  w-full lg:w-2/3 xl:w-1/3 bg-cover my-1 flex flex-col justify-between"
      style={{ backgroundImage: `url(${getStarted})` }}
    >

      <div className="flex justify-center pt-10">
</div>

    
      <div className="bg-white bg-opacity-90 flex flex-col items-center text-center px-6 py-10 rounded-t-3xl shadow-2xl backdrop-blur-sm">
        <h4 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
          Get Started with Uber
        </h4>
        <Link to='/login' className="bg-black text-white w-full max-w-sm px-5 py-3 text-lg rounded-full hover:bg-gray-800  transition duration-300">
          Continue
        </Link>
      </div>
    </div>
    </div>
    
    
  );
};

export default Start;
