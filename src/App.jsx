import React, { Component }  from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.scss';
import { MyLocation } from './MyLocation';
import { Countries } from './Countries';
import { Favourites } from './Favourites';
import { Search } from './Search';

class App extends Component {

  constructor(props) {
    super(props);
    this.toggleSearch = this.toggleSearch.bind(this);

    this.state = {
      showSearch: false
    };

  }

  toggleSearch(e) {
    this.setState({
      showSearch: !this.state.showSearch
    });
  }

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
                <button type="button" title="Search" onClick={this.toggleSearch}><i className="fas fa-search"></i></button>
              </li>
            </ul>
            <Search show={this.state.showSearch}/>
          </header>
          <main>
            <Route path="/" exact component={MyLocation} />
            <Route path="/countries" component={Countries}  />
            <Route path="/favourites" component={Favourites}  />
          </main>
        </div>
      </Router>
    )
  }
};

export default App;
