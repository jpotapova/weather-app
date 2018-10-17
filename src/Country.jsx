import React, { Component } from "react";
import { ItemsList } from "./ItemsList";
import { Map } from "./Map";

class Country extends Component {

  constructor(props) {

    super(props);
    this.state = {
      cities: []
    };

  }

  componentDidMount() {

    fetch("http://localhost:3001/cities?country=" + this.props.code + "&_limit=2")
      .then(response => response.json())
      .then(data => {
        this.setState({ cities: data });
        return data;
      })
      .then(data => {
        const ids = data.map((city) => city.id);
        const byIDs = "http://api.openweathermap.org/data/2.5/group?id="
                                + ids.join(",")
                                + "&APPID=62b8cfcff3ecb643b618d34c4d24a283&units=metric";
        const weatherData = {"cnt":2,"list":[{"coord":{"lon":69.73,"lat":33.54},"sys":{"type":0,"id":0,"message":0.0032,"country":"AF","sunrise":1539739638,"sunset":1539780299},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"main":{"temp":16.63,"pressure":775.63,"humidity":22,"temp_min":16.63,"temp_max":16.63,"sea_level":1023.55,"grnd_level":775.63},"wind":{"speed":0.72,"deg":210.001},"clouds":{"all":0},"dt":1539766168,"id":1120471,"name":"Zorkot"},{"coord":{"lon":65.04,"lat":32.11},"sys":{"type":0,"id":0,"message":0.0055,"country":"AF","sunrise":1539740688,"sunset":1539781502},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"main":{"temp":18.73,"pressure":892.44,"humidity":75,"temp_min":18.73,"temp_max":18.73,"sea_level":1027.65,"grnd_level":892.44},"wind":{"speed":1.82,"deg":64.0009},"clouds":{"all":0},"dt":1539766168,"id":1474856,"name":"Dê Kanāt-e Laţīf"}]};
        let cities = data.map((c, index) => {
          c.temp = weatherData.list[index].main.temp;
          return c;
        });
        return this.setState({cities: cities});
        // FIXME - do the real fetch
        // return fetch(byIDs)
        //     .then(response => response.json())
        //     .then(weatherData => {
        //       let cities = data.map((c, index) => {
        //         c.temp = weatherData.list[index].main.temp;
        //         return c;
        //       });
        //       return this.setState({cities: cities});
        //     });
      });

  }

  render() {

    return (
      <div>
        <div className="h1">
          <h1>{this.props.country.Name}</h1>
        </div>
        <ItemsList items={this.state.cities} link="/city/" actions="weather" />
        <Map items={this.state.cities} />
      </div>
    );

  }

}

export { Country };
