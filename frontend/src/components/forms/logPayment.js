import React from "react";
import ReusableForm from "./form"; // Assuming you have the ReusableForm component

const PaymentForm = ({ onSubmit }) => {
  const fields = [
    { name: "house", label: "House", type: "select", options: ["House A", "House B", "House C"], required: true },
    { name: "room", label: "Room", type: "select", options: ["Room 1", "Room 2", "Room 3"], required: true },
    { name: "paymentDate", label: "Payment Date", type: "date", required: true },
    { name: "paymentAmount", label: "Payment Amount", type: "number", placeholder: "Enter payment amount", required: true },
  ];

  return (
    <ReusableForm title="Log Payment" fields={fields} onSubmit={onSubmit} />
  );
};

export default PaymentForm;
