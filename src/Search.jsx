import React from 'react';
import { Suggestions } from './Suggestions';

const Search = (props) => {
  return props.show ? (
    <div className="search">
      <input type="text" placeholder="Search by city"/>
      <Suggestions list={[{"name": "Vilnius"},{"name": "Kaunas"}, {"name": "Utena"}]}/>
    </div>
  ) : null;
};

export { Search };
