function NearbyPlaces({ lat, lng }) {
  const hasCoordinates = lat != null && lng != null;

  return (
    <div className="card p-3">
      <h5 className="mb-3">Nearby Facilities</h5>
      {hasCoordinates ? (
        <ul className="list-unstyled mb-0">
          <li>Schools within 2 km</li>
          <li>Hospitals within 3 km</li>
          <li>Shopping centers within 1.5 km</li>
          <li>Public transport within 500 m</li>
        </ul>
      ) : (
        <p className="text-muted mb-0">Location data unavailable.</p>
      )}
    </div>
  );
}

export default NearbyPlaces;
