import React , {Component} from 'react';
import { ItemsList } from './ItemsList';

class Search extends Component {

  constructor(props) {
    super(props);
    this.state = {
      term: "",
      cities: [],
      msg: ""
    }
    this.updateTerm = this.updateTerm.bind(this);
    this.submitSearch = this.submitSearch.bind(this);

  }

  updateTerm(e){
    this.setState({
      "term": e.target.value
    })
  }

  submitSearch(e) {
    let term = this.state.term;
    this.setState({
      "term": ""
    })

    if (term.length === 0) {
      this.setState({ cities: [], msg: "Please supply a search term" })
    } else {
      fetch("http://localhost:3001/cities?name_like="+term+"&_limit=10")
        .then(response => response.json())
        .then(data => {
          if (data.length > 0) {
            // results found
            this.setState({ cities: data, msg: "" })
          } else {
            // nothing found
            this.setState({ cities: [], msg: "Nothing found for '"+term+"'" })
          }
        });
    }

  }

  render() {
    return (
      <div className="search">
        <div className="h1">
          <h1>Search</h1>
          <div>
            <input type="text" value={this.state.term} onChange={this.updateTerm}/>
            <button className="search__button" type="button" onClick={this.submitSearch}>Update results</button>
          </div>
        </div>
        {this.state.msg && <p>{this.state.msg}</p>}
        <ItemsList items={this.state.cities} link="/city/"/>
      </div>
    )
  }

};

export { Search };
