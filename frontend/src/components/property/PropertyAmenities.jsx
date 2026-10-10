import {
  FaCar,
  FaWifi,
  FaPaw,
  FaDumbbell
} from "react-icons/fa";

function PropertyAmenities({

  amenities = []

}) {

  const icons = {

    Parking: <FaCar />,

    WiFi: <FaWifi />,

    "Pet Friendly":
      <FaPaw />,

    Gym:
      <FaDumbbell />
  };

  return (

    <div
      className="
      amenities-grid
      "
    >

      {amenities.map(
        (
          amenity,
          index
        ) => (

          <div key={index}>

            {
              icons[amenity]
            }

            {" "}

            {amenity}

          </div>

        )
      )}

    </div>

  );
}

export default PropertyAmenities;