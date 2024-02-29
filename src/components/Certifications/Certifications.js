import React, { useState } from "react";
import { Link } from "react-router-dom";
import ImageModal from "../Modal/Modal";
import "./Certifications.css";

export default function Certifications() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const certificateImages = [
    require("../../img/Six Sigma Green Belt - Bina Rai.jpg"),
    require("../../img/bina-rai-six-sigma-greenbelt-certificate.jpg"),
    require("../../img/HACCP Principles for Meat and Poultry.jpg"),
    require("../../img/bina-rai-haccp-certificate.jpg"),
    require("../../img/bina-rai-sqf-manufacturing-certificate.jpg"),
    require("../../img/bina-rai-six-sigma-whitebelt-certificate.jpg"),
  ];

  const dataTitles = [
    "Six Sigma Green Belt",
    "Six Sigma Green Belt Training Certification",
    "HACCP Certificate",
    "HACCP Principles for Meat and Poultry",
    "SQF manufacturing-certificate",
    "Six Sigma Whitebelt Certificate",
  ];

  const openModal = (imageUrl) => {
    setSelectedImageIndex(certificateImages.indexOf(imageUrl));
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const nextImage = () => {
    setSelectedImageIndex(
      (prevIndex) => (prevIndex + 1) % certificateImages.length
    );
  };

  const previousImage = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === 0 ? certificateImages.length - 1 : prevIndex - 1
    );
  };

  document.body.style.overflowY = modalOpen ? "hidden" : "auto";

  return (
    <>
      <div className="certifications__section_wrapper small_text mt-5 pb-3 px-1 w-100 border border-2 border-dark">
        <h2 className="text-center">Certifications</h2>

        <p className="text-center">
          Skilled in environmental regulations, assessment and laboratory
          techniques.
        </p>

        <article className="gallery my-3 mx-auto">
          {certificateImages.map((imageUrl, index) => (
            <img
              className="m-3 neo_brutalism_shadow"
              key={index}
              title={dataTitles[index]}
              src={imageUrl}
              alt={dataTitles[index]}
              onClick={() => openModal(imageUrl)}
            />
          ))}
        </article>

        {modalOpen && (
          <ImageModal
            imageUrl={certificateImages[selectedImageIndex]}
            onClose={closeModal}
            onPrevious={previousImage}
            onNext={nextImage}
          />
        )}

        <div className="gradient__card_wrapper small_text text-light pt-4 px-2">
          <div className="gradient_card neo_brutalism_shadow">
            <div className="dots_container">
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
            <div className="gradient_card_content neo_brutalism_shadow">
              <h4 className="heading pt-2">My publication</h4>
              <Link
                to="https://link.springer.com/article/10.1007/s11356-019-07088-5"
                target="_blank"
                rel="noopener noreferrer"
              >
                Environmentally relevant exposures of male mice to carbendazim
                and thiram cause persistent genotoxicity in male mice{" "}
                <span>Click to read the article...</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
