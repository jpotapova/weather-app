import React, { Component } from "react";
import { formatTemp, formatURI, formatDate, weatherQuery } from "./helpers";
import "whatwg-fetch";

class City extends Component {

  constructor(props) {

    super(props);
    this.state = {
      city: {},
      favs: [],
      weather: null,
      geoMsg: ""
    };
    this.isFav = this.isFav.bind(this);
    this.toggleFav = this.toggleFav.bind(this);
    this.getCityInfo = this.getCityInfo.bind(this);
    this.getLocationInfo = this.getLocationInfo.bind(this);
    this.id = "";

  }

  componentDidMount() {

    const geoMsg = this.props.myLocation ? "Attempting to retrieve your location..." : "";

    this.id = this.props.match ? this.props.match.params.id : 0;
    if (this.id) {

      this.getCityInfo(this.id);

    } else {

      this.getLocationInfo();

    }

    this.setState({
      favs: JSON.parse(localStorage.getItem("favs")) || [],
      geoMsg: geoMsg
    });

  }

  getCityInfo(id) {

    window.fetch(formatURI(":3001/cities?id=" + id))
      .then(response => response.json())
      .then(data => this.setState({ city: data[0] }));

    window.fetch(weatherQuery("weather?id=" + id))
      .then(response => response.json())
      .then(data => this.setState({ weather: data }));

  }

  getLocationInfo() {

    navigator.geolocation.getCurrentPosition(
      position => {

        this.setState({
          geoMsg: null
        });

        const c = position.coords;
        window.fetch(weatherQuery("weather?lat=" + c.latitude + "&lon=" + c.longitude))
          .then(response => response.json())
          .then(data => this.setState({ weather: data }));

      },
      () => {

        this.setState({
          geoMsg: "Sorry, not possible to retrieve your location"
        });

      },
      {
        maximumAge: Infinity
      }
    );

  }

  isFav() {

    const i = this.state.favs.findIndex((f) => this.id === f.id + "");
    return i > -1;

  }

  toggleFav() {

    let newFavs;
    if (this.isFav()) {

      // remove from favourites
      newFavs = this.state.favs.filter((f) => f.id + "" !== this.id);

    } else {

      // add to favourites
      newFavs = this.state.favs.concat([this.state.city]);

    }

    this.setState({
      favs: newFavs
    });
    localStorage.setItem("favs", JSON.stringify(newFavs));

  }

  render() {

    return (

      <div>
        <div className="h1">
          <h1>{this.state.city.name || "My location"}</h1>
        </div>
        <div className="weather">
          <p className="datetime">{formatDate(new Date())}</p>
          {this.state.geoMsg && <p>{this.state.geoMsg}</p>}
          {this.state.weather && this.state.weather.main && <p className="temperature">{formatTemp(this.state.weather.main.temp)}</p>}
          {this.state.weather && <p className="description">{this.state.weather.weather[0].main}</p>}
          {!this.props.myLocation && (
            <button className="button" type="button" onClick={this.toggleFav}>
              {this.isFav() ? "Remove from favourites" : "Add to favourites"}
            </button>
          )}
        </div>
      </div>
    );

  }

}

export { City };
