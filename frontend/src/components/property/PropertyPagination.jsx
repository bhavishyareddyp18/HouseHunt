function PropertyPagination({

  currentPage,
  totalPages,
  onPageChange

}) {

  const pages =
  [...Array(totalPages).keys()];

  return (

    <div
      className="
      d-flex
      justify-content-center
      mt-5
      "
    >

      {
        pages.map(
          (page) => (

            <button

              key={page}

              className={`
              btn
              mx-1
              ${
                currentPage ===
                page + 1
                ? "btn-primary"
                : "btn-outline-primary"
              }
              `}

              onClick={() =>
                onPageChange(
                  page + 1
                )
              }

            >

              {page + 1}

            </button>
          )
        )
      }

    </div>

  );
}

export default PropertyPagination;