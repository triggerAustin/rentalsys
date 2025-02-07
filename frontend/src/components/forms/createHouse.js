import React from "react";
import ReusableForm from "./form"; // Assuming you have the ReusableForm component

const CreateHouseForm = ({ onSubmit }) => {
  const fields = [
    { name: "House Name", label: "house_name", type: "text", placeholder: "Enter house name", required: true },
    { name: "LR Number", label: "lr_number", type: "text", placeholder: "Enter LR number", required: true },
    { name: "Landlord Name", label: "landlord_name", type: "text", placeholder: "Enter landlord's name", required: true },
    { name: "Landlord Contact", label: "landlord_contact", type: "text", placeholder: "Enter landlord's contact", pattern: "[0-9]{10}", required: true, title: "Please enter a valid 10-digit phone number" },
    { name: "Landlord National ID", label: "landlord_national_id", type: "text", placeholder: "Enter landlord's national ID", required: true },
    { name: "Agreed Commission", label: "agreed_commission", type: "number", step: "0.01", placeholder: "Enter agreed commission", required: true },
    { name: "Water Bill", label: "water_bill", type: "checkbox", value: "1", onClick: "togglePriceField(this, 'water_bill_price')" },
    { name: "Water Bill Price", label: "water_bill_price", type: "number", step: "0.01", min: "0", placeholder: "Price per unit", disabled: true },
    { name: "Garbage Collection", label: "garbage_collection", type: "checkbox", value: "1", onClick: "togglePriceField(this, 'garbage_collection_price')" },
    { name: "Garbage Collection Price", label: "garbage_collection_price", type: "number", step: "0.01", min: "0", placeholder: "Fee", disabled: true },
    { name: "Electricity Bill", label: "electricity_bill", type: "checkbox", value: "1", onClick: "togglePriceField(this, 'electricity_bill_price')" },
    { name: "Electricity Bill Price", label: "electricity_bill_price", type: "number", step: "0.01", min: "0", placeholder: "Fee", disabled: true },
  ];

  return (
    <ReusableForm title="Create House" fields={fields} onSubmit={onSubmit} />
  );
};

export default CreateHouseForm;