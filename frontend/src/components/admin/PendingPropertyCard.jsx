import PropertyStatusBadge from "./PropertyStatusBadge";

function PendingPropertyCard({

  property,

  onReview

}) {

  return (

    <div
      className="
      card
      mb-4
      shadow-sm
      "
    >

      <img

        src={
          property.images?.[0]
        }

        alt={property.title}

        className="
        card-img-top
        "

        style={{
          height:"220px",
          objectFit:"cover"
        }}

      />

      <div className="card-body">

        <div
          className="
          d-flex
          justify-content-between
          "
        >

          <h5>
            {property.title}
          </h5>

          <PropertyStatusBadge
            status={
              property.status
            }
          />

        </div>

        <p>
          {property.city}
        </p>

        <p>

          ₹

          {
            property.rent
          }

        </p>

        <button

          className="
          btn
          btn-primary
          "

          onClick={() =>
            onReview(
              property
            )
          }

        >

          Review Property

        </button>

      </div>

    </div>

  );
}

export default PendingPropertyCard;