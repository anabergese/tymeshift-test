import React from 'react';

const Modal = ( { showModal, setShowModal } ) => {

  return(
    <div className="modal">
      {showModal ? <p>See my modal</p> : null}
    </div>
  );
};

export default Modal;
