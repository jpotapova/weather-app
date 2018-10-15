import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <a href="#">Weather app</a>
          <ul>
            <li><a href="">My favourites</a></li>
            <li><a href="">My location</a></li>
            <li><a href="">Coutries</a></li>
            <li><button type="button">Search</button></li>
          </ul>
          <div><input type="text" placeholder="Search by city"/></div>
          <div>
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
  }
}

export default App;
