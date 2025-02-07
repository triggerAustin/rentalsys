import React from "react";
import ReusableForm from "./form"; // Assuming you have a reusable form component

const EditTenantForm = ({ onSubmit }) => {
  const fields = [
    { name: "house", label: "Select House", type: "select", options: ["House A", "House B", "House C"], required: true },
    { name: "room", label: "Select Room", type: "select", options: ["Room 1", "Room 2", "Room 3"], required: true },
    { name: "tenantId", label: "Tenant ID", type: "hidden" }, // Hidden field for tenant ID
    { name: "name", label: "Tenant Name", type: "text", placeholder: "Enter tenant name", required: true },
    { name: "nationalId", label: "Tenant ID", type: "number", placeholder: "Enter National ID", required: true },
    { name: "phone", label: "Tenant Phone", type: "tel", placeholder: "Enter phone number", required: true },
    { name: "currentMeterReading", label: "Current Meter Reading", type: "number", placeholder: "Enter meter reading", required: true },
    { name: "dateOfEntry", label: "Date of Entry", type: "date", required: true },
  ];

  return <ReusableForm title="Edit Tenant Details" fields={fields} onSubmit={onSubmit} />;
};

export default EditTenantForm;
