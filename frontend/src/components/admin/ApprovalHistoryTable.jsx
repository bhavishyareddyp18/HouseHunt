import PropertyStatusBadge from "./PropertyStatusBadge";

function ApprovalHistoryTable({

  properties

}) {

  return (

    <div
      className="
      card
      p-4
      "
    >

      <h5>
        Approval History
      </h5>

      <table
        className="
        table
        "
      >

        <thead>

          <tr>

            <th>
              Property
            </th>

            <th>
              Owner
            </th>

            <th>
              Status
            </th>

            <th>
              Reason
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
                    {
                      property.ownerName
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

                    {
                      property.rejectionReason ||
                      "-"
                    }

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

export default ApprovalHistoryTable;