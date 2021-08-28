import React from 'react';

const Cards = () => {
  return(
    <div className="cards">
      {/*<p>edit icon</p>*/}
      <div className="card">
        <h4 className="location-name">Acme HQ</h4>
        <div clasName="location-description">
          <ul>
            <li><img src="Users.svg" alt="Girl in a jacket"/> 114 Users</li>
            <li><img src="Timezone.svg" alt="Girl in a jacket"/> 2:32pm (GMT +01:00)</li>
            <li><img src="Views.svg" alt="Girl in a jacket"/> 1 View</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cards;
