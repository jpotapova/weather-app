import React, { Component } from "react";
import { Suggestions } from "./Countries";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { Country } from './Country';
import { CountriesList } from './CountriesList';

class Countries extends Component {
  constructor(props) {
    super(props);

    this.state = {
      countries: []
    };
  }

  componentDidMount() {
    fetch('http://localhost:3001/countries')
      .then(response => response.json())
      .then(data => this.setState({ countries: data }));
  }

  render() {
    let renderComponent = <CountriesList countries={this.state.countries} />;
    if (this.props.match.params.id) {
      let country = this.state.countries.find((c)=>c.Code === this.props.match.params.id);
      renderComponent = <Country country={country} />;
    }
    return renderComponent;
  }
}

export { Countries };
