import React from "react";
import Card from "../card";

const HouseCard = ({ houseDetails, onEdit, onDelete }) => {
  // Destructure the house details to use in the fields
  const { houseName, address, landlordTel, paymentRate, landlordId, image, lrNumber } = houseDetails;

  // Define dynamic fields for the card
  const fields = [
    { label: "House Name", value: houseName },
    { label: "Address", value: address },
    { label: "LR Number", value: lrNumber },
    { label: "Landlord Tel", value: landlordTel },
    { label: "Landlord id", value: landlordId },
    { label: "Payment Rate (per month)", value: `$${paymentRate}` },
  ];

  // Define actions for the card (Edit, Delete)
  const actions = [
    { label: "Edit", onClick: onEdit, className: "bg-blue-500 hover:bg-blue-600" },
  ];

  return (
    <Card
      title="House Details"
      image={image} // Optional house image
      fields={fields}
      actions={actions}
    />
  );
};

export default HouseCard;
