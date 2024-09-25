import Navbar from './components/navbar.js';
import Topbar from './components/topbar.js';
import './App.css';
import './index.css';

function App() {
  return (
    <div className="App flex flex-col">
	  <section> 
	  	<Topbar />
	  </section>
	  <main className='grid w-9/12'>
	  	<Navbar />
	  </main>
    </div>
  );
}

export default App;
