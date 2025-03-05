import React from "react";
import Card from "../card";

const HouseCard = ({ houseDetails }) => {
  if (!houseDetails) return null;

  const {
    house_name,
    address,
    landlordTel,
    paymentRate,
    landlordId,
    image,
    lr_number,
  } = houseDetails;

  const fields = [
    { label: "House Name", value: house_name },
    { label: "Address", value: address },
    { label: "LR Number", value: lr_number },
    { label: "Landlord Tel", value: landlordTel },
    { label: "Landlord ID", value: landlordId },
    { label: "Payment Rate (per month)", value: `$${paymentRate}` },
  ];

  return <Card title="House Details" image={image} fields={fields} />;
};

export default HouseCard;
