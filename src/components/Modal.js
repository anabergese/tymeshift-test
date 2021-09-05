import React from 'react';

const Modal = ( { showModal, setShowModal, location, views } ) => {
  const fecha = new Date(location.createdAt); // Fri, 05 Mar 2021 09:10:35 GMT
  const hour = fecha.getHours();
  const minutes = fecha.getMinutes();

  return(
    <div>
      { showModal ? (
        <div className="modal-background">
          <div className="modal-wrapper">
            <div className="modal-title">
              <img className="close" src="Close.svg" alt="Close icon"/>
              <h4 className="location-name">{location.name}</h4>
            </div>
            <div className="modal-information">
              <div className="location">
                <ul>
                  <li><img src="Users.svg" alt="Users icon"/>{location.userCount}</li>
                  <li><img src="Timezone.svg" alt="Timezone icon"/>{hour}:{minutes}{hour >= 12 ? 'pm' : 'am'} (GMT +01:00)</li>
                  <li><img src="Views.svg" alt="Views icon"/>{views} View</li>
                </ul>
              </div>
              <div className="description">
                <h3>Description</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit mattis blandit neque, vulputate proin non natoque mi pellentesque nulla nostra molestie varius, duis ultricies netus eget ad ullamcorper sed libero taciti.</p>
              </div>
            </div>
            <button className="btn-done">Done</button>
          </div>
        </div>
        ) : null}
    </div>
  );
};

export default Modal;

