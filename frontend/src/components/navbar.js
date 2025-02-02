import { React, useState } from 'react';
//icons
import { GiHamburgerMenu } from "react-icons/gi";
import { IoPersonCircleOutline } from "react-icons/io5";
import { MdGridView, MdBusiness, MdAnalytics, MdGroup} from "react-icons/md";
import { TbCashRegister } from "react-icons/tb";
import { BsClipboardPlusFill } from "react-icons/bs";
import { FaClipboardList } from "react-icons/fa";
//components
import Item from './item.js';

export default function Navbar({ setTitle, isCollapsed, setIsCollapsed, setTitle2, setTitle3, setShowRoomsData, setShowRooms, setHouseName, setShowReport, setShowInvoice }){
	let index2 = 100;
	let index3 = 101;
	let title2 = 'profile';
	let title3 = 'logs';

	const [activeIndex, setActiveIndex] = useState(0); // State to track active item
  	const handleItemClick = (index, title) => {
    		setActiveIndex(index); // Set the active item index
			let Title = title +"> "
		setTitle(Title); //set title in titlebar to item name
		setTitle2("")
		setTitle3("")
		setShowRooms(false)
		setShowRoomsData(false)
		setHouseName("")
		setShowInvoice(false)
		setShowReport(false)
  	};
	//to resize navbar
	const resizeNav = () => {setIsCollapsed(prevState => !prevState);}
	
	//titles for navbar items
	const items = ['Overview', 'Houses',  'Entry Logs', 
			'Billings', 'Surbodinates', 'Actions']
	const icons = [MdGridView, MdBusiness, MdAnalytics, TbCashRegister, MdGroup, BsClipboardPlusFill]
  return(
	<div className={`${isCollapsed ? 'lg:w-16' : 'lg:w-40'} h-screen shadow-md fixed flex gap-2 
	  		 flex-col fixed transition-all duration-300 z-10`}>
	  <div className="lg:w-full flex flex-row justify-between items-center px-2"
	  		style={{ height: "4rem" }}>
	  	<p className={`${isCollapsed ? "hidden" : "block"}`}>company logo</p>
	  	<GiHamburgerMenu className="text-2xl cursor-pointer" onClick={() => resizeNav()}/>
	  </div>
	  <h6 className="text-sm font-semibold flex flex-shrink ml-2 text-gray-400">MAIN MENU</h6>
	  	{/*create the links on navbar*/}
	  { items.map((title, index) => (
	  	<Item 
		  key={index}
		  title={title}
		  h="h-8" mb="mb-2"
		  txtc="text-gray-700"
		  txtw="font-semibold"
		  bg="bg-green-custom"
		  icon={icons[index]}
		  w={isCollapsed ? "w-8" : "w-36" }
		  displayP={isCollapsed ? "hidden" : "block" }
		  isActive={index === activeIndex}
		  onclick={() => handleItemClick(index, title)}
		/>
	  ))}
	  <div className="fixed bottom-0 grid gap-2 pb-2">
          	<Item title={title2}
	  		w={isCollapsed ? "w-8" : "w-36" } 
	  		displayP={isCollapsed ? "hidden" : "block" }
	  		isActive={index2 === activeIndex}
	  		onclick={() => handleItemClick(index2, title2)}
	  		bg="bg-green-custom"
	  		icon={IoPersonCircleOutline}/>
	  	<span className="border-b-2 ml-2"></span>
          	<Item title={title3}
	  		w={isCollapsed ? "w-8" : "w-36" }
                        displayP={isCollapsed ? "hidden" : "block" }
                        isActive={index3 === activeIndex}
                        onclick={() => handleItemClick(index3, title3)}
                        bg="bg-green-custom"
                        icon={FaClipboardList}/>
          </div>
	</div>
	)
}

