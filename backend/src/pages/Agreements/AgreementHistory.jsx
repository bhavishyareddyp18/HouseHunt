import { useEffect, useState } from "react";

import agreementService from "../../services/agreementService";

import AgreementCard from "../../components/agreements/AgreementCard";

import { saveAs } from "file-saver";

function AgreementHistory() {

  const [agreements, setAgreements] = useState([]);

  useEffect(() => {
    load();
  }, []);

  const load = async () => {

    const data =
      await agreementService.getAgreements();

    setAgreements(data);

  };

  const download = async (id) => {

    const blob =
      await agreementService.generateAgreement({
        agreementId: id
      });

    saveAs(blob, "rental-agreement.pdf");

  };

  return (

    <div className="container mt-4">

      <h3>Rental Agreements</h3>

      {

        agreements.map(a => (

          <AgreementCard
            key={a._id}
            agreement={a}
            onDownload={download}
          />

        ))

      }

    </div>

  );
}

export default AgreementHistory;