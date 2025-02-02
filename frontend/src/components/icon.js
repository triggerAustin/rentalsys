import { React } from 'react';

export default function Icon({ icon: IconComponent, title, b, h, hbg, onClick }) {
  return (
    <div
      className={`flex flex-row gap-1 content-center items-center rounded px-2 cursor-pointer transition-all duration-300 
        ${b ? `${b}` : ''}
        ${h ? `${h}` : ''}
        ${hbg ? `${hbg}` : ''}`}
      onClick={onClick} // Apply onClick handler if provided
    >
      <IconComponent />
      <span>{title}</span>
    </div>
  );
}
