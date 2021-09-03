import React, { useState } from "react";
import Modal from "./Modal";

const Card = ({ location, onClick, showModal }) => {
  const [views, setViews] = useState(0);

  const fecha = new Date(location.createdAt); // Fri, 05 Mar 2021 09:10:35 GMT
  const hour = fecha.getHours();
  const minutes = fecha.getMinutes();

  const handleCardClick = () => {
    setViews((prev) => prev + 1);
    onClick(location.id);
  };

  const handleModalClick = () => {
    onClick("");
  };

  return (
    <div className="cards">
      <div className="edit"><img src="Edit.svg" alt="Edit icon" /></div>
      <div className="card" onClick={handleCardClick}>
        <h4 className="location-name">{location.name}</h4>
        <div className="location-description">
          <ul>
            <li>
              <img src="Users.svg" alt="Users icon" />
              {location.userCount}
            </li>
            <li>
              <img src="Timezone.svg" alt="Timezone icon" />
              {hour}:{minutes}
              {hour >= 12 ? "pm" : "am"} (GMT +01:00)
            </li>
            <li>
              <img src="Views.svg" alt="Views icon" />
              {views} View
            </li>
          </ul>
        </div>
      </div>
      <div onClick={handleModalClick}>
        <Modal
          showModal={showModal}
          location={location}
          id={location.id}
          views={views}
        />
      </div>
    </div>
  );
};

export default Card;
