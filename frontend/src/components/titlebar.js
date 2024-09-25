import { React, useState, useEffect } from 'react';
import { IoIosSearch } from "react-icons/io";
import { IoFilter } from "react-icons/io5";
import Icon from './icon.js';

export default function Titlebar({ title }){
  return(
	<>
	  {/* this is the title bar element*/}
	  <div className="flex flex-row justify-between items-center content-center 
	  			lg:h-10 w-full py-2 drop-shadow-sm border-b pl-2 pr-4">
	  	<span className='uppercase text-gray-600 font-semibold'>{title} ></span>
	  	<Icon icon={IoFilter} title='Filter' b='border'/>
	  </div>
	</>
  )
}
