import React, { useEffect, useState } from "react";
import ReusableTable from './table';
import HouseCard from "./houseCard";

export default function Units(props){  
  const [houseData, setHouseData] = useState([]);
  

    useEffect(() => {
      fetch(`http://localhost:3001/houses/${props.hse_id}`)
        .then((response) => response.json())
        .then((data) => setHouseData(data))
        .catch((error) => console.error("Error fetching HOuse Data:", error));
    }, []);

  const handleEdit = (house) => {
    console.log("Edit house:", house);
    // Open your edit form or navigate to the edit page
  };
  
  const handleDelete = (house) => {
    console.log("Delete house:", house);
    // Call a function to delete the house or display a confirmation modal
  };

  const columns = [
    { label: "Unit name", key: "unitName" },
    { label: "Jan", key: "landlord" },
    { label: "Feb", key: "vaccant" },
    { label: "Mar", key: "occupied" },
    { label: "Apr", key: "occupied" },
    { label: "May", key: "occupied" },
    { label: "Jun", key: "occupied" },
    { label: "Jul", key: "occupied" },
    { label: "Aug", key: "occupied" },
    { label: "Sept", key: "occupied" },
    { label: "Oct", key: "occupied" },
    { label: "Nov", key: "occupied" },
    { label: "Dec", key: "occupied" },
  ];


 // Convert object data to array format for ReusableTable
 const tableData = {
  2023: {
    "House A": {
      landlord: 10000,
      vacant: 1000,
      occupied: 8000,
      totalRooms: 10000,
    
    },
    "House B": {
      landlord: "3",
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
  console.log(houseData.house_name)
  const houseDetails = {
    house_name: houseData.house_name,
    address: "123 Main St, Springfield",
    landlordTel: "0797466307",
    paymentRate: 1200,
    landlordId: "1232423432",
    lr_number: houseData.lr_number
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