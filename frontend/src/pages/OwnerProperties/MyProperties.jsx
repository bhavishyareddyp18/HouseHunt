import {
  Link
} from "react-router-dom";

import PropertyStatusBadge
from "../../components/property/PropertyStatusBadge";

function MyProperties() {

  const properties = [

    {
      _id:"1",
      title:"Luxury Villa",
      status:"approved"
    },

    {
      _id:"2",
      title:"Apartment",
      status:"pending"
    }

  ];

  return (

    <div className="container py-5">

      <div
        className="
        d-flex
        justify-content-between
        mb-4
        "
      >

        <h1>
          My Properties
        </h1>

        <Link

          to="/owner/add-property"

          className="
          btn btn-primary
          "

        >

          Add Property

        </Link>

      </div>

      <table
        className="
        table table-bordered
        "
      >

        <thead>

          <tr>

            <th>
              Title
            </th>

            <th>
              Status
            </th>

            <th>
              Actions
            </th>

          </tr>

        </thead>

        <tbody>

          {
            properties.map(
              property => (

                <tr
                  key={
                    property._id
                  }
                >

                  <td>
                    {
                      property.title
                    }
                  </td>

                  <td>

                    <PropertyStatusBadge
                      status={
                        property.status
                      }
                    />

                  </td>

                  <td>

                    <Link

                      to={`/owner/edit-property/${property._id}`}

                      className="
                      btn btn-warning btn-sm me-2
                      "

                    >

                      Edit

                    </Link>

                    <button
                      className="
                      btn btn-danger btn-sm
                      "
                    >
                      Delete
                    </button>

                  </td>

                </tr>

              )
            )
          }

        </tbody>

      </table>

    </div>

  );
}

export default MyProperties;