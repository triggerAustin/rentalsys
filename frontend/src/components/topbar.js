import { React, useState, useEffect } from 'react';
import Item from './item.js';

export default function Topbar(props){
	const titles = ['log payment', 'tenant report', 'lanlord report'];
	const items = [];
	let i;
	for(i = 0; i < titles.length; i++){
		items.push(<Item title={titles[i]} hvs="hover:scale-105" hbc="hover:underline"/>);
	}
	const [showSearchBar, setShowSearchBar] = useState('false')
	const showSearch = () => {
		setShowSearchBar(!showSearchBar);
	}
  return(
	<>
	  <div className="flex flex-row justify-between items-center 
	  			pr-2 lg:h-16 w-full bg-gray-200 pb-2">
	  	<p>Company logo</p>
		<div className='divide-gray-300 flex flex-row gap-6 justify-center items-end pb-2'>
	  		{ items }
	  	</div>
	  	{showSearchBar && (<input placeholder="search"/>)}
	  </div>
	</>
  )
}
