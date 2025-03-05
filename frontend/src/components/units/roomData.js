/* eslint-disable react-hooks/rules-of-hooks */

import React, { useState } from "react";
import GraphComponent from "../charts/graphComponent";
import ReusableButton from "../button";
import ReusableTable from "./table";
import RoomCard from "./roomCard";


export default function roomsData(){
  const [toggleDisplay, setToggleDisplay] = useState(true);
  const [selectedYear, setSelectedYear] = useState("2023");
  const [selectedHouse, setSelectedHouse] = useState("House A");

  const handleEdit = (house) => {
    console.log("Edit house:", house);
    // Open your edit form or navigate to the edit page
  };
  
  const handleDelete = (house) => {
    console.log("Delete house:", house);
    // Call a function to delete the house or display a confirmation modal
  };
  
  const columns = [
    { label: "Month", key: "month" },
    { label: "name", key: "name" },
    { label: "Balance", key: "bal" },
    { label: "Expenses", key: "exp" },
    { label: "Paid", key: "paid" },
    { label: "Paid2", key: "paid2" },
    { label: "Paid3", key: "paid3" },
  ];

  const data = {
    2023: {
      "House A": {
        January: { bal: 234, exp: 100, paid: 324 },
        February: { bal: 200, exp: 150, paid: 280 },
        March: { bal: 260, exp: 140, paid: 300 },
        April: { bal: 250, exp: 130, paid: 310 },
        May: { bal: 270, exp: 150, paid: 320 },
        June: { bal: 280, exp: 160, paid: 330 },
        July: { bal: 290, exp: 170, paid: 340 },
        August: { bal: 300, exp: 180, paid: 350 },
        September: { bal: 310, exp: 190, paid: 360 },
        October: { bal: 320, exp: 200, paid: 370 },
        November: { bal: 330, exp: 210, paid: 380 },
        December: { bal: 340, exp: 220, paid: 390 },
      },
      "House B": {
        January: { bal: 180, exp: 90, paid: 250 },
        February: { bal: 190, exp: 100, paid: 260 },
        March: { bal: 200, exp: 110, paid: 270 },
        April: { bal: 210, exp: 120, paid: 280 },
        May: { bal: 220, exp: 130, paid: 290 },
        June: { bal: 230, exp: 140, paid: 300 },
        July: { bal: 240, exp: 150, paid: 310 },
        August: { bal: 250, exp: 160, paid: 320 },
        September: { bal: 260, exp: 170, paid: 330 },
        October: { bal: 270, exp: 180, paid: 340 },
        November: { bal: 280, exp: 190, paid: 350 },
        December: { bal: 290, exp: 200, paid: 360 },
      },
    },
  };
  

  // Ensure selected year and house exist in data
  const availableYears = Object.keys(data);
  const availableHouses = Object.keys(data[selectedYear] || {});

  if (!availableYears.includes(selectedYear)) setSelectedYear(availableYears[0]);
  if (!availableHouses.includes(selectedHouse)) setSelectedHouse(availableHouses[0]);

  // Convert object data to array format for ReusableTable
  const tableData = {
    2023: {
      "House A": {
        landlord: "John Doe",
        vacant: 2,
        occupied: 8,
        totalRooms: 10,
       
        // other months...
      },
      "House B": {
        landlord: "Jane Smith",
        vacant: 3,
        occupied: 5,
        totalRooms: 8,
      
        // other months...
      }
    },
    2024: {
      "House A": {
        landlord: "John Doe",
        vacant: 1,
        occupied: 9,
        totalRooms: 10,
      
        // other months...
      },
      "House B": {
        landlord: "Jane Smith",
        vacant: 4,
        occupied: 4,
        totalRooms: 8,
        // other months...
      }
    }
  };
  
  const [roomDetails] = useState({
    roomNumber: '101',
    unitType: 'Apartment',
    paymentRate: '$500/month',
  });

  const [tenantDetails] = useState({
    name: 'John Doe',
    tenantId: 'TNT123',
    phone: '123-456-7890',
    currMeterReading: '1200',
  });

  const handleRoomDetailsEdit = () => {
    // Edit room action
    alert('Edit Room Clicked');
  };
  
  const toggleDisplayBtn = () => setToggleDisplay(!toggleDisplay);

  return (
    <div>
      <ReusableButton text={toggleDisplay ? "Graph" : "Table"} onClick={toggleDisplayBtn} variant="primary" rooms={false} />


      {toggleDisplay ? (
  <>  
    <div className="max-h-[90vh] overflow-y-auto">
      <RoomCard 
        roomDetails={roomDetails} 
        tenantDetails={tenantDetails} 
        onEdit={handleRoomDetailsEdit} 
      />
      <ReusableTable 
        columns={columns} 
        data={tableData} 
        selectedYear={2023} 
        onEditClick={handleEdit} 
        onDeleteClick={handleDelete} 
        hover={true} 
      />
    </div>
  </>
) : (
  <GraphComponent title="Room Data" data={data} />
)}
    </div>
  );
};
