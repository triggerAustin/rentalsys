import { React, useState } from 'react';
import { IoIosSearch, IoMdDownload } from "react-icons/io";
import Icon from './icon.js';

export default function Topbar(props) {

  // Toggle the reports view
  const handleReportClick = () => {
	props.setShowReport((prevState) => !prevState);
    props.setShowInvoice(false);  // Ensure invoice view is hidden
  };

  // Toggle the invoice view
  const handleInvoiceClick = () => {
	props.setShowInvoice((prevState) => !prevState);
    props.setShowReport(false);  // Ensure report view is hidden
  };

  // Sample data for the components (can be replaced with actual data)


  return (
    <>
      {/* Topbar element */}
      <div className="flex flex-row justify-between items-center pr-2 lg:h-16 w-full pb-2 border-b">
        {/* Search element */}
        <input
          placeholder="Search houses/units/tenants here..."
          className="focus:outline-none w-90 focus:border-b-2 ml-6"
        />
        {/* Search icon */}
        <div className="absolute top-5 left-0 flex items-center subpixel-antialiased pointer-events-none font-bold text-xl">
          <IoIosSearch />
        </div>

        {/* Icons */}
        <div className='flex flex-row gap-4 w-1/2 justify-end'>
          {/* Reports Icon */}
          <Icon
            icon={IoMdDownload}
            title="Reports"
            h='hover:shadow-sm'
            hbg='hover:bg-gray-200'
            onClick={handleReportClick}
          />
          {/* Invoice Icon */}
          <Icon
            icon={IoMdDownload}
            title="Invoice"
            h='hover:shadow-sm'
            hbg='hover:bg-gray-200'
            onClick={handleInvoiceClick}
          />
        </div>
      </div>

    </>
  );
}

