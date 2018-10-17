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

        return fetch(byIDs)
            .then(response => response.json())
            .then(weatherData => {

              const cities = data.map((c, index) => {

                c.temp = weatherData.list[index].main.temp;
                return c;

              });
              return this.setState({ cities: cities });

            });

      });

  }

  render() {

    return (

      <div>
        <div className="h1">
          <h1>{this.props.country.Name}</h1>
        </div>
        <div className="tabs">
          <input name="tabs" type="radio" id="tab-1" defaultChecked="checked" className="input" />
          <label htmlFor="tab-1" className="label">List</label>
          <div className="panel panel-list">
            <ItemsList items={this.state.cities} link="/city/" actions="weather" />
          </div>
          <input name="tabs" type="radio" id="tab-2" defaultChecked="checked" className="input" />
          <label htmlFor="tab-2" className="label">Map</label>
          <div className="panel panel-map">
            <Map items={this.state.cities} />
          </div>
        </div>
      </div>

    );

  }

}

export { Country };
