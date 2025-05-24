import { MdEditLocation } from "react-icons/md";

const LocationSearchPanel = ({ fillForm, setPickup, setDestination, isSelectingPickup }) => {
  const locations = [
    "Hazratganj, Lucknow, Uttar Pradesh 226001",
    "Gomti Nagar, Lucknow, Uttar Pradesh 226010",
    "Indira Nagar, Lucknow, Uttar Pradesh 226016",
    "Alambagh, Lucknow, Uttar Pradesh 226005",
    "Mahanagar, Lucknow, Uttar Pradesh 226006",
    "Ghazipur, Lucknow, Uttar Pradesh 226016"
  ];

  const handleLocationClick = (location) => {
    if (setPickup && setDestination) {
      if (isSelectingPickup) {
        setPickup(location);
      } else {
        setDestination(location);
      }
    }
  };

  return (
    <div className=''>
      <div className={`bg-gray-50 h-[55vh] my-5 p-4 rounded-xl shadow-inner ${fillForm ? "flex flex-col" : "hidden"}`}>
        {locations.map((location, index) => (
          <div
            key={index}
            className="h-12 rounded-md w-full flex px-2 items-center gap-3 hover:bg-gray-200 cursor-pointer"
            onClick={() => handleLocationClick(location)}
          >
            <MdEditLocation className="text-xl" />
            <h4 className="text-sm sm:text-base">{location}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LocationSearchPanel;
