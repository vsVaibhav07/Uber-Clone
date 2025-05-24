const VehiclePanel = ({ setSelectedVehicle, fillForm, selectedVehicle }) => {
  const vehicles = [
    { type: "Car", price: 200, eta: "5 mins", image: "Car" },
    { type: "Bike", price: 100, eta: "3 mins", image: "Bike" },
    { type: "Auto", price: 150, eta: "4 mins", image: "Auto" },
  ];

  return (
    <div className={`${fillForm ? "relative" : "hidden"} z-50`}>
      <h4 className="text-lg font-semibold mb-4">Choose A Vehicle</h4>
      <div className="flex flex-col gap-2">
        {vehicles.map((vehicle, index) => {
          const isSelected =
            selectedVehicle && selectedVehicle.type === vehicle.type;

          return (
            <div
              key={index}
              className={`flex items-center justify-between gap-4 p-2 border rounded-lg cursor-pointer transition duration-300 ${
                isSelected
                  ? "bg-gray-800 text-white border-black"
                  : "hover:bg-gray-100"
              }`}
              onClick={() => setSelectedVehicle(vehicle)}
            >
              <div className="flex items-center gap-4">
                <img
                  src={`/${vehicle.image}.jpg`}
                  alt={vehicle.type}
                  className="w-16 h-16 object-contain rounded-md"
                />
                <div>
                  <h5 className="font-medium">{vehicle.type}</h5>
                  <p className="text-sm">{vehicle.eta}</p>
                </div>
              </div>
              <p className="font-semibold text-lg">₹{vehicle.price}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default VehiclePanel;
