import React, { Component } from "react";
import { Link } from "react-router-dom";


class ItemsList extends Component {

  constructor(props) {

    super(props);
    this.removeFav = this.removeFav.bind(this);

  }

  removeFav(item) {

    return () => this.props.removeFav(item);

  }

  render() {

    return this.props.items ? (

      <ul>
        {this.props.items.map((item) => (
          <li className="row" key={item.id || item.Code}>
            <div className="item__name">
              <Link to={this.props.link + (item.id || item.Code)} title={item.name || item.Name}>{item.name || item.Name}</Link>
            </div>
            {this.props.actions === "delete" && (
              <div className="actions">
                <button type="button" className="action" onClick={this.removeFav(item.id)}><i className="fas fa-trash"></i></button>
              </div>
            )}
            {this.props.actions === "weather" && <div className="actions">{item.temp}</div>}
          </li>
        ))}
      </ul>

    ) : null;

  }

}

export { ItemsList };
