import React from 'react';
import Modal from './Modal';

const Cards = ( { location, openModal, showModal, setShowModal, views } ) => {
  const fecha = new Date(location.createdAt); // Fri, 05 Mar 2021 09:10:35 GMT
  const hour = fecha.getHours();
  const minutes = fecha.getMinutes();

  return(
    <div className="cards" onClick={openModal}>
      {/*<p>edit icon</p>*/}
      <div className="card">
        <h4 className="location-name">{location.name}</h4>
        <div className="location-description">
          <ul>
            <li><img src="Users.svg" alt="Users icon"/>{location.userCount}</li>
            <li><img src="Timezone.svg" alt="Timezone icon"/>{hour}:{minutes}{hour >= 12 ? 'pm' : 'am'} (GMT +01:00)</li>
            <li><img src="Views.svg" alt="Views icon"/>{views} View</li>
          </ul>
        </div>
      </div>
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        location={location}
        id={location.id}
        views={views}
        />
    </div>
  );
};

export default Cards;
