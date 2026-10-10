import {
  useState
} from "react";

import PropertyForm
from "./PropertyForm";

import ownerPropertyService
from "../../services/ownerPropertyService";

function AddProperty() {

  const [formData,
    setFormData] =
    useState({

      title:"",
      rent:"",
      description:"",
      city:"",
      bedrooms:"",
      bathrooms:""

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
  async (e) => {

    e.preventDefault();

    await ownerPropertyService
    .addProperty(
      formData
    );

    alert(
      "Property Added"
    );
  };

  return (

    <div className="container py-5">

      <h1>
        Add Property
      </h1>

      <PropertyForm

        formData={formData}

        handleChange={handleChange}

        handleSubmit={handleSubmit}

        buttonText="Add Property"

      />

    </div>

  );
}

export default AddProperty;