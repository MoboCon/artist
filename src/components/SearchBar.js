import React, { useState } from 'react';
import './SearchBar.scss';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form className="search-bar" onSubmit={handleSearch}>
      <input 
        type="text" 
        placeholder="Caută..." 
        value={query} 
        onChange={(e) => setQuery(e.target.value)} 
      />
      <button type="submit">🔍</button>
    </form>
  );
};

export default SearchBar;
