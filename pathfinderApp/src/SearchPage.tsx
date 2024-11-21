import React from 'react';
import './search.css'

import DisplaySteps from './DisplaySteps';

function search(nav, start=0, end=0) {

    if (!start || !end) {
      alert('Please enter both start and end positions.');
      
    }

    // You can replace the following with API calls or other logic
    console.log(`Searching route from "${start}" to "${end}"`);
    alert(`Searching route from "${start}" to "${end}"`);
    // https://developer.mozilla.org/en-US/docs/Web/API/Document/location
    nav("display")
  }

function SearchPage(nav) {
    return (
    <body>

    <div className="search-container">
        <h2>Search for a Route</h2>
        <div className="form-group">
        <label for="start">Start Position</label>
        <input type="text" id="start" placeholder="Enter start position" />
        </div>
        <div className="form-group">
        <label for="end">End Position</label>
        <input type="text" id="end" placeholder="Enter end position" />
        </div>
        <button className="search-button" onClick={() => search(nav)}>Search</button>
    </div>
    </body>)
}

export default SearchPage;