import React, { Component } from "react";
import { Suggestions } from "./Countries";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { Country } from './Country';
import { CountriesList } from './CountriesList';

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
    return this.props.match.params.id ? <Country/> : <CountriesList countries={this.state.countries} />;
  }
}

export { Countries };
