import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Importing styles:
import './App.css';
import './cards/Cards.css';
import './navbar/Nav.css';
import './modal/Modal.css';

// Importing the Components:
import Cards from './cards/Cards'
import Nav from './navbar/Nav';


function App() {
  const [ locations, setLocations ] = useState([]);
  const [ showModal, setShowModal ] = useState("false");

  useEffect(() => {
    axios.get('https://6033c4d8843b15001793194e.mockapi.io/api/locations')
    .then((response) => {
      setLocations(response.data);
    })
  }, []);

  const openModal = () => {
    console.log("hola");
    setShowModal( prev => !prev);
  }

  return (
    <div className="App">
      <Nav />
      {locations.map((location) => (
        <Cards
          location={location}
          key={location.id}
          openModal={openModal}
          showModal={showModal}
          setshowModal={setShowModal}
        />
      ))}
    </div>
  );

}

export default App;
