import React , {Component} from 'react';
import { Suggestions } from './Suggestions';
const axios = require('axios');

class Search extends Component {

  constructor(props) {
    super(props);
    this.listCities = this.listCities.bind(this);

    this.state = {
      cities: [],
      msg: ""
    };
  }

  listCities(e) {
    let text = e.target.value;
    if (text.length) {
      // non empty search term
      if (text.length > 2) {
        // long enough search term
        // Make a request for a user with a given ID
        fetch("http://localhost:3001/cities?name_like="+text+"&_limit=10")
          .then(response => response.json())
          .then(data => {
            if (data.length > 0) {
              // results found
              this.setState({ cities: data, msg: "" })
            } else {
              // nothing found
              this.setState({ cities: [], msg: "Nothing found" })
            }
          });
      } else {
        // search term too short
        this.setState({
          cities: [],
          msg: "Type more than 2 characters to see suggestions"
        });
      }
    } else {
      // empty search term
      this.setState({
        cities: [],
        msg: ""
      });
    }


  }

  render() {
    return this.props.show ? (
      <div className="search">
        <input type="text" placeholder="Start typing to search by city" onChange={this.listCities} />
        <Suggestions list={this.state.cities} msg={this.state.msg}/>
      </div>
    ) : null;
  }

};

export { Search };
