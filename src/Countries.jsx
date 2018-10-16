import React, { Component } from "react";
import { Country } from './Country';
import { ItemsList } from './ItemsList';

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
      return (
        <div>
          <div className="h1">
            <h1>Countries</h1>
          </div>
          <ItemsList items={this.state.countries} link="/countries/"/>
        </div>
      );
    }
  }
}

export { Countries };
