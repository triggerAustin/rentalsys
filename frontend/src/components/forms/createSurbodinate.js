import React, { useState } from "react";
import ReusableForm from "./form"; // Assuming you have a reusable form component

const CreateSubordinateForm = ({ onSubmit }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const fields = [
    { name: "username", label: "Username", type: "text", placeholder: "Enter username", required: true },
    {
      name: "password",
      label: "Password",
      type: "password",
      placeholder: "Enter password",
      required: true,
      customRender: (field, handleChange) => (
        <div className="flex items-center">
          <input
            type={showPassword ? "text" : "password"}
            name={field.name}
            placeholder={field.placeholder}
            required={field.required}
            onChange={handleChange}
            className="border p-2 w-full"
          />
          <i
            className={`ml-2 cursor-pointer fa ${showPassword ? "fa-eye-slash" : "fa-eye"}`}
            onClick={togglePasswordVisibility}
          />
        </div>
      ),
    },
    {
      name: "privileges",
      label: "Privileges",
      type: "checkbox-group",
      options: [
        { label: "Create House", value: "create_house" },
        { label: "Edit House", value: "edit_house" },
        { label: "Add Tenant", value: "add_tenant" },
        { label: "Edit Tenant", value: "edit_tenant" },
        { label: "Create Room", value: "create_room" },
        { label: "Edit Room", value: "edit_room" },
        { label: "Add Data", value: "add_data" },
        { label: "Create Subordinates", value: "create_subordinates" },
        { label: "Edit Subordinates", value: "edit_subordinates" },
      ],
      customRender: (field, handleChange) => (
        <div className="grid grid-cols-2 gap-2">
          {field.options.map((option, index) => (
            <label key={index} className="flex items-center space-x-2">
              <input type="checkbox" name={option.value} onChange={handleChange} />
              <span>{option.label}</span>
            </label>
          ))}
        </div>
      ),
    },
  ];

  return <ReusableForm title="Create Subordinate" fields={fields} onSubmit={onSubmit} />;
};

export default CreateSubordinateForm;
