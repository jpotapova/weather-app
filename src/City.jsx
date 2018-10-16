import React , {Component} from 'react';

class City extends Component {

  constructor(props) {
    super(props);
    this.state = {
      city: {}
    }
  }

  componentDidMount() {
    fetch("http://localhost:3001/cities?id="+this.props.match.params.id)
      .then(response => response.json())
      .then(data => this.setState({ city: data[0] }));
  }

  render() {
    return (
      <div>
        <div className="h1">
          <h1>{this.state.city.name}</h1>
          <p>(your current location)</p>
        </div>
        <div className="weather">
          <p className="datetime">Tuesday, 2018-10-16 20:00</p>
          <p className="temperature">+15</p>
          <p className="description">Clear</p>
        </div>
      </div>
    );
  }

};

export { City };
