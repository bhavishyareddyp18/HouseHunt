import "./VirtualTour.css";

function VirtualTour({

  tourUrl

}) {

  return (

    <div
      className="
      virtual-tour
      "
    >

      <iframe

        title="virtual-tour"

        src={tourUrl}

        width="100%"

        height="500"

        allowFullScreen

      />

    </div>

  );
}

export default VirtualTour;