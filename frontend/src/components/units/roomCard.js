import React from 'react';

const RoomCard = ({ roomDetails, tenantDetails, onEdit }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-2 w-full max-w-4xl">
      {/* Room Details */}
      <div className="grid grid-cols-2 gap-4">
        <p className="text-gray-700 text-sm"><strong>Room Number:</strong> {roomDetails.roomNumber}</p>
        <p className="text-gray-700 text-sm"><strong>Unit Type:</strong> {roomDetails.unitType}</p>
        <p className="text-gray-700 text-sm"><strong>Payment Rate:</strong> {roomDetails.paymentRate}</p>
      
        <p className="text-gray-700 text-sm"><strong>Tenant Name:</strong> {tenantDetails.name}</p>
        <p className="text-gray-700 text-sm"><strong>Tenant ID:</strong> {tenantDetails.tenantId}</p>
        <p className="text-gray-700 text-sm"><strong>Phone:</strong> {tenantDetails.phone}</p>
        <p className="text-gray-700 text-sm"><strong>Current Meter Reading:</strong> {tenantDetails.currMeterReading}</p>
      </div>

      {/* Actions */}
      <div className="mt-6 flex justify-center gap-4">
        <button 
          onClick={onEdit}
          className="px-6 py-3 bg-blue-500 text-white text-lg rounded-lg hover:bg-blue-600"
        >
          Edit Room
        </button>
      </div>
    </div>
  );
};

export default RoomCard;
