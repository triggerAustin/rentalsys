import React from 'react';
import ReusableTable from './table';

export default function Rooms(props){  
  //props.HseName

  const handleEdit = (house) => {
    console.log("Edit house:", house);
    // Open your edit form or navigate to the edit page
  };
  
  const handleDelete = (house) => {
    console.log("Delete house:", house);
    // Call a function to delete the house or display a confirmation modal
  };

  const columns = [
    { label: "house", key: "house" },
    { label: "landlord", key: "landlord" },
    { label: "vaccant", key: "vaccant" },
    { label: "occupied", key: "occupied" },
    { label: "totalRooms", key: "totalRooms" },
  ];


 // Convert object data to array format for ReusableTable
 const tableData = {
  2023: {
    "House A": {
      landlord: "John Doe",
      vacant: 2,
      occupied: 8,
      totalRooms: 10,
      rooms: {
        "Room 1": { tenant: "Alice", type: "Single" },
        "Room 2": { tenant: "Bob", type: "Double" },
        // other rooms...
      },
      January: { bal: 234, exp: 100, paid: 324 },
      February: { bal: 200, exp: 150, paid: 280 },
      // other months...
    },
    "House B": {
      landlord: "Jane Smith",
      vacant: 3,
      occupied: 5,
      totalRooms: 8,
      rooms: {
        "Room 1": { tenant: "Eve", type: "Studio" },
      },
      January: { bal: 180, exp: 90, paid: 250 },
      February: { bal: 190, exp: 100, paid: 260 },
      // other months...
    }
  },
  2024: {
    "House A": {
      landlord: "John Doe",
      vacant: 1,
      occupied: 9,
      totalRooms: 10,
      rooms: {
        "Room 1": { tenant: "Alice", type: "Single" },
        "Room 2": { tenant: "Bob", type: "Double" },
        // other rooms...
      },
      January: { bal: 250, exp: 120, paid: 370 },
      February: { bal: 220, exp: 140, paid: 300 },
      // other months...
    },
    "House B": {
      landlord: "Jane Smith",
      vacant: 4,
      occupied: 4,
      totalRooms: 8,
      rooms: {
        "Room 1": { tenant: "Eve", type: "Studio" },
      },
      January: { bal: 200, exp: 100, paid: 290 },
      February: { bal: 210, exp: 110, paid: 280 },
      // other months...
    }
  }
};
  //row click
  const DisplayRoomData=(hse)=>{
    let title3 = hse + ">"
    props.setTitle3(title3)
    props.setShowRooms(false)
    props.setShowRoomsData(true)
    props.setRoomNumber(hse)
  }

  return (
    <div className="p-4"><ReusableTable 
    columns={columns} 
    data={tableData} 
    selectedYear={2023} 
    onEditClick={handleEdit} 
    onDeleteClick={handleDelete} 
    hover={true} 
    onRowClick={DisplayRoomData}
  />

    </div>
  );
}