import React, { Component } from "react";
import { Suggestions } from "./Countries";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { Country } from './Country';
import { CountriesList } from './CountriesList';

class Countries extends Component {
  constructor(props) {
    super(props);

    this.countryByCode = this.countryByCode.bind(this);

    this.state = {
      countries: []
    };
  }

  countryByCode(code) {
    return this.state.countries.find((c)=>c.Code === code) || {};
  }

  componentDidMount() {
    fetch('http://localhost:3001/countries')
      .then(response => response.json())
      .then(data => this.setState({ countries: data }));
  }

  render() {
    let code = this.props.match.params.id;
    if (code) {
      return <Country country={this.countryByCode(code)} />;
    } else {
      return <CountriesList countries={this.state.countries} />;
    }
  }
}

export { Countries };
