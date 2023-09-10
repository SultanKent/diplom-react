import React from 'react';
import './CountryFilter.scss';

const CountryFilter = ({ countryFilter, setCountryFilter }) => {
  const handleFilterChange = (country) => {
    setCountryFilter(country);
  };

  return (
    <div className="country-filter">
      <button
        onClick={() => handleFilterChange('')}
        className={countryFilter === '' ? 'active' : ''}
      >
        All
      </button>
      <button
        onClick={() => handleFilterChange('Brazil')}
        className={countryFilter === 'Brazil' ? 'active' : ''}
      >
        Brazil
      </button>
      <button
        onClick={() => handleFilterChange('Kenya')}
        className={countryFilter === 'Kenya' ? 'active' : ''}
      >
        Kenya
      </button>
      <button
        onClick={() => handleFilterChange('Columbia')}
        className={countryFilter === 'Columbia' ? 'active' : ''}
      >
        Columbia
      </button>
    </div>
  );
};

export default CountryFilter;