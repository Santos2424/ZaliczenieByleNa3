import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import './index.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
      <div>
      <img src="/images/swamp.jpg" alt="..."/>
      </div>
      <div className="content">
      <h1>Obsada Serialu</h1>
      <nav>
          <ul>
            <li><button id="myButton" class="float-left submit-button" ><img src="/images/cr.jpg" alt="..."/>Crystal Reed</button></li>
            <li><button id="myButton" class="float-left submit-button" ><img src="/images/ab.jpg" alt="..."/>Andy Bean</button></li>
            <li><button id="myButton" class="float-left submit-button" ><img src="/images/wp.jpg" alt="..."/>Will Patton</button></li>
          </ul>
        </nav>
    </div>
    </div>
  );
}

export default App;
