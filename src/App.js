import React, { useState, useEffect } from "react";
import axios from "axios";

// Importing styles:
import "./App.css";
import "./Card.css";
import "./Nav.css";
import "./Modal.css";

// Importing the Components:
import Card from "./components/Card";
import Nav from "./components/Nav";

function App() {
  const [locations, setLocations] = useState([]);
  const [selectedLocationId, setSelectedLocationId] = useState("");

  useEffect(() => {
    axios
      .get("https://6033c4d8843b15001793194e.mockapi.io/api/locations")
      .then((response) => {
        setLocations(response.data);
      });
  }, []);

  const handleCardClick = (locationId) => {
    setSelectedLocationId(locationId);
  };

  const isModalShown = (location) => location.id === selectedLocationId;

  return (
    <div className="App">
      <Nav />
      <div className="cards-app">
        {locations.map((location) => (
          <Card
            location={location}
            key={location.id}
            onClick={handleCardClick}
            showModal={isModalShown(location)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
