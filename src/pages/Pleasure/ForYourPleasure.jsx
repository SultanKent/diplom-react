import React, { useState, useEffect } from 'react';
import './ForYourPleasure.scss';
import CoffeeList from '../../components/Coffee/CoffeeList';
import for_your_pleasure_img from '../../img/for-your-pleasure-img.png';
import black_beans from '../../img/black-beans.png';

const ForYourPleasure = () => {
  const [coffees, setCoffees] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/db.json'); 
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setCoffees(data.coffee);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="for-your-pleasure">
      <div className="for-your-pleasure-main">
      <div className="for-your-pleasure-img">
        <img src={for_your_pleasure_img} alt="for_your_pleasure_img" />
      </div>
      <div className="for-your-pleasure-about">
        <h2>About our goods</h2>
        <div className="beans_black">
        <img src={black_beans} alt="black_beans" />
        </div>
        <p>Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
        <br/><br/>
        Afraid at highly months do things on at. Situation recommend objection do intention
        <br/>
        so questions. 
        <br/>
        As greatly removed calling pleased improve an. Last ask him cold feel
        <br/>
        met spot shy want. Children me laughing we prospect answered followed. At it went
        is song that held help face.</p>
      </div>
      </div>
      <div className="line">
        <div className="line-center"></div>
      </div>
      <CoffeeList coffees={coffees} />
    </div>
  );
};

export default ForYourPleasure;