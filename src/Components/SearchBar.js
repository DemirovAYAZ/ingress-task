import React from 'react';
import '../Assets/Dashboard.css'

function SearchBar({ searchQuery, onSearch }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search"
        value={searchQuery}
        onChange={onSearch}
      />
    </div>
  );
}

export default SearchBar;
