import React, { useState } from "react";
import { FaArrowAltCircleDown ,FaLocationArrow} from "react-icons/fa";
import { BiCurrentLocation } from "react-icons/bi";

const Home = () => {

  const [pickup, setPickup] = useState("");
  const [destination,setDestination]=useState("")
  const [fillForm, setFillForm] = useState(false);

const submitHandler = (e) => {
    e.preventDefault();
   
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Uber Logo */}
      <img
        className="w-28 absolute top-8 left-8 z-10"
        src="https://freelogopng.com/images/all_img/1659761100uber-logo-png.png"
        alt="Uber Logo"
      />

      {/* Background Image */}
      <div className="h-full w-full">
        <img
          src="https://blog.uber-cdn.com/cdn-cgi/image/width=2160,quality=80,onerror=redirect,format=auto/wp-content/uploads/2022/08/image22.gif"
          alt="Background"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Bottom Sheet */}
      <div onClick={() => {setFillForm(true)}} className={`absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl shadow-2xl px-6 sm:px-10 py-8  duration-150 transition-all ease-linear  ${fillForm?"h-[98%] translate-y-0  ":"translate-y-1/12"} `}>
        <h2 className="text-2xl font-semibold text-center">Find a Trip</h2>
        <div onClick={(e) => {e.stopPropagation();setFillForm(false)}} className={` ${fillForm?"flex justify-end text-2xl m-4 ":"hidden"} `}>
          <FaArrowAltCircleDown/>
        </div>

        <form onSubmit={(e)=>submitHandler(e)} className="relative flex flex-col gap-4">

{/* Vertical Line: Absolutely positioned */}
<div className="absolute left-6 top-10 h-14 w-1 bg-gray-600 z-10"></div>

<div className="p-4 text-base sm:text-lg flex items-center placeholder:text-gray-500 rounded-xl bg-gray-100  relative ">
  <BiCurrentLocation className="text-2xl mr-8" />
  <input
  type="text"
  className="focus:outline-none focus:ring-black w-full"
  placeholder=" Add a pick-up location"
  value={pickup}
  
  onChange={(e) => setPickup(e.target.value)}
/>
</div>

<div className="p-4 text-base sm:text-lg flex items-center placeholder:text-gray-500 rounded-xl bg-gray-100  relative "> 
  <FaLocationArrow  className="text-2xl mr-8" />
  <input
  type="text"
  className=" focus:outline-none focus:ring-black w-full "
  placeholder="Enter your destination"
  value={destination}
  onChange={(e) => setDestination(e.target.value)}
/>
</div>

</form>


        {/* Optional suggestion section */}
        <div className="bg-gray-50 h-[55vh] hidden p-4 rounded-xl shadow-inner">
          Suggestions (if any)
        </div> 
      </div>
    </div>
  );
};

export default Home;
