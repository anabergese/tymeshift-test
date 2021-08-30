import React, { useState } from 'react';
import axios from 'axios';

// Importing styles:
import './App.css';
import './cards/Cards.css';
import './navbar/Nav.css';

// Importing the Components:
import Cards from './cards/Cards'
import Nav from './navbar/Nav';
// import UseFetch from './UseFetch';


function App() {
  const [ location, setLocation ] = useState("");

  const fetch = () => {
        axios.get('https://6033c4d8843b15001793194e.mockapi.io/api/locations')
        .then((response) => {
          setLocation(response.data);
        })
  }

  return (
    <div className="App">
      <Nav />
      <Cards location={location}/>
      <button onClick={fetch}>Fetching data</button>
   {/*   <UseFetch />*/}
    </div>
  );
}

export default App;
