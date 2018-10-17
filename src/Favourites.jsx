import React, { Component } from "react";
import { ItemsList } from "./ItemsList";

class Favourites extends Component {

  constructor(props) {

    super(props);
    this.state = {
      cities: []
    };
    this.removeFav = this.removeFav.bind(this);

  }

  componentDidMount() {

    const favs = JSON.parse(localStorage.getItem("favs")) || [];
    if (favs) {

      this.setState({ cities: favs });

    }

  }

  removeFav(id) {

    const newFavs = this.state.cities.filter((f) => f.id !== id);
    this.setState({
      cities: newFavs
    });
    localStorage.setItem("favs", JSON.stringify(newFavs));

  }

  render() {

    return (

      <div>
        <div className="h1">
          <h1>Favourites</h1>
        </div>
        {!this.state.cities.length && <p className="msg">No favourites yet</p>}
        <ItemsList removeFav={this.removeFav} items={this.state.cities} link="/city/" actions="delete" />
      </div>

    );

  }

}

export { Favourites };
