import React, { useEffect, useState } from 'react';
import './Coffee.scss';
import CoffeeItem from './CoffeeItem';
import Spinner from '../Spinner/Spinner'; 

const CoffeeList = ({ coffees }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('./public/db.json'); 
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []); 

  return (
    <div className="coffee-list">
      {isLoading ? (
        <Spinner />
      ) : (
        coffees.map((coffee, index) => (
          <CoffeeItem key={index} {...coffee} />
        ))
      )}
    </div>
  );
};

export default CoffeeList;