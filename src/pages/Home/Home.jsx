import React, { useState, useEffect } from 'react';
import './Home.scss';
import CoffeeList from '../../components/Coffee/CoffeeList';
import black_beans from '../../img/black-beans.png';

const Home = () => {
  const [bestsellers, setBestsellers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(process.env.PUBLIC_URL + '/db.json');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setBestsellers(data.bestsellers);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="Home">
      <div className="Home_about">
        <h2>About us</h2>
        <div className="beans_black">
          <img src={black_beans} alt="black_beans" />
        </div>
        <p>Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
        Afraid at highly months do things on at. Situation recommend objection do intention
        so questions. As greatly removed calling pleased improve an. Last ask him cold feel
        met spot shy want. Children me laughing we prospect answered followed. At it went
        is song that held help face.
        <br/> <br />
        Now residence dashwoods she excellent you. Shade being under his bed her, Much
        read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
        horrible but confined day end marriage. Eagerness furniture set preserved far
        recommend. Did even but nor are most gave hope. Secure active living depend son
        repair day ladies now.</p>
      </div>
      <div className="Coffee_best">
      <h2>Our best</h2>
      <div className="Coffee_best_content">
        <CoffeeList coffees={bestsellers} />
      </div>
      </div>
    </div>
  );
};

export default Home;