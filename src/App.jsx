import React from 'react';
import './App.scss';

const App = () => (
  <div className="App">
        <header class="header">
          <a href="#" className="logo">Weather app</a>
          <ul className="nav">
            <li className="nav__button"><a href="" title="My favourite cities"><i className="fas fa-heart"></i></a></li>
            <li className="nav__button"><a href="" title="My location"><i className="fas fa-crosshairs"></i></a></li>
            <li className="nav__button"><a href="" title="Countries"><i className="fas fa-globe-africa"></i></a></li>
            <li className="nav__button"><button type="button" title="Search"><i className="fas fa-search"></i></button></li>
          </ul>
          <div className="search">
            <input type="text" placeholder="Search by city"/>
            <ul>
            <li>
              <a href="#">Vilnius</a>
            </li>
            <li>
              <a href="#">Kaunas</a>
            </li>
            <li>
              <a href="#">Utena</a>
            </li>
            </ul>
          </div>
        </header>
        <main>
          <h1>Page title</h1>
          <ul>
            <li>
              <a href="#">Lithuania</a>
            </li>
            <li>
              <a href="#">United Kingdom</a>
            </li>
            <li>
              <a href="#">France</a>
            </li>
          </ul>
        </main>
      </div>
);

export default App;
