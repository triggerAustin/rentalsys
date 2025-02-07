import React from "react";
import ReusableForm from "./form"; // Assuming you have a reusable form component

const CreateTenantForm = ({ onSubmit }) => {
  const fields = [
    { name: "unitId", type: "hidden" },
    { name: "roomNumber", type: "hidden" },
    { name: "tenantPhoto", label: "Tenant Photo (Optional)", type: "file", accept: "image/*" },
    { name: "tenantName", label: "Tenant Name", type: "text", placeholder: "Enter tenant's name", required: true },
    { name: "tenantNationalID", label: "Tenant National ID", type: "text", placeholder: "Enter national ID number", required: true },
    { name: "tenantPhone", label: "Tenant Phone", type: "tel", placeholder: "Enter phone number", required: true },
    { name: "currentMeterReading", label: "Current Meter Reading", type: "number", placeholder: "Enter current meter reading" },
    { name: "entryDate", label: "Date of Entry", type: "date", required: true },
    { name: "rentDeposit", label: "Deposit Paid", type: "number", placeholder: "Enter rent deposit amount" },
    { name: "billsDeposit", label: "Bills Deposit", type: "number", placeholder: "Enter bills deposit amount" },
  ];

  return <ReusableForm title="Add Tenant" fields={fields} onSubmit={onSubmit} />;
};

export default CreateTenantForm;
