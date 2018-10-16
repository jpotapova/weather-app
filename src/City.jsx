import React , {Component} from 'react';

class City extends Component {

  constructor(props) {
    super(props);
    this.state = {
      city: {}
    }
  }

  formatDate(date) {

    function getMonth(date) {
      const months = [
        "January", "February", "March",
        "April", "May", "June", "July",
        "August", "September", "October",
        "November", "December"
      ];
      return months[date.getMonth()];
    }

    const d = date.getDate(),
          monthIndex = date.getMonth(),
          y = date.getFullYear(),
          h = date.getHours(),
          m = getMonth(date),
          min = date.getMinutes()


    return d + ' ' + m + ' ' + y + ' ' + h + ':' + min;
  }

  componentDidMount() {
    let id = this.props.match ? this.props.match.params.id : 0;
    if (id) {
      fetch("http://localhost:3001/cities?id="+id)
        .then(response => response.json())
        .then(data => this.setState({ city: data[0] }));
    }
  }

  render() {
    return (
      <div>
        <div className="h1">
          <h1>{this.state.city.name}</h1>
          {this.props.myLocation  && <p>(your current location)</p>}
        </div>
        <div className="weather">
          <p className="datetime">{this.formatDate(new Date())}</p>
          <p className="temperature">+15</p>
          <p className="description">Clear</p>
        </div>
      </div>
    );
  }

};

export { City };
