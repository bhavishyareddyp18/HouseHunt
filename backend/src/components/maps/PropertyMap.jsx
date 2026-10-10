import {
  GoogleMap,
  useLoadScript
} from "@react-google-maps/api";

import PropertyMarker from "./PropertyMarker";

const containerStyle = {
  width: "100%",
  height: "500px"
};

function PropertyMap({ properties }) {

  const { isLoaded } = useLoadScript({

    googleMapsApiKey:
      import.meta.env
      .VITE_GOOGLE_MAPS_API_KEY

  });

  const center = {

    lat: properties?.[0]?.lat || 17.3850,

    lng: properties?.[0]?.lng || 78.4867

  };

  if (!isLoaded)
    return <p>Loading Map...</p>;

  return (

    <GoogleMap
      mapContainerStyle={containerStyle}
      zoom={10}
      center={center}
    >

      {properties.map((p) => (

        <PropertyMarker
          key={p._id}
          property={p}
        />

      ))}

    </GoogleMap>

  );
}

export default PropertyMap;