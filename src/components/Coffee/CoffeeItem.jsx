import React from 'react';
import { Link } from 'react-router-dom';

const CoffeeItem = ({ name, country, url, price }) => {
  return (
    <div className="coffee-item">
      <Link to={`/coffee/${name}`}>
        <img src={url} alt={name} />
        <p>{name}</p>
        <p>{country}</p>
        <p>{price}</p>
      </Link>
    </div>
  );
};

export default CoffeeItem;