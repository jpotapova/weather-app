import React , {Component} from 'react';

class City extends Component {

  constructor(props) {
    super(props);
    this.state = {
      city: {},
      favs: []
    }
    this.isFav = this.isFav.bind(this);
    this.toggleFav = this.toggleFav.bind(this);
    this.id = "";
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
          y = date.getFullYear(),
          h = date.getHours(),
          m = getMonth(date),
          min = date.getMinutes()


    return d + ' ' + m + ' ' + y + ' ' + h + ':' + min;
  }

  isFav() {
    let i = this.state.favs.findIndex((f) => this.id === f.id+'');
    return i > -1;
  }

  toggleFav() {
    let newFavs;
    if (this.isFav()) {
      // remove from favourites
      newFavs = this.state.favs.filter((f)=>f.id+'' !== this.id);
    } else {
      // add to favourites
      newFavs = this.state.favs.concat([this.state.city])
    }

    this.setState({
      favs: newFavs
    });
    localStorage.setItem("favs", JSON.stringify(newFavs));
  }

  componentDidMount() {
    this.id = this.props.match ? this.props.match.params.id : 0;
    if (this.id) {
      fetch("http://localhost:3001/cities?id="+this.id)
        .then(response => response.json())
        .then(data => this.setState({ city: data[0] }));
    }

    this.setState({
      favs: JSON.parse(localStorage.getItem("favs")) || []
    });

  }

  render() {
    return (
      <div>
        <div className="h1">
          <h1>{this.state.city.name || 'My location'}</h1>
        </div>
        <div className="weather">
          <p className="datetime">{this.formatDate(new Date())}</p>
          <p className="temperature">+15</p>
          <p className="description">Clear</p>
          {!this.props.myLocation && (
            <button className="button" type="button" onClick={this.toggleFav}>
              {this.isFav() ? 'Remove from favourites' : 'Add to favourites'}
            </button>
          )}
        </div>
      </div>
    );
  }

};

export { City };
