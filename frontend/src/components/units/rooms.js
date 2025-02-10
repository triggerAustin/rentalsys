import React from 'react';
import ReusableTable from './table';
import HouseCard from "./houseCard";

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
    
    },
    "House B": {
      landlord: "Jane Smith",
      vacant: 3,
      occupied: 5,
      totalRooms: 8,
   
    }
  },
  2024: {
    "House A": {
      landlord: "John Doe",
      vacant: 1,
      occupied: 9,
      totalRooms: 10,
     
    },
    "House B": {
      landlord: "Jane Smith",
      vacant: 4,
      occupied: 4,
      totalRooms: 8,
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
  const houseDetails = {
    houseName: "Springfield House",
    address: "123 Main St, Springfield",
    landlordTel: "0797466307",
    paymentRate: 1200,
    landlordId: "1232423432",
    lrNumber: "923402-"
  };

  const handleHouseDetailsEdit = () => {
    alert("Edit House Clicked");
  };
  return (
    <div className="p-4 max-h-[90vh] overflow-y-auto">
    
    <HouseCard houseDetails={houseDetails} onEdit={handleHouseDetailsEdit} />
          
    <ReusableTable 
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