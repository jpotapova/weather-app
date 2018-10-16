import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Suggestions extends Component {
  constructor(props) {
    super(props);
    this.formatList = this.formatList.bind(this);
  }

  formatList(list, msg) {
    if (msg) {
      return [{"name": msg}]
    } else {
      return list;
    }
  }

  render() {
    let list = this.formatList(this.props.list, this.props.msg);
    return list.length ? (
      <div className="suggestions">
        <ul>
          {list.map((item, index) => (
            <li key={index}>
              {item.id && <Link to={"/city/" + item.id} title={item.name}>{item.name}</Link>}
              {!item.id && <span>{item.name}</span>}
            </li>
          ))}
        </ul>
      </div>
    ) : null;
  }


}

export { Suggestions };
