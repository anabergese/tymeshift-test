import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Importing styles:
import './App.css';
import './cards/Cards.css';
import './navbar/Nav.css';
import './modal/Modal.css';

// Importing the Components:
import Cards from './components/Cards'
import Nav from './components/Nav';


function App() {
  const [ locations, setLocations ] = useState([]);
  const [ showModal, setShowModal ] = useState("");
  const [ views, setViews ] = useState(0);

  useEffect(() => {
    axios.get('https://6033c4d8843b15001793194e.mockapi.io/api/locations')
    .then((response) => {
      setLocations(response.data);
    })
  }, []);


  const openModal = () => {
    setShowModal( prev => !prev );
    setViews(views + 1);
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
          views={views}
          setViews={setViews}
        />
      ))}
    </div>
  );

}

export default App;
