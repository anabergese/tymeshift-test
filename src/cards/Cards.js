import React from 'react';

const Cards = ( { location } ) => {
  const fecha = new Date(location.createdAt); // Fri, 05 Mar 2021 09:10:35 GMT
  const hour = fecha.getHours();
  const minutes = fecha.getMinutes();


  return(
    // I need to create cards with each of the locations;

    <div className="cards">

      {/*<p>edit icon</p>*/}
      <div className="card">
        <h4 className="location-name">{location.name}</h4>
        <div className="location-description">
          <ul>
            <li><img src="Users.svg" alt="Users icon"/>{location.userCount}</li>
            <li><img src="Timezone.svg" alt="Timezone icon"/>{hour}:{minutes}{hour >= 12 ? 'pm' : 'am'} (GMT +01:00)</li>
            <li><img src="Views.svg" alt="Views icon"/>1 View</li>
          </ul>
        </div>
      </div>
    </div>

  );
};

export default Cards;


// API information:
// createdAt: "2021-03-05T09:10:35.462Z"
// description: "Investment Account"
// id: "1"
// name: "McGlynnview"
// userCount: 6221
