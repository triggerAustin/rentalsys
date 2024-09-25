import { React, useState, useEffect } from 'react';

export default function Icon({ icon: IconComponent, title, b, h, hbg }){

  return(
    <div className={`flex flex-row gap-1 content-center items-center rounded px-2 cursor-pointer transition-all duration-300 
	    ${b ? `${b}` : ''}
	    ${h ? `${h}` : ''}
	    ${hbg ? `${hbg}` : ''}`}>
      <IconComponent />
      <span>{title}</span>
    </div>

  )
}
