import { React } from 'react';
import Item from './item.js';

export default function Navbar(props){
	// create as many links on navbar as needed
	let count = 4;
	const barItems = [];
	const titles = ['dashboard', 'houses', 'create Hse',  'payment logs', 'billing', 'surbodinates', 'create surbodinate'];
	let i;
	for(i = 0; i < titles.length; i++)
	{
		barItems.push(<Item h="h-8" mb="mb-2" bg="bg-gray-100" title={titles[i]}/>);
	};

  return(
	<div className='lg:w-40 h-screen shadow-md fixed flex gap-2 
	  		 flex-col'>
	  <div className="lg:w-full h-20 flex flex-col justify-center items-start bg-green-300 pl-2">
	  <p>admin</p>
	  <p>surbodinates {count}</p>
	  </div>
	  { barItems }
	  <div className="fixed bottom-0 grid gap-2 pb-2">
          	<Item title="profile"/>
	  	<span className="border-b-2 ml-2"></span>
          	<Item title="logs"/>
          </div>
	</div>
	)
}
