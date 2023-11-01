import React from 'react';
import "./Modal.css";

const ImageModal = ({ imageUrl, onClose, onPrevious, onNext }) => {
  return (
    <div className="image-modal">
      <div className="modal-content">
        <i className="fa fa-chevron-circle-left previous_btn" aria-hidden="true" onClick={onPrevious}></i>
        <span className="close" onClick={onClose}>CLOSE</span>
        <img src={imageUrl} alt="Certificate"/>
        <i className="fa fa-chevron-circle-right next_btn" aria-hidden="true" onClick={onNext}></i>
      </div>
    </div>
  );
};

export default ImageModal;
