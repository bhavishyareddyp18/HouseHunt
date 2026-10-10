import { useEffect, useState } from "react";

import PropertyMap from "../../components/maps/PropertyMap";

import NearbyPlaces from "../../components/maps/NearbyPlaces";

import api from "../../services/api";

function PropertyMapPage() {

  const [properties, setProperties] = useState([]);

  useEffect(() => {
    loadProperties();
  }, []);

  const loadProperties = async () => {

    const res =
      await api.get("/properties");

    setProperties(res.data);

  };

  const center = properties?.[0];

  return (

    <div className="container mt-4">

      <h3>Property Locations</h3>

      <PropertyMap
        properties={properties}
      />

      {center && (

        <NearbyPlaces
          lat={center.lat}
          lng={center.lng}
        />

      )}

    </div>

  );

}

export default PropertyMapPage;