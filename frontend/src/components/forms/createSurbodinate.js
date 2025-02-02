import React from "react";
import ReusableForm from "./form"; // Assuming you have the ReusableForm component

const CreateSubordinateForm = ({ onSubmit }) => {
  const fields = [
    { name: "subordinateName", label: "Subordinate Name", type: "text", placeholder: "Enter subordinate's name", required: true },
    { name: "subordinateEmail", label: "Subordinate Email", type: "email", placeholder: "Enter subordinate's email", required: true },
    { name: "subordinatePhone", label: "Subordinate Phone", type: "tel", placeholder: "Enter subordinate's phone number", required: true },
    { name: "subordinateRole", label: "Role", type: "select", options: ["Admin", "Manager", "Assistant", "Staff"], required: true },
    { name: "subordinateStartDate", label: "Start Date", type: "date", required: true },
    { name: "subordinateEndDate", label: "End Date", type: "date", required: false },
  ];

  return (
    <ReusableForm title="Create Subordinate" fields={fields} onSubmit={onSubmit} />
  );
};

export default CreateSubordinateForm;
