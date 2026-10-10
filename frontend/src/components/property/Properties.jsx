import "./Properties.css";

import {
  useState
} from "react";

import PropertyCard from "../../components/property/PropertyCard";
import PropertyFilters from "../../components/property/PropertyFilters";
import PropertySearchBar from "../../components/property/PropertySearchBar";
import PropertyPagination from "../../components/property/PropertyPagination";

function Properties() {

  const [search,
    setSearch] =
    useState("");

  const [filters,
    setFilters] =
    useState({});

  const properties = [

    {
      _id:"1",
      title:"Luxury Villa",
      city:"Hyderabad",
      rent:45000,
      bedrooms:4,
      bathrooms:3,
      image:
      "https://images.unsplash.com/photo-1613977257363-707ba9348227"
    },
       
    localStorage.setItem(
  "recentSearch",
  JSON.stringify({
    city: "Hyderabad",
    type: "Apartment",
    price: 30000
  })
),
    {
      _id:"2",
      title:"Modern Apartment",
      city:"Bangalore",
      rent:25000,
      bedrooms:2,
      bathrooms:2,
      image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
    }

  ];

  return (

    <div className="properties-page">

      <div className="container">

        <h1>
          Explore Properties
        </h1>

        <PropertySearchBar

          search={search}

          setSearch={setSearch}

        /> 
        

        <PropertyFilters

          filters={filters}

          setFilters={setFilters}

        />
          
        <div className="row">

          {
            properties.map(
              property => (

                <div

                  key={
                    property._id
                  }

                  className="
                  col-lg-4
                  col-md-6
                  mb-4
                  "

                >

                  <PropertyCard

                    property={
                      property
                    }

                  />

                </div>
              )
            )
          }

        </div>

        <PropertyPagination

          currentPage={1}

          totalPages={5}

          onPageChange={
            (page) =>
            console.log(page)
          }

        />

      </div>

    </div>

  );
}

export default Properties;