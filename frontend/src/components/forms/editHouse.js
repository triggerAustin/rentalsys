import React from "react";
import ReusableForm from "./form"; // Assuming you have a reusable form component

const EditHouseForm = ({ onSubmit }) => {
  const fields = [
    { name: "house", label: "House", type: "select", options: ["House 1", "House 2", "House 3"], required: true },
    { name: "houseName", label: "House Name", type: "text", placeholder: "Enter house name", required: true },
    { name: "lrNumber", label: "LR Number", type: "text", placeholder: "Enter LR Number", required: true },
    { name: "landlordName", label: "Landlord Name", type: "text", placeholder: "Enter landlord's name", required: true },
    { name: "landlordContact", label: "Landlord Contact", type: "text", pattern: "[0-9]{10}", placeholder: "Enter 10-digit phone number", required: true },
    { name: "landlordNationalId", label: "Landlord National ID", type: "text", placeholder: "Enter landlord's ID", required: true },
    { name: "agreedCommission", label: "Agreed Commission", type: "number", placeholder: "Enter agreed commission", required: true },

    // Water Bill
    { name: "waterBill", label: "Water Bill", type: "checkbox" },
    { name: "waterBillPrice", label: "Water Bill Price", type: "number", placeholder: "Price per unit" },

    // Garbage Collection
    { name: "garbageCollection", label: "Garbage Collection", type: "checkbox" },
    { name: "garbageCollectionPrice", label: "Garbage Collection Price", type: "number", placeholder: "Garbage collection price" },

    // Electricity Bill
    { name: "electricityBill", label: "Electricity Bill", type: "checkbox" },
    { name: "electricityBillPrice", label: "Electricity Bill Price", type: "number", placeholder: "Electricity bill price" },

    // Dynamic Added Fields
    { name: "addedField1Name", label: "Added Field 1 Name", type: "text", placeholder: "Enter field name" },
    { name: "addedField1Price", label: "Added Field 1 Price", type: "number", placeholder: "Enter price" },

    { name: "addedField2Name", label: "Added Field 2 Name", type: "text", placeholder: "Enter field name" },
    { name: "addedField2Price", label: "Added Field 2 Price", type: "number", placeholder: "Enter price" },

    { name: "addedField3Name", label: "Added Field 3 Name", type: "text", placeholder: "Enter field name" },
    { name: "addedField3Price", label: "Added Field 3 Price", type: "number", placeholder: "Enter price" },

    { name: "addedField4Name", label: "Added Field 4 Name", type: "text", placeholder: "Enter field name" },
    { name: "addedField4Price", label: "Added Field 4 Price", type: "number", placeholder: "Enter price" },

    { name: "addedField5Name", label: "Added Field 5 Name", type: "text", placeholder: "Enter field name" },
    { name: "addedField5Price", label: "Added Field 5 Price", type: "number", placeholder: "Enter price" },

    { name: "addedField6Name", label: "Added Field 6 Name", type: "text", placeholder: "Enter field name" },
    { name: "addedField6Price", label: "Added Field 6 Price", type: "number", placeholder: "Enter price" },
  ];

  return <ReusableForm title="Edit House Details" fields={fields} onSubmit={onSubmit} />;
};

export default EditHouseForm;
