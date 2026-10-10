import { useState } from "react";
import "./PropertyGallery.css";

function PropertyGallery({ images = [] }) {

  const [activeImage, setActiveImage] =
    useState(0);

  return (

    <div>

      <img
        src={images[activeImage]}
        alt="property"
        className="gallery-main-image"
      />

      <div className="gallery-thumbnails">

        {images.map((image, index) => (

          <img
            key={index}
            src={image}
            alt="thumb"
            className={
              activeImage === index
                ? "gallery-thumb active"
                : "gallery-thumb"
            }
            onClick={() =>
              setActiveImage(index)
            }
          />

        ))}

      </div>

    </div>

  );
}

export default PropertyGallery;