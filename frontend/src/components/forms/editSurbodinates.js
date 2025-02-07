import React from "react";
import ReusableForm from "./form"; // Assuming you have a reusable form component

const EditSubordinateForm = ({ onSubmit }) => {
  const fields = [
    { name: "user", label: "Select User", type: "select", options: ["User 1", "User 2", "User 3"], required: true },
    { name: "username", label: "Username", type: "text", placeholder: "Enter username", required: true },
    { name: "password", label: "Password", type: "password", placeholder: "Enter password", required: true },

    // Privileges checkboxes
    { name: "createHouse", label: "Create House", type: "checkbox" },
    { name: "editHouse", label: "Edit House", type: "checkbox" },
    { name: "addTenant", label: "Add Tenant", type: "checkbox" },
    { name: "editTenant", label: "Edit Tenant", type: "checkbox" },
    { name: "createRoom", label: "Create Room", type: "checkbox" },
    { name: "editRoom", label: "Edit Room", type: "checkbox" },
    { name: "addData", label: "Add Data", type: "checkbox" },
    { name: "createSubordinates", label: "Create Subordinates", type: "checkbox" },
    { name: "editSubordinates", label: "Edit Subordinates", type: "checkbox" },
  ];

  return <ReusableForm title="Edit Subordinate's Information and Privileges" fields={fields} onSubmit={onSubmit} />;
};

export default EditSubordinateForm;
