import React, { useState } from 'react';
import Navbar from './components/navbar.js';
import Topbar from './components/topbar.js';
import Titlebar from './components/titlebar.js';
import './App.css';
import './index.css';

function App() {
  const [title, setTitle] = useState('overview');
  const [isCollapsed, setIsCollapsed] = useState(false);
  return (
    <div className="App flex flex-row font-serif">
	  <Navbar setTitle={setTitle} isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed}/>
	  <main className='grid grid-row-1h-full fixed right-0 transition-all duration-300' 
	  		style={{ width: isCollapsed ? "94.6%" :"86.6%" }}>
	  	<Topbar/>
	  	<Titlebar title={title}/>
	  </main>
    </div>
  );
}

export default App;
