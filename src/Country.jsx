import React, {Component} from 'react';

class Country extends Component {
  constructor(props) {
    super(props);
    console.log(props)
  }

  render() {
    return (
      <div>
        <div className="h1">
          <h1>{this.props.country.Name}</h1>
        </div>
      </div>
    );
  }
}

export { Country };
