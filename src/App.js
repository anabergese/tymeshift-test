import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Importing styles:
import './App.css';
import './cards/Cards.css';
import './navbar/Nav.css';

// Importing the Components:
import Cards from './cards/Cards'
import Nav from './navbar/Nav';

// e.preventDefault();

function App() {
  const [ locations, setLocations ] = useState([]);

  useEffect(() => {
    axios.get('https://6033c4d8843b15001793194e.mockapi.io/api/locations')
    .then((response) => {
      setLocations(response.data);
    })
  }, []);

  return (
    <div className="App">
      <Nav />
      {locations.map((location) => (
        <Cards location={location}/>
      ))}
    </div>
  );

}

export default App;
