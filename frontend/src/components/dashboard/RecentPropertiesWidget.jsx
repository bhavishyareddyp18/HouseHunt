function RecentPropertiesWidget({

  properties = []

}) {

  return (

    <div className="card p-4">

      <h5>
        Recent Properties
      </h5>

      <hr />

      {
        properties.map(property => (

          <div
            key={property._id}
            className="mb-2"
          >

            {property.title}

            {" - "}

            {property.status}

          </div>

        ))
      }

    </div>

  );
}

export default RecentPropertiesWidget;