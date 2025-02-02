import { React, useState, useEffect } from 'react';
import { IoIosSearch } from "react-icons/io";
import { IoFilter } from "react-icons/io5";
import Icon from './icon.js';

export default function Titlebar(props){
	console.log(props.title)
	const closeRoomsDisplay=()=>{
		props.setHouseName("")
		props.setTitle2("")
		props.setTitle3("")
		props.setShowRooms(false)
	}
	const closeRoomDataDisplay=()=>{
		props.setShowRooms(true);
		props.setShowRoomsData(false)
		props.setTitle3('')
	}
  return(
	<>
	  {/* this is the title bar element*/}
	  <div className="flex flex-row justify-between items-center content-center 
	  			lg:h-10 w-full py-2 drop-shadow-sm border-b pl-2 pr-4">
	  	<span className='uppercase text-gray-600 font-semibold'>
			<span  className="hover:cursor-pointer" onClick={closeRoomsDisplay}>{props.title}</span> 
			<span  className="hover:cursor-pointer" onClick={closeRoomDataDisplay}>{props.title2} </span>
			<span className="hover:cursor-pointer" >{props.title3}</span>
			</span>
	  	<Icon icon={IoFilter} title='Filter' b='border'/>
	  </div>
	</>
  )
}
