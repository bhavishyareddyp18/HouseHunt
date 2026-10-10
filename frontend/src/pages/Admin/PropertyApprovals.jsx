import {
  useEffect,
  useState
} from "react";

import approvalService from "../../services/approvalService";

import PendingPropertyCard from "../../components/admin/PendingPropertyCard";

import PropertyApprovalModal from "../../components/admin/PropertyApprovalModal";

import ApprovalHistoryTable from "../../components/admin/ApprovalHistoryTable";

import DashboardLayout from "../../components/dashboard/DashboardLayout";

function PropertyApprovals() {

  const [

    properties,

    setProperties

  ] = useState([]);

  const [

    history,

    setHistory

  ] = useState([]);

  const [

    selectedProperty,

    setSelectedProperty

  ] = useState(null);

  useEffect(() => {

    loadData();

  }, []);

  const loadData =
  async () => {

    try {

      const pending =

        await approvalService
        .getPendingProperties();

      const approvalHistory =

        await approvalService
        .getApprovalHistory();

      setProperties(
        pending
      );

      setHistory(
        approvalHistory
      );

    }

    catch(error){

      console.error(error);
    }
  };

  const approveProperty =
  async (
    propertyId
  ) => {

    try {

      await approvalService
      .approveProperty(
        propertyId
      );

      loadData();

      setSelectedProperty(
        null
      );

    }

    catch(error){

      console.error(error);
    }
  };

  const rejectProperty =
  async (

    propertyId,

    reason

  ) => {

    try {

      await approvalService
      .rejectProperty(

        propertyId,

        reason

      );

      loadData();

      setSelectedProperty(
        null
      );

    }

    catch(error){

      console.error(error);
    }
  };

  return (

    <DashboardLayout
      title="Property Approvals"
    >

      <h4
        className="mb-4"
      >

        Pending Properties

      </h4>

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
                "
              >

                <PendingPropertyCard

                  property={
                    property
                  }

                  onReview={
                    setSelectedProperty
                  }

                />

              </div>

            )
          )

        }

      </div>

      <ApprovalHistoryTable
        properties={history}
      />

      <PropertyApprovalModal

        property={
          selectedProperty
        }

        onApprove={
          approveProperty
        }

        onReject={
          rejectProperty
        }

        onClose={() =>
          setSelectedProperty(
            null
          )
        }

      />

    </DashboardLayout>

  );
}

export default PropertyApprovals;
