import React from 'react';
import './CoffeeDetail.scss';
import { useParams } from 'react-router-dom';
import black_beans from '../../img/black-beans.png';

const CoffeeDetail = ({ coffees }) => {
  const { name } = useParams();
  const coffee = coffees.find((item) => item.name === name);
  if (!coffee) {
    return <div>Tovar ne naiden</div>;
  }
  return (
    <div className="coffee-detail">
      <div className="coffee-detail-content1">
        <img src={coffee.url} alt={coffee.name} />
      </div>
      <div className="coffee-detail-content2">
        <h2>About it</h2>
        <div className="beans_black">
          <img src={black_beans} alt="black_beans" />
        </div>
        <p><span className='coffee-detail-word'>Country:</span> {coffee.country}</p>
        <p className='coffee-detail-description'>
        <span className='coffee-detail-word'>Description:</span> {coffee.description}</p>
        <p><span className='coffee-detail-word'>Price:</span> {coffee.price}</p>
      </div>
    </div>
  );
};

export default CoffeeDetail;
