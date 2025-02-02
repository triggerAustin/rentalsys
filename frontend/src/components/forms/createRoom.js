import React from "react";
import ReusableForm from "./form"; // Assuming you have the ReusableForm component

const CreateRoomForm = ({ onSubmit }) => {
  const fields = [
    { name: "roomName", label: "Room Name", type: "text", placeholder: "Enter room name", required: true },
    { name: "roomHouse", label: "House", type: "select", options: ["House A", "House B", "House C"], required: true },
    { name: "roomType", label: "Room Type", type: "select", options: ["Single", "Double", "Suite"], required: true },
    { name: "roomRent", label: "Rent Amount", type: "number", placeholder: "Enter room rent amount", required: true },
    { name: "roomStatus", label: "Room Status", type: "select", options: ["Available", "Occupied", "Under Maintenance"], required: true },
  ];

  return (
    <ReusableForm title="Create Room" fields={fields} onSubmit={onSubmit} />
  );
};

export default CreateRoomForm;
