import React, { Component } from "react";

class City extends Component {

  constructor(props) {

    super(props);
    this.state = {
      city: {},
      favs: [],
      weather: null
    };
    this.isFav = this.isFav.bind(this);
    this.toggleFav = this.toggleFav.bind(this);
    this.formatTemp = this.formatTemp.bind(this);
    this.id = "";

  }

  componentDidMount() {

    this.id = this.props.match ? this.props.match.params.id : 0;
    if (this.id) {

      fetch("http://localhost:3001/cities?id=" + this.id)
        .then(response => response.json())
        .then(data => this.setState({ city: data[0] }));

      const requestString = "http://api.openweathermap.org/data/2.5/weather?id="
                            + this.id
                            + "&APPID=62b8cfcff3ecb643b618d34c4d24a283&units=metric";

      fetch(requestString)
        .then(response => response.json())
        .then(data => this.setState({ weather: data }));

    }

    this.setState({
      favs: JSON.parse(localStorage.getItem("favs")) || []
    });

  }

  formatTemp(temp) {

    if (temp > 0) {

      temp = "+" + temp;

    }
    return temp + " C";

  }

  formatDate(date) {

    function getMonth() {

      const months = [
        "January", "February", "March",
        "April", "May", "June", "July",
        "August", "September", "October",
        "November", "December"
      ];
      return months[date.getMonth()];

    }

    const d = date.getDate(),
          y = date.getFullYear(),
          h = date.getHours(),
          m = getMonth(),
          min = date.getMinutes();


    return d + " " + m + " " + y + " " + h + ":" + min;

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
          <p className="datetime">{this.formatDate(new Date())}</p>
          {this.state.weather && <p className="temperature">{this.formatTemp(this.state.weather.main.temp)}</p>}
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
