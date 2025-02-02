import React, { useState } from "react";
import Units from "./houses";
import Rooms from "./rooms";
import RoomData from "./roomData";

export default function DisplayHseRooms(props){
  const [roomNumber, setRoomNumber] = useState('')
  return(
    <>
      {props.hseName === "" && <Units data={props.houses} setHouseName={props.setHouseName} setShowRooms={props.setShowRooms} setTitle2={props.setTitle2}/>}
      {props.showRooms  && <Rooms house={props.hseName} setHouseName={props.setHouseName} setTitle3={props.setTitle3} setTitle2={props.setTitle2} setShowRooms={props.setShowRooms} setShowRoomsData={props.setShowRoomsData} setRoomNumber={setRoomNumber}/>}
      {props.showRoomsData && <RoomData hseName={props.hseName} roomNumber={roomNumber} setShowRooms={props.setShowRooms} setShowRoomsData={props.setShowRoomsData} setTitle3={props.setTitle3}/>}
    </>
  )
}