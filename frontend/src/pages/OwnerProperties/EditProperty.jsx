import {
  useState
} from "react";

import PropertyForm from "./PropertyForm";

function EditProperty() {

  const [formData,
    setFormData] =
    useState({

      title:"Luxury Villa",
      rent:"45000",
      description:"",
      city:"Hyderabad",
      bedrooms:"4",
      bathrooms:"3"

    });

  const handleChange =
  (e) => {

    setFormData({

      ...formData,

      [e.target.name]:
      e.target.value

    });
  };

  const handleSubmit =
  (e) => {

    e.preventDefault();

    alert(
      "Property Updated"
    );
  };

  return (

    <div className="container py-5">

      <h1>
        Edit Property
      </h1>

      <PropertyForm

        formData={formData}

        handleChange={handleChange}

        handleSubmit={handleSubmit}

        buttonText="Update Property"

      />

    </div>

  );
}

export default EditProperty;