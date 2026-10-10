import "./PropertyMap.css";

function PropertyMap({

  address

}) {

  return (

    <div
      className="
      property-map
      "
    >

      <iframe

        title="map"

        width="100%"

        height="400"

        loading="lazy"

        allowFullScreen

        src={`https://maps.google.com/maps?q=${encodeURIComponent(
          address
        )}&z=15&output=embed`}

      />

    </div>

  );
}

export default PropertyMap;