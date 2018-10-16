import React, {Component} from 'react';
import { ItemsList } from './ItemsList';

class Favourites extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cities: []
    }
  }

  componentDidMount() {

    let favs = JSON.parse(localStorage.getItem("favourites"));
    if (favs) {
      this.setState({cities: favs});
    }
    fetch("http://localhost:3001/cities?country=LT")
      .then(response => response.json())
      .then(data => this.setState({ cities: data }));
  }

  render() {
    return (
      <div>
        <div className="h1">
          <h1>Favourites</h1>
        </div>
        <ItemsList items={this.state.cities} link="/city/" actions="delete"/>
      </div>
    );
  }
}

export { Favourites };
