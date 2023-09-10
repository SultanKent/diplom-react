import React, { useState, useEffect } from 'react';
import './OurCoffee.scss';
import CoffeeList from '../../components/Coffee/CoffeeList';
import SearchBar from '../../components/SearchBar/SearchBar';
import CountryFilter from '../../components/CountryFilter/CountryFilter'; 
import girl_coffee from '../../img/girl-coffee.png';
import black_beans from '../../img/black-beans.png';

const OurCoffee = () => {
  const [coffees, setCoffees] = useState([]);
  const [filteredCoffees, setFilteredCoffees] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [countryFilter, setCountryFilter] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('./public/db.json'); 
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setCoffees(data.coffee);
        setFilteredCoffees(data.coffee); 
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  const handleSearch = (query) => {
    setSearchQuery(query);
    const filtered = coffees.filter((coffee) =>
      coffee.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredCoffees(filtered);
  };
  useEffect(() => {
    
    const filterByCountry = () => {
      if (countryFilter === '') {
        setFilteredCoffees(coffees); 
      } else {
        const filtered = coffees.filter((coffee) => coffee.country === countryFilter);
        setFilteredCoffees(filtered);
      }
    };

    filterByCountry();
  }, [countryFilter, coffees]);

  return (
    <div className="Our-coffee">
      <div className="Our-coffee-about">
        <div className="Our-coffee-about1">
          <img src={girl_coffee} alt="girl_coffee" />
        </div>
        <div className="Our-coffee-about2">
          <h2>About our beans</h2>
          <div className="beans_black">
            <img src={black_beans} alt="black_beans" />
          </div>
          <p>
            Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
            <br />
            <br />
            Afraid at highly months do things on at. Situation recommend objection do intention
            <br />
            so questions.
            <br />
            As greatly removed calling pleased improve an. Last ask him cold feel
            <br />
            met spot shy want. Children me laughing we prospect answered followed. At it went
            is song that held help face.
          </p>
        </div>
      </div>
      <div className="line">
        <div className="line-center"></div>
      </div>
      <div className="Our-Coffee-goods">
        <div className="Coffee-goods-content1">
          <div className="Coffee-goods-content1-left">
          <p className='goods-content1_text'>Looking for</p>
          <SearchBar onSearch={handleSearch} />
          </div>
          <div className="Coffee-goods-content1-right">
          <p className='goods-content1_text mr-3'>Or filter</p>
          <CountryFilter
            countryFilter={countryFilter}
            setCountryFilter={setCountryFilter}
          />
          </div>
        </div>
        <div className="Coffee-goods-content2">
          <CoffeeList coffees={filteredCoffees} /> 
        </div>
      </div>
    </div>
  );
};

export default OurCoffee;