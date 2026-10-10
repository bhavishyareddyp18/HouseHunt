function PropertyOwnerCard({

  owner

}) {

  return (

    <div
      className="
      owner-card
      "
    >

      <img
        src={owner.image}
        alt="owner"
      />

      <div>

        <h5>
          {owner.name}
        </h5>

        <p>
          {owner.email}
        </p>

        <p>
          {owner.phone}
        </p>

      </div>

    </div>

  );
}

export default PropertyOwnerCard;