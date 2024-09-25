import { React, useState, useEffect } from 'react';
import { IoIosSearch, IoMdDownload } from "react-icons/io";
import Item from './item.js';
import Icon from './icon.js';

export default function Topbar(props){
  return(
	<>
	  {/* this is the topbar element*/}
	  <div className="flex flex-row justify-between items-center 
	  			pr-2 lg:h-16 w-full pb-2 border-b">
	  	{/* this is the search element */}
	  	<input placeholder="search houses/units/tenants here..." 
	  		className="focus:outline-none w-90 focus:border-b-2 ml-6"/>
	  		{/*this is the search icon */}
	  	<div className="absolute top-5 left-0 flex items-center 
	  			subpixel-antialiased pointer-events-none font-bold text-xl">
			<IoIosSearch />
  		</div>
	  		{/*icons*/}
	  	<div className='flex flex-row gap-4 w-1/2 justify-end'>
	  		<Icon icon={IoMdDownload} title="reports" h='hover:shadow-sm' hbg='hover:bg-gray-200'/>
	  		<Icon icon={IoMdDownload} title="Invoice"h='hover:shadow-sm' hbg='hover:bg-gray-200'/>
	  	</div>
	  </div>
	</>
  )
}
