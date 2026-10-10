import { Marker, InfoWindow } from "@react-google-maps/api";

import { useState } from "react";

function PropertyMarker({ property }) {

  const [open, setOpen] = useState(false);

  return (

    <Marker
      position={{
        lat: property.lat,
        lng: property.lng
      }}
      onClick={() => setOpen(!open)}
    >

      {open && (
        <InfoWindow onCloseClick={() => setOpen(false)}>

          <div>

            <h5>{property.title}</h5>

            <p>₹{property.rent}</p>

            <p>{property.city}</p>

          </div>

        </InfoWindow>
      )}

    </Marker>

  );
}

export default PropertyMarker;