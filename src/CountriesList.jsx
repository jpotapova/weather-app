import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class CountriesList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return this.props.countries ? (
      <div>
        <h1 className="h1">Countries</h1>
        <ul className="favourites">
          {this.props.countries.map((country, index) => (
            <li className="row" key={index}>
              <div>
                <Link to={'/countries/' + country.Code}>{country.Name}</Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    ) : null;
  }
}

export { CountriesList };
