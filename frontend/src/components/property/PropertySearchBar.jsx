import "./PropertySearchBar.css";

function PropertySearchBar({

  search,
  setSearch

}) {

  return (

    <div className="search-wrapper">

      <input

        type="text"

        className="form-control"

        placeholder="
        Search by city,
        area,
        address
        "

        value={search}

        onChange={(e) =>
          setSearch(
            e.target.value
          )
        }

      />

    </div>

  );
}

export default PropertySearchBar;