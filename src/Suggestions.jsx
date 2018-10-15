import React from 'react';

const Suggestions = (props) => {
  return props.list.length ? (
    <div className="suggestions">
      <ul>
        {props.list.map((city, index) => (
          <li key={index}>
            <a href="#">{city.name}</a>
          </li>
        ))}
      </ul>
    </div>
  ) : null;
};

export { Suggestions };
