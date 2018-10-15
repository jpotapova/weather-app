import React from 'react';

const Suggestions = (props) => {
  return props.show ? (
    <div className="search">
      <input type="text" placeholder="Search by city"/>
      <div className="suggestions">
        <ul>
          <li>
            <a href="#">Vilnius</a>
          </li>
          <li>
            <a href="#">Kaunas</a>
          </li>
          <li>
            <a href="#">Utena</a>
          </li>
        </ul>
      </div>
    </div>
  ) : null;
};

export { Suggestions };
