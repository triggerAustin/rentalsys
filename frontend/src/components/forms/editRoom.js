import React from "react";
import ReusableForm from "./form"; // Assuming you have a reusable form component

const EditRoomForm = ({ onSubmit }) => {
  const fields = [
    { name: "house", label: "Select House", type: "select", options: ["House A", "House B", "House C"], required: true },
    { name: "room", label: "Select Room", type: "select", options: ["Room 1", "Room 2", "Room 3"], required: true },
    { name: "unitId", label: "Unit ID", type: "hidden" }, // Hidden field for unit ID
    { name: "unitNumber", label: "Unit Number", type: "text", placeholder: "Enter unit number", required: true },
    { 
      name: "unitType", 
      label: "Unit Type", 
      type: "select", 
      options: [
        "Apartment", "Bungalow", "Bed sitter", "Single Room", "Double Room", 
        "1 Bedroom", "2 Bedroom", "Shop"
      ], 
      required: true 
    },
    { name: "paymentRate", label: "Payment Rate (per month)", type: "number", placeholder: "Enter payment rate", required: true },
  ];

  return <ReusableForm title="Edit Room Details" fields={fields} onSubmit={onSubmit} />;
};

export default EditRoomForm;
