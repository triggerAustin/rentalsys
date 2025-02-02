import { React, useState } from 'react';

export default function Item(props) {
  // State to manage hover effect for tooltip
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative cursor-pointer items-center flex justify-start subpixel-antialiased
        font-medium pl-2 transition-all duration-300
        ${props.h ? `${props.h}` : "h-10"}
        ${props.w ? `${props.w}` : "w-36"}
        ${props.ml ? `${props.ml}` : "ml-2"}
        ${props.r ? `${props.r}` : "rounded"}
        ${props.mb ? `${props.mb}` : ''}
        ${props.bg ? `${props.bg}` : ''}
        ${props.hvs ? `${props.hvs}` : ''}
        ${props.txtc ? `${props.txtc}` : ''}
        ${props.txtw ? `${props.txtw}` : ''}
        ${props.isActive ? 'bg-green-custom text-white' : 'bg-transparent text-black hover:bg-gray-200'}`}
      onClick={props.onclick}
      onMouseEnter={() => setIsHovered(true)}  // Show tooltip on hover
      onMouseLeave={() => setIsHovered(false)} // Hide tooltip on hover out
    >
      {props.icon && <props.icon className='mr-2'/>}
      <p className={`transition-all duration-500 ${props.displayP}`}>{props.title}</p>

      {/* Tooltip-like popup */}
      {isHovered && props.displayP === 'hidden' && (
        <div
          className={`absolute bg-black text-white rounded-md px-2 py-1 text-sm 
                      ${props.tooltipPosition || 'z-1000'}`}
          style={{
            left: '100%',
            marginLeft: '8px', // Creates space between button and tooltip
            top: '50%',
            transform: 'translateY(-50%)', // Vertically align the tooltip
          }}
        >
          {props.title}
        </div>
      )}
    </div>
  );
}

