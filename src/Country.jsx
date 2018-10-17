import React, { Component } from "react";
import { ItemsList } from "./ItemsList";

class Country extends Component {

  constructor(props) {

    super(props);
    this.state = {
      cities: []
    };

  }

  componentDidMount() {

    fetch("http://localhost:3001/cities?country=" + this.props.code + "&_limit=20")
      .then(response => response.json())
      .then(data => this.setState({ cities: data }));

  }

  render() {

    return (
      <div>
        <div className="h1">
          <h1>{this.props.country.Name}</h1>
        </div>
        <ItemsList items={this.state.cities} link="/city/" actions="weather" />
      </div>
    );

  }

}

export { Country };
