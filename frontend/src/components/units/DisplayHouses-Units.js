import React, { useState } from "react";
import House from "./houses";
import Units from "./rooms";
import UnitsData from "./roomData";

export default function DisplayHseRooms(props){
  const [roomNumber, setRoomNumber] = useState('')
  const [houseId, setHouseId] = useState("");
  return(
    <>
      {props.hseName === "" && <House setHouseId={setHouseId} data={props.houses} setHouseName={props.setHouseName} setShowRooms={props.setShowRooms} setTitle2={props.setTitle2}/>}
      {props.showRooms  && <Units hse_id={houseId} house={props.hseName} setHouseName={props.setHouseName} setTitle3={props.setTitle3} setTitle2={props.setTitle2} setShowRooms={props.setShowRooms} setShowRoomsData={props.setShowRoomsData} setRoomNumber={setRoomNumber}/>}
      {props.showRoomsData && <UnitsData hseName={props.hseName} roomNumber={roomNumber} setShowRooms={props.setShowRooms} setShowRoomsData={props.setShowRoomsData} setTitle3={props.setTitle3}/>}
    </>
  )
}