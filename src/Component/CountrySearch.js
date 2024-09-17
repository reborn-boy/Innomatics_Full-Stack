// src/Components/CountrySearch.js

import React, { useState } from 'react';
import './CountrySearch.css';
import countryData from '../CountryData';

const CountrySearch = () => {
  const [query, setQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [error, setError] = useState('');

  const handleSearch = () => {
    const results = countryData.filter((country) =>
      country.country.toLowerCase().includes(query.toLowerCase())
    );
    if (results.length > 0) {
      setFilteredData(results);
      setError('');
    } else {
      setFilteredData([]);
      setError('Country not found');
    }
  };

  return (
    <div className="container">
      <div className="search-box">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter country name"
        />
        <button onClick={handleSearch}>Search</button>
        {error && <p>{error}</p>}
        {filteredData.length > 0 && (
          <div className="results">
            {filteredData.map((country) => (
              <div key={country.country} className="country-card">
                <h2>{country.country}</h2>
                <p><strong>Capital:</strong> {country.capital}</p>
                <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
                <p><strong>Official Language:</strong> {Array.isArray(country.official_language) ? country.official_language.join(', ') : country.official_language}</p>
                <p><strong>Currency:</strong> {country.currency}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CountrySearch;