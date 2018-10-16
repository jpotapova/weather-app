import React, { Component }  from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.scss';
import { MyLocation } from './MyLocation';
import { Countries } from './Countries';
import { Favourites } from './Favourites';
import { Search } from './Search';
import { City } from './City';

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <header className="header">
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
              <li className="nav__button">
                <Link to="/search" title="Search"><i className="fas fa-search"></i></Link>
              </li>
            </ul>
          </header>
          <main>
            <Switch>
              <Route path="/" exact component={MyLocation} />
              <Route path="/countries" exact component={Countries}  />
              <Route path="/countries/:id" component={Countries}  />
              <Route path="/favourites" component={Favourites}  />
              <Route path="/city/:id" component={City}  />
              <Route path="/search" component={Search}  />
            </Switch>
          </main>
        </div>
      </Router>
    )
  }
};

export default App;
