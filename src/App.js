import React, { useState, useEffect } from 'react';
import axios from 'axios';


// Importing styles:
import './App.css';
import './Cards.css';
import './Nav.css';
import './Modal.css';

// Importing the Components:
import Cards from './components/Cards'
import Nav from './components/Nav';
import Modal from './components/Modal';


function App() {
  const [ locations, setLocations ] = useState([]);
  const [ showModal, setShowModal ] = useState("");
  const [ views, setViews ] = useState(0);
  const [ cardIdSelected, setCardIdSelected ] = useState(0);

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

  const cardId = (cardId) => {
    setCardIdSelected(cardId => location.id);
  }
  return (
    <div className="App">
      <Nav />
      {locations.map((location) => (
        <Cards
          location={location}
          key={location.id}
          id={cardId}
          openModal={openModal}
          showModal={showModal}
          setshowModal={setShowModal}
          views={views}
          setViews={setViews}
        />
      ))}
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        cardIdSelected={cardIdSelected}
        views={views}
        />
    </div>
  );

}

export default App;
