import React from 'react';

const Favourites = () => (
  <div>
    <h1>Favourites</h1>
    <ul className="favourites">
      <li className="row">
        <div className="city__name">
          <a href="#">Vilnius</a>
        </div>
        <div className="actions">
          <button type="button" className="action"><i className="fas fa-trash"></i></button>
        </div>
      </li>
      <li className="row">
        <div className="city__name">
          <a href="#">Kaunas</a>
        </div>
        <div className="actions">
          <button type="button" className="action"><i className="fas fa-trash"></i></button>
        </div>
      </li>
      <li className="row">
        <div className="city__name">
          <a href="#">Utena</a>
        </div>
        <div className="actions">
          <button type="button" className="action"><i className="fas fa-trash"></i></button>
        </div>
      </li>
    </ul>
  </div>
);

export { Favourites };
