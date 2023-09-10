import React, { useState } from 'react';
import './SearchBar.scss';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  const handleInputChange = (e) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    onSearch(newQuery); 
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="start typing here..."
        value={query}
        onChange={handleInputChange} 
      />
    </div>
  );
};

export default SearchBar;