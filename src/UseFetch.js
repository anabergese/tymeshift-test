import React, { useState } from 'react';
import axios from 'axios';

const UseFetch = () => {
  // We want to make a API call whenever
  // we call this hook, and we can do it with useEffect:
  const [ location, setLocation ] = useState("");

  const fetch = () => {
        axios.get('https://6033c4d8843b15001793194e.mockapi.io/api/locations')
        .then((response) => {
          setLocation(response.data[0].name);
        })
  }

  return(
      <div>
        <h1>{location}</h1>
        <button onClick={fetch}>Fetching data</button>
      </div>
  );
};

export default UseFetch;

// API information:
// createdAt: "2021-03-05T09:10:35.462Z"
// description: "Investment Account"
// id: "1"
// name: "McGlynnview"
// userCount: 6221
