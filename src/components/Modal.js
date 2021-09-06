import "./../Modal.css";

const Modal = ( { showModal, setShowModal, location, views } ) => {
  const date = new Date(location.createdAt); // Fri, 05 Mar 2021 09:10:35 GMT
  const hour = date.getHours();
  const minutes = date.getMinutes();

  return(
    <div>
      { showModal ? (
        <div className="modal-background">
          <div className="modal-wrapper">
            <div className="modal-title">
              <img className="close" src="Close.svg" alt="Close icon"/>
              <h4 className="location-name-modal">{location.name}</h4>
            </div>
            <div className="modal-information">
              <div className="location">
                <ul>
                  <li><img src="Users.svg" alt="Users icon"/>{location.userCount} Users</li>
                  <li><img src="Timezone.svg" alt="Timezone icon"/>{hour}:{minutes}{hour >= 12 ? 'pm' : 'am'} (GMT +01:00)</li>
                  <li><img src="Views.svg" alt="Views icon"/>{views} {views > 1 ? "Views" : "View"}</li>
                </ul>
              </div>
              <div className="description">
                <h3>Description</h3>
                <p>{location.description}</p>
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

