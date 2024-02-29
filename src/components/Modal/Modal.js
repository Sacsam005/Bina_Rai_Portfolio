import React, { useEffect, useRef } from "react";
import "./Modal.css";

const ImageModal = ({ imageUrl, onClose, onPrevious, onNext }) => {
  const modalContentRef = useRef(null);

  useEffect(() => {
    const handleDocumentClick = (event) => {
      const modalContent = document.querySelector(".modal_content");
      if (modalContent && !modalContent.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleDocumentClick);

    return () => {
      document.removeEventListener("mousedown", handleDocumentClick);
    };
  }, [onClose]);

  return (
    <div className="image_modal" ref={modalContentRef}>
      <div className="modal_content">
        <i
          className="fa fa-chevron-left previous_btn p-2"
          aria-hidden="true"
          onClick={onPrevious}
        ></i>
        <span className="close" onClick={onClose}>
          &#10006;
        </span>
        <img src={imageUrl} alt="Certificate" />
        <i
          className="fa fa-chevron-right next_btn p-2"
          aria-hidden="true"
          onClick={onNext}
        ></i>
      </div>
    </div>
  );
};

export default ImageModal;
