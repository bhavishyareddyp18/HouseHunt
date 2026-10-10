function PropertyMap({ properties = [] }) {
  const property = properties[0];

  if (!property) {
    return (
      <div className="card p-3">
        <p className="text-muted mb-0">Map location unavailable.</p>
      </div>
    );
  }

  const { lat, lng, address, city, state } = property;
  const query =
    lat && lng
      ? `${lat},${lng}`
      : [address, city, state].filter(Boolean).join(", ");

  return (
    <div className="property-map">
      <iframe
        title="property-map"
        width="100%"
        height="400"
        loading="lazy"
        allowFullScreen
        style={{ border: 0, borderRadius: "12px" }}
        src={`https://maps.google.com/maps?q=${encodeURIComponent(
          query
        )}&z=15&output=embed`}
      />
    </div>
  );
}

export default PropertyMap;
