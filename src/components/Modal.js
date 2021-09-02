import React from 'react';

const Modal = ( { showModal, setShowModal, locations, views } ) => {
  const fecha = new Date(locations.createdAt); // Fri, 05 Mar 2021 09:10:35 GMT
  const hour = fecha.getHours();
  const minutes = fecha.getMinutes();

  return(
    <div>
      { showModal ? (
          <div className="modal">
          <h4 className="location-name">{location.name}</h4>
          <div className="location-description">
            <ul>
              <li><img src="Users.svg" alt="Users icon"/>{location.userCount}</li>
              <li><img src="Timezone.svg" alt="Timezone icon"/>{hour}:{minutes}{hour >= 12 ? 'pm' : 'am'} (GMT +01:00)</li>
              <li><img src="Views.svg" alt="Views icon"/>{views} View</li>
            </ul>
          </div>
          <div>
            <h3>Description</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit mattis blandit neque, vulputate proin non natoque mi pellentesque nulla nostra molestie varius, duis ultricies netus eget ad ullamcorper sed libero taciti.</p>
          </div>
          <button className="btn-done">Done</button>
          </div>
        ) : null}
    </div>
  );
};

export default Modal;
