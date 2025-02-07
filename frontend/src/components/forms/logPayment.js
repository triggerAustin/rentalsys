import React from "react";
import ReusableForm from "./form"; // Assuming you have a reusable form component

const PaymentForm = ({ onSubmit }) => {
  const fields = [
    { name: "house", label: "House", type: "select", options: ["House A", "House B", "House C"], required: true },
    { name: "room", label: "Room", type: "select", options: ["Room 1", "Room 2", "Room 3"], required: true },
    { name: "paymentAmount", label: "Amount Paid", type: "number", placeholder: "Enter amount paid", required: true },
    { name: "paymentMethod", label: "Method of Payment", type: "text", placeholder: "Enter payment method", required: true },
    { name: "transactionReference", label: "Transaction Reference", type: "text", placeholder: "Enter transaction reference", required: true },
    { name: "comment", label: "Comment", type: "textarea", placeholder: "Enter any comment (optional)" },
    { name: "paymentDate", label: "Payment Date", type: "date", required: true },
  ];

  return <ReusableForm title="Log Payment" fields={fields} onSubmit={onSubmit} />;
};

export default PaymentForm;
