import "./PropertyFilters.css";

function PropertyFilters({

  filters,
  setFilters

}) {

  const handleChange =
  (e) => {

    setFilters({

      ...filters,

      [e.target.name]:
      e.target.value

    });
  };

  return (

    <div className="filter-box">

      <div className="row">

        <div className="col-md-3">

          <select

            className="form-select"

            name="type"

            onChange={
              handleChange
            }

          >

            <option value="">
              Property Type
            </option>

            <option value="house">
              House
            </option>

            <option value="apartment">
              Apartment
            </option>

            <option value="villa">
              Villa
            </option>

            <option value="commercial">
              Commercial
            </option>

          </select>

        </div>

        <div className="col-md-3">

          <input

            type="number"

            name="minPrice"

            placeholder="
            Min Price
            "

            className="
            form-control
            "

            onChange={
              handleChange
            }

          />

        </div>

        <div className="col-md-3">

          <input

            type="number"

            name="maxPrice"

            placeholder="
            Max Price
            "

            className="
            form-control
            "

            onChange={
              handleChange
            }

          />

        </div>

        <div className="col-md-3">

          <select

            className="
            form-select
            "

            name="sort"

            onChange={
              handleChange
            }

          >

            <option value="">
              Sort By
            </option>

            <option value="low">
              Lowest Price
            </option>

            <option value="high">
              Highest Price
            </option>

            <option value="newest">
              Newest
            </option>

          </select>

        </div>

      </div>

    </div>

  );
}

export default PropertyFilters;