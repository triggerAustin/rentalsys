import React, { useState } from 'react';
import Navbar from './components/navbar.js';
import Overview from './components/charts/overview.js';
import Topbar from './components/topbar.js';
import Titlebar from './components/titlebar.js';
import './App.css';
import './index.css';
import DisplayHseRooms from './components/units/DisplayHouses-Units.js';
import Actions from './components/forms/actions.js';
import Subordinates from './components/surbodinates.js';
import Profile from './components/profile.js';
import UserLogsTable from './components/logs.js';
import Billings from './components/billings.js';
import PaymentLogs from './components/paymentLogs.js';
import PrintableInvoiceTable from './components/downloads/invoice.js';
import PrintableReportsTable from './components/downloads/report.js';





function App() {
  const [title, setTitle] = useState('Overview> ');
  const [title2, setTitle2] = useState('');
  const [title3, setTitle3] = useState('');
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [hseName, setHouseName] = useState('');
  const [showRooms, setShowRooms] = useState(false)
  const [showRoomsData, setShowRoomsData] = useState(false)
  const [showReport, setShowReport] = useState(false);
  const [showInvoice, setShowInvoice] = useState(false);
  console.log(showRoomsData)


  console.log(title)
  return (
    <div className="App flex flex-row font-serif">
	  <Navbar setTitle={setTitle} setTitle2={setTitle2} setTitle3={setTitle3} setHouseName={setHouseName}  setShowInvoice={setShowInvoice} setShowReport={setShowReport}
    isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} setShowRoomsData={setShowRoomsData} setShowRooms={setShowRooms}/>
	  <main className='grid grid-row-1 fixed right-0 transition-all duration-300' 
	  		style={{ width: isCollapsed ? "95.8%" :"89.6%" }}>
	  	<Topbar setShowInvoice={setShowInvoice} setShowReport={setShowReport}/>
	  	<Titlebar title={title} title2={title2} title3={title3} 
        setHouseName={setHouseName} setShowRooms={setShowRooms} setShowRoomsData={setShowRoomsData} setTitle2={setTitle2} 
        setTitle3={setTitle3} />
      <>
        {(title === 'Overview> '&& !showReport && !showInvoice) && <Overview />}
        {(title === 'Houses> '&& !showReport && !showInvoice) && <DisplayHseRooms setTitle2={setTitle2} setTitle3={setTitle3} title2={title2}
         setHouseName={setHouseName} setShowRooms={setShowRooms} setShowRoomsData={setShowRoomsData}
         hseName={hseName} showRooms={showRooms} showRoomsData={showRoomsData}/>}
        {(title === 'Actions> ' && !showReport && !showInvoice) && <Actions />}
        {(title === 'Billings> ' && !showReport && !showInvoice) && <Billings />}
        {(title === 'Entry Logs> ' && !showReport && !showInvoice) && <PaymentLogs />}
        {(title === 'Surbodinates> ' && !showReport && !showInvoice) &&  <Subordinates/>}
        {(title === 'profile> ' && !showReport && !showInvoice) && <Profile  />}
        {(title === 'logs> ' && !showReport && !showInvoice) && <UserLogsTable />}
        {/* Conditional Rendering for Printable Components */}
        {showReport && <PrintableReportsTable />}
        {showInvoice && <PrintableInvoiceTable  />}
      </>
	  </main>
    </div>
  );
}

export default App;
