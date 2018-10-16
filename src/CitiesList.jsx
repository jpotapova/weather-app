import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class CitiesList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return this.props.cities ? (
      <ul>
        {this.props.cities.map((city, index) => (
          <li className="row" key={index}>
            <div className="city__name">
              <a href="#">{city.name}</a>
            </div>
            <div className="actions">
              +15
            </div>
          </li>
        ))}
      </ul>
    ) : null;
  }
}

export { CitiesList };
