import React, { useState, useRef } from "react";
import ImageModal from "../Modal/Modal";
import Experience from "../Experience/Experience";
import "./Main.css";

export default function Main() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const cardsRef = useRef(null);

  const certificateImages = [
    require("../../img/Six Sigma Green Belt - Bina Rai.jpg"),
    require("../../img/bina-rai-six-sigma-greenbelt-certificate.jpg"),
    require("../../img/HACCP Principles for Meat and Poultry.jpg"),
    require("../../img/bina-rai-haccp-certificate.jpg"),
    require("../../img/bina-rai-sqf-manufacturing-certificate.jpg"),
    require("../../img/bina-rai-six-sigma-whitebelt-certificate.jpg"),
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

  return (
    <>
      <hr />
      <div className="about__section_wrapper small_text" id="about">
        <div className="card_section">
          <h2 className="text-center font-monospace fw-bold heading">
            About Me
          </h2>
          <p className="text-center p-2">
            Accomplished and energetic Quality Assurance team Leader with a
            solid history of achievement in Food Safety and Quality Assurance.
            Areas of expertise include creating training tool, developing new
            processes and procedures and coordinating with operations teams.{" "}
          </p>

          <div className="cards_container" ref={cardsRef}>
            <div className="card">
              <img
                src={require("../../img/what-bina-can-likes.JPG")}
                alt="What Bina Rai likes"
                width="100%"
              />
              <h3 className="card_title text-center my-2 font-monospace fw-bold heading">
                What I like
              </h3>
              <div className="card_list">
                <div className="card_list_items">Food & Travel 🤘</div>
                <div className="card_list_items">Camping w/husband 🤘</div>
                <div className="card_list_items">
                  Spend too much time inside ✌️
                </div>
                <div className="card_list_items">
                  Cooking & Watching Netflix 👊
                </div>
              </div>
            </div>

            <div className="card">
              <img
                src={require("../../img/what-bina-rai-is.JPG")}
                alt="What Bina Rai does"
                width="100%"
              />
              <h3 className="card_title text-center my-2 font-monospace fw-bold heading">
                What I am
              </h3>
              <div className="card_list">
                <div className="card_list_items">
                  Food Safety Regulatory Program Manager @STF 💼
                </div>
                <div className="card_list_items">
                  EX Regulatory Program Supervisor @HyLife 🎆
                </div>
                <div className="card_list_items">
                  Major: Environmental Science 📚
                </div>
                <div className="card_list_items">
                  Masters | Minnesota State University 👩‍🎓
                </div>
              </div>
            </div>

            <div className="card">
              <img
                src={require("../../img/what-bina-can-do.JPG")}
                alt="What Bina Rai can do"
                width="100%"
              />
              <h3 className="card_title text-center my-2 font-monospace fw-bold heading">
                What I can do
              </h3>
              <div className="card_list">
                <div className="card_list_items">Lead Improvement Team 👩‍💼 </div>
                <div className="card_list_items">
                  Work as HACCP Coordinator 🤘
                </div>
                <div className="card_list_items">Manage Food Safety System</div>
                <div className="card_list_items">Review Trends</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="certifications__section_wrapper small_text pb-3 mt-5 w-100">
        <h2 className="text-center font-monospace fw-bold heading">
          Certifications
        </h2>
        <p className="text-center">
          Skilled in environmental regulations, assessment and laboratory
          techniques.
        </p>

        <article className="gallery my-3 mx-auto">
          {certificateImages.map((imageUrl, index) => (
            <img
              className="m-3 neo_brutalism_shadow"
              key={index}
              src={imageUrl}
              alt={`Certification ${index}`}
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

        <div className="gradient__card_wrapper small_text text-light pt-4">
          <div className="gradient_card neo_brutalism_shadow">
            <div className="dots_container">
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
            <div className="gradient_card_content neo_brutalism_shadow">
              <h4 className="heading pt-2">My publication</h4>
              <a
                href="https://link.springer.com/article/10.1007/s11356-019-07088-5"
                target="_blank"
                rel="noopener noreferrer"
              >
                Environmentally relevant exposures of male mice to carbendazim
                and thiram cause persistent genotoxicity in male mice{" "}
                <span>Click to read the article...</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <Experience />
    </>
  );
}
