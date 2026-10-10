const getNearbyPlaces = async (lat, lng, type) => {

  const apiKey =
    import.meta.env
    .VITE_GOOGLE_MAPS_API_KEY;

  const url =
    `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=2000&type=${type}&key=${apiKey}`;

  const res =
    await fetch(url);

  const data =
    await res.json();

  return data.results;
};

export default {
  getNearbyPlaces
};