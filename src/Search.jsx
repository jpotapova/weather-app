import React , {Component} from 'react';
import { Suggestions } from './Suggestions';

class Search extends Component {

  constructor(props) {
    super(props);
    this.listCities = this.listCities.bind(this);

    this.state = {
      cities: []
    };
  }

  listCities(e) {
    // fixme 
    if (e.target.value.length > 3)
      this.setState({
        cities: [{"name": "Vilnius"},{"name": "Kaunas"}, {"name": "Utena"}]
      });
  }

  render() {
    return this.props.show ? (
      <div className="search">
        <input type="text" placeholder="Search by city" onChange={this.listCities} />
        <Suggestions list={this.state.cities}/>
      </div>
    ) : null;
  }

};

export { Search };
