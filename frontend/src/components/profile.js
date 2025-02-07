import React, { useState } from "react";
import Card from "./card";
import EditProfileForm from "./forms/editProfile";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);

  const data = {
    id: "LND001",
    name: "John Doe",
    role: "Landlord",
    phone: "123-456-7890",
    email: "john.doe@example.com",
    address: "123 Main St, Springfield",
    propertiesOwned: 5,
    rentedUnits: 2,
    accountStatus: "Active",
    profilePicture: "https://via.placeholder.com/150",
  };

  const handleDelete = () => {
    alert("Delete Profile Clicked");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
      <Card
        title={data.name}
        image={data.profilePicture}
        fields={[
          { label: "Role", value: data.role },
          { label: "Phone", value: data.phone },
          { label: "Email", value: data.email },
          { label: "Address", value: data.address },
          { label: "Account Status", value: data.accountStatus, isBadge: true },
        ]}
        actions={[
          { label: "Edit Profile", onClick: () => setIsEditing(true), className: "bg-blue-500 hover:bg-blue-600" },
          { label: "Delete Profile", onClick: handleDelete, className: "bg-red-500 hover:bg-red-600" },
        ]}
      />

      {/* Edit Profile Popup */}
      {isEditing && <EditProfileForm data={data} onClose={() => setIsEditing(false)} />}
    </div>
  );
};

export default Profile;

