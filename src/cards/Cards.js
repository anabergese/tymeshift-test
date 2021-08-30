import React from 'react';

const Cards = ( { location } ) => {
  return(
    // I need to create cards with each of the locations;

    <div className="cards">

      {/*<p>edit icon</p>*/}
      <div className="card">
        <h4 className="location-name">{console.log(location)}</h4>
        <div className="location-description">
          <ul>
            <li><img src="Users.svg" alt="Girl in a jacket"/>114 Users</li>
            <li><img src="Timezone.svg" alt="Girl in a jacket"/>2:32pm (GMT +01:00)</li>
            <li><img src="Views.svg" alt="Girl in a jacket"/>1 View</li>
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
