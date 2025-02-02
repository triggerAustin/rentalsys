import React from "react";
import ReusableForm from "./form"; // Assuming you have the ReusableForm component

const CreateTenantForm = ({ onSubmit }) => {
  const fields = [
    { name: "tenantName", label: "Tenant Name", type: "text", placeholder: "Enter tenant's name", required: true },
    { name: "tenantEmail", label: "Tenant Email", type: "email", placeholder: "Enter tenant's email", required: true },
    { name: "tenantPhone", label: "Tenant Phone", type: "tel", placeholder: "Enter tenant's phone number", required: true },
    { name: "tenantID", label: "Tenant ID", type: "text", placeholder: "Enter tenant ID", required: true },
    { name: "tenantStartDate", label: "Start Date", type: "date", required: true },
    { name: "tenantEndDate", label: "End Date", type: "date", required: false },
  ];

  return (
    <ReusableForm title="Create Tenant" fields={fields} onSubmit={onSubmit} />
  );
};

export default CreateTenantForm;
