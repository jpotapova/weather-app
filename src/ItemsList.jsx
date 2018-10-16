import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class ItemsList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return this.props.items ? (
      <ul>
        {this.props.items.map((item, index) => (
          <li className="row" key={index}>
            <div className="item__name">
              <Link to={this.props.link + (item.id || item.Code)} title={item.name || item.Name}>{item.name || item.Name}</Link>
            </div>
            {this.props.actions === "delete" && <div className="actions"><button type="button" className="action"><i className="fas fa-trash"></i></button></div>}
            {this.props.actions === "weather" && <div className="actions">+15</div>}
          </li>
        ))}
      </ul>
    ) : null;
  }
}

export { ItemsList };