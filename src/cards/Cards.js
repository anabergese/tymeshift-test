import React from 'react';

const Cards = () => {
  return(
    <div className="cards">
      <p>edit icon</p>
      <div className="card-description">
        <h4 className="company-name">Acme HQ</h4>
        <div>
          <ul>
            <li><i></i> 114 Users</li>
            <li><i></i> 2:32pm (GMT +01:00)</li>
            <li><i></i> 1 View</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cards;
