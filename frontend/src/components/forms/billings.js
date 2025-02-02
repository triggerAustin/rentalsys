import React from "react";
import ReusableForm from "./form"; // Assuming you have the ReusableForm component

const BillingForm = ({ onSubmit }) => {
  const fields = [
    { name: "house", label: "House", type: "select", options: ["House A", "House B", "House C"], required: true },
    { name: "amount", label: "Amount", type: "number", placeholder: "Enter the billing amount", required: true },
    { name: "billType", label: "Bill Type", type: "select", options: ["Rent", "Utility", "Maintenance", "Other"], required: true },
    { name: "billDate", label: "Billing Date", type: "date", required: true },
  ];

  return (
    <ReusableForm title="Create Billing" fields={fields} onSubmit={onSubmit} />
  );
};

export default BillingForm;
