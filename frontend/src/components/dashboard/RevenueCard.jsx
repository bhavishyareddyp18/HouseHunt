import {
  FaRupeeSign
} from "react-icons/fa";

function RevenueCard({

  revenue = 0

}) {

  return (

    <div
      className="
      card
      p-4
      h-100
      "
    >

      <div
        className="
        d-flex
        justify-content-between
        align-items-center
        "
      >

        <div>

          <h6>
            Estimated Revenue
          </h6>

          <h3>

            ₹

            {
              revenue.toLocaleString()
            }

          </h3>

        </div>

        <FaRupeeSign
          size={35}
        />

      </div>

    </div>

  );
}

export default RevenueCard;