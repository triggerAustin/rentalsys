import React from "react";
import ReusableForm from "./form"; // Assuming you have the ReusableForm component

const CreateHouseForm = ({ onSubmit }) => {
  const fields = [
    { name: "houseName", label: "House Name", type: "text", placeholder: "Enter house name", required: true },
    { name: "houseAddress", label: "House Address", type: "text", placeholder: "Enter house address", required: true },
    { name: "houseType", label: "House Type", type: "select", options: ["Apartment", "Villa", "Detached", "Semi-detached"], required: true },
    { name: "houseRent", label: "Rent Amount", type: "number", placeholder: "Enter rent amount", required: true },
    { name: "houseOwner", label: "House Owner", type: "text", placeholder: "Enter house owner's name", required: true },
    { name: "houseStatus", label: "House Status", type: "select", options: ["Available", "Rented", "Under Maintenance"], required: true },
  ];

  return (
    <ReusableForm title="Create House" fields={fields} onSubmit={onSubmit} />
  );
};

export default CreateHouseForm;
