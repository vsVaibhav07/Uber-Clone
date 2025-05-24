import { useState } from "react";
import { BiCurrentLocation } from "react-icons/bi";
import { FaArrowAltCircleDown, FaLocationArrow } from "react-icons/fa";

import LocationSearchPanel from "../components/LocationSearchPanel";
import ConfirmRidePanel from "../components/ConfirmRidePanel";
import VehiclePanel from "../components/VehiclePanel";

const Home = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [fillForm, setFillForm] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [isSelectingPickup, setIsSelectingPickup] = useState(true);
  const [showConfirmPanel, setShowConfirmPanel] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
  };

  const confirmTrip = () => {
    if (pickup && destination && selectedVehicle) {
      console.log("Trip confirmed with:", { pickup, destination, selectedVehicle });
      // Add navigation or API call logic here
    } else {
      alert("Please fill all fields and select a vehicle.");
    }
  };

  const handlePickupClick = () => {
    setIsSelectingPickup(true);
    setFillForm(true);
  };

  const handleDestinationClick = () => {
    setIsSelectingPickup(false);
    setFillForm(true);
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
      <div
        onClick={() => {
          setFillForm(true);
        }}
        className={`absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl shadow-2xl px-6 sm:px-10 py-8 transition-all duration-150 ease-linear ${
          fillForm ? "h-[98%] translate-y-0" : "translate-y-1/12"
        }`}
      >
        <h2 className="text-2xl font-semibold text-center">Find a Trip</h2>

        <div
          onClick={(e) => {
            e.stopPropagation();
            setFillForm(false);
          }}
          className={`${
            fillForm ? "flex justify-end text-2xl m-4" : "hidden"
          }`}
        >
          <FaArrowAltCircleDown />
        </div>

        <form onSubmit={submitHandler} className="relative flex flex-col gap-4">
          {/* Pickup Input */}
          <div
            className="p-4 text-base sm:text-lg flex items-center placeholder:text-gray-500 rounded-xl bg-gray-100 relative"
            onClick={handlePickupClick}
          >
            <BiCurrentLocation className="text-2xl mr-8" />
            <input
              type="text"
              className="focus:outline-none focus:ring-black w-full"
              placeholder=" Add a pick-up location"
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
            />
          </div>

          {/* Destination Input */}
          <div
            className="p-4 text-base sm:text-lg flex items-center placeholder:text-gray-500 rounded-xl bg-gray-100 relative"
            onClick={handleDestinationClick}
          >
            <FaLocationArrow className="text-2xl mr-8" />
            <input
              type="text"
              className="focus:outline-none focus:ring-black w-full"
              placeholder="Enter your destination"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
            />
          </div>
        </form>

        {/* Vehicle Panel */}
        {pickup && destination && !showConfirmPanel && (
          <VehiclePanel
            fillForm={fillForm}
            selectedVehicle={selectedVehicle}
            setSelectedVehicle={setSelectedVehicle}
          />
        )}

        {/* Confirm Button */}
        {pickup && destination && selectedVehicle && !showConfirmPanel && (
          <button
            onClick={() => {
              setShowConfirmPanel(true);
              confirmTrip();
              setFillForm(false);
            }}
            className="w-full bg-black text-white font-semibold py-2 rounded-lg hover:bg-gray-800 transition duration-300 mt-4"
          >
            Confirm Trip
          </button>
        )}

        {/* Confirm Ride Panel */}
        {showConfirmPanel && (
          <ConfirmRidePanel
            pickup={pickup}
            destination={destination}
            vehicle={selectedVehicle}
          />
        )}

        {/* Location Search Panel */}
        {!showConfirmPanel && (
          <LocationSearchPanel
            fillForm={fillForm}
            setPickup={setPickup}
            setDestination={setDestination}
            isSelectingPickup={isSelectingPickup}
          />
        )}
      </div>
    </div>
  );
};

export default Home;
