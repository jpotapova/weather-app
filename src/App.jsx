import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.scss';
import { MyLocation } from './MyLocation';
import { Countries } from './Countries';
import { Favourites } from './Favourites';

const App = () => (
  <Router>
    <div className="App">
      <header class="header">
        <Link to="/" title="My location" className="logo">Weather app</Link>
        <ul className="nav">
          <li className="nav__button">
            <Link to="/favourites" title="My favourite cities"><i className="fas fa-heart"></i></Link>
          </li>
          <li className="nav__button">
            <Link to="/" title="My location"><i className="fas fa-crosshairs"></i></Link>
          </li>
          <li className="nav__button">
            <Link to="/countries" title="Countries"><i className="fas fa-globe-africa"></i></Link>
          </li>
          <li className="nav__button"><button type="button" title="Search"><i className="fas fa-search"></i></button></li>
        </ul>
        <div className="search">
          <input type="text" placeholder="Search by city"/>
          <div className="suggestions">
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

        </div>
      </header>
      <main>
        <Route path="/" exact component={MyLocation} />
        <Route path="/countries" component={Countries}  />
        <Route path="/favourites" component={Favourites}  />
      </main>
    </div>
  </Router>
);

export default App;
