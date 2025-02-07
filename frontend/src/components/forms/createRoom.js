import React, { useState } from "react";
import ReusableForm from "./form"; // Assuming you have the ReusableForm component

const CreateRoomForm = ({ onSubmit }) => {
  const [addedBills, setAddedBills] = useState([]);

  // Function to add more bill fields dynamically
  const addAddedBillsFields = () => {
    setAddedBills([...addedBills, { name: `bill_${addedBills.length + 1}`, label: `Bill ${addedBills.length + 1}`, type: "text", placeholder: "Enter bill type" }]);
  };

  const fields = [
    { name: "house_id", type: "hidden", value: "" }, // Hidden House ID field
    { name: "unit_number", label: "Unit Number", type: "text", placeholder: "Enter unit number", required: true },
    { 
      name: "unit_type", 
      label: "Unit Type", 
      type: "select", 
      options: ["Apartment", "Bungalow", "Bed sitter", "Single Room", "Double Room", "1 Bedroom", "2 Bedroom", "Shop"], 
      required: true 
    },
    { name: "payment_rate", label: "Payment Rate (per month)", type: "number", placeholder: "Enter payment rate", required: true },
    ...addedBills, // Include dynamically added bill fields
  ];

  return (
    <div>
      <ReusableForm title="Create Room" fields={fields} onSubmit={onSubmit} />
      
      {/* Add More Bills Button */}
      <button 
        className="mt-2 p-2 bg-blue-500 text-white rounded"
        type="button"
        onClick={addAddedBillsFields}
      >
        Add More Bills
      </button>
    </div>
  );
};

export default CreateRoomForm;
