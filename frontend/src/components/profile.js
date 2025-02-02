import React, { useState } from "react";
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
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-8">
        
        {/* Profile Header */}
        <div className="flex items-center gap-6">
          <img 
            src={data.profilePicture} 
            alt="Profile" 
            className="w-32 h-32 rounded-full border-4 border-gray-300" 
          />
          <div>
            <h2 className="text-3xl font-bold">{data.name}</h2>
            <p className="text-gray-600 text-lg">{data.role} - {data.company}</p>
          </div>
        </div>

        {/* Profile Details */}
        <div className="grid grid-cols-2 gap-6 mt-6">
          <div>
            <p className="text-gray-700 text-lg"><strong>Phone:</strong> {data.phone}</p>
            <p className="text-gray-700 text-lg"><strong>Email:</strong> {data.email}</p>
            <p className="text-gray-700 text-lg"><strong>Address:</strong> {data.address}</p>
          </div>
          <div>
            <p className="text-gray-700 text-lg"><strong>Login Time:</strong> {data.loginTime}</p>
            <p className="text-gray-700 text-lg"><strong>Account Status:</strong> 
              <span className={`ml-2 px-3 py-1 text-white rounded-md ${data.accountStatus === "Active" ? "bg-green-500" : "bg-red-500"}`}>
                {data.accountStatus}
              </span>
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex gap-4">
          <button 
            onClick={() => setIsEditing(true)} 
            className="flex-1 px-6 py-3 bg-blue-500 text-white text-lg rounded-lg hover:bg-blue-600"
          >
            Edit Profile
          </button>
          <button 
            onClick={handleDelete} 
            className="flex-1 px-6 py-3 bg-red-500 text-white text-lg rounded-lg hover:bg-red-600"
          >
            Delete Profile
          </button>
        </div>

        {/* Edit Profile Popup Form */}
        {isEditing && <EditProfileForm data={data} onClose={() => setIsEditing(false)} />}
      </div>
    </div>
  );
};

export default Profile;
