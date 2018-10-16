import React, {Component} from 'react';
import { CitiesList } from './CitiesList';

class Country extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cities: []
    }
  }

  componentDidMount() {
    fetch("http://localhost:3001/cities?country="+this.props.country.Code)
      .then(response => response.json())
      .then(data => this.setState({ cities: data }));
  }

  render() {
    return (
      <div>
        <div className="h1">
          <h1>{this.props.country.Name}</h1>
        </div>
        <CitiesList cities={this.state.cities}/>
      </div>
    );
  }
}

export { Country };
