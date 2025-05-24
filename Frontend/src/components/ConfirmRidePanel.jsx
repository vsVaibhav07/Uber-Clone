const ConfirmRidePanel = ({ pickup, destination, vehicle }) => {
  return (
    <div className="mt-6 bg-gray-100 p-6 rounded-xl shadow-md">
      <h3 className="text-xl font-semibold mb-4 text-center text-gray-800">Confirm Your Ride</h3>

      <div className="mb-4">
        <p className="text-gray-700"><strong>Pickup Location:</strong> {pickup}</p>
        <p className="text-gray-700"><strong>Destination:</strong> {destination}</p>
      </div>

      <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm border">
        <div className="flex items-center gap-4">
          <img
            src={`/${vehicle.image}.jpg`}
            alt={vehicle.type}
            className="w-16 h-16 object-contain rounded-md"
          />
          <div>
            <h4 className="text-lg font-semibold">{vehicle.type}</h4>
            <p className="text-sm text-gray-600">ETA: {vehicle.eta}</p>
          </div>
        </div>
        <p className="text-xl font-bold text-green-600">₹{vehicle.price}</p>
      </div>

      <button
        className="mt-6 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
        onClick={() => alert("Ride Confirmed! 🚗")}
      >
        Book Now
      </button>
    </div>
  );
};

export default ConfirmRidePanel;
