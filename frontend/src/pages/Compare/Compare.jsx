import {
  useCompare
} from "../../context/CompareContext";

function Compare() {

  const {
    compareList
  } = useCompare();

  return (

    <div className="container py-5">

      <h1>
        Compare Properties
      </h1>

      <table
        className="
        table table-bordered
        "
      >

        <thead>

          <tr>

            <th>
              Feature
            </th>

            {
              compareList.map(
                property => (

                  <th
                    key={
                      property._id
                    }
                  >

                    {
                      property.title
                    }

                  </th>

                )
              )
            }

          </tr>

        </thead>

        <tbody>

          <tr>

            <td>
              Rent
            </td>

            {
              compareList.map(
                property => (

                  <td
                    key={
                      property._id
                    }
                  >

                    ₹{
                      property.rent
                    }

                  </td>

                )
              )
            }

          </tr>

          <tr>

            <td>
              Bedrooms
            </td>

            {
              compareList.map(
                property => (

                  <td
                    key={
                      property._id
                    }
                  >

                    {
                      property.bedrooms
                    }

                  </td>

                )
              )
            }

          </tr>

        </tbody>

      </table>

    </div>

  );
}

export default Compare;