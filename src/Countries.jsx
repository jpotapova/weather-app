import React, { Component } from "react";
import { Suggestions } from "./Countries";
import { Link } from 'react-router-dom';

class Countries extends Component {
  constructor(props) {
    super(props);

    this.state = {
      countries: [
        { Code: "LI", Name: "Liechtenstein" },
        { Code: "LT", Name: "Lithuania" },
        { Code: "LU", Name: "Luxembourg" }
      ]
    };
  }

  render() {
    return (
      <div>
        <h1 className="h1">Countries</h1>
        <ul className="favourites">
          {this.state.countries.map((country, index) => (
            <li className="row" key={index}>
              <div>
                <Link to={'/countries/' + country.Code}>{country.Name}</Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export { Countries };
