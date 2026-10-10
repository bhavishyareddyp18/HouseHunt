import { useEffect, useState } from "react";

import mapService from "../../services/mapService";

function NearbyPlaces({ lat, lng }) {

  const [places, setPlaces] = useState([]);

  const [type, setType] = useState("school");

  useEffect(() => {
    loadPlaces(type);
  }, [type]);

  const loadPlaces = async (t) => {

    const data =
      await mapService.getNearbyPlaces(
        lat,
        lng,
        t
      );

    setPlaces(data);

  };

  return (

    <div className="card p-3">

      <h5>Nearby Places</h5>

      <select
        className="form-select mb-3"
        onChange={(e) => setType(e.target.value)}
      >

        <option value="school">Schools</option>

        <option value="hospital">Hospitals</option>

        <option value="restaurant">Restaurants</option>

        <option value="bank">Banks</option>

      </select>

      <ul>

        {places.map((p, i) => (

          <li key={i}>

            {p.name}

          </li>

        ))}

      </ul>

    </div>

  );
}

export default NearbyPlaces;