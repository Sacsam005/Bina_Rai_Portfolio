import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap-trial/all";
import createCustomAnimation from "../gsapFunction";
import ImageModal from "../Modal/Modal";
import Experience from "../Experience/Experience";
import "./Main.css";

export default function Main() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const certificationsRef = useRef(null);
  const cardsRef = useRef(null);

  const images = [
    require("../../img/Six Sigma Green Belt - Bina Rai.jpg"),
    require("../../img/bina-rai-six-sigma-greenbelt-certificate.jpg"),
    require("../../img/HACCP Principles for Meat and Poultry.jpg"),
    require("../../img/bina-rai-haccp-certificate.jpg"),
    require("../../img/bina-rai-sqf-manufacturing-certificate.jpg"),
    require("../../img/bina-rai-six-sigma-whitebelt-certificate.jpg"),
  ];

  const openModal = (imageUrl) => {
    setSelectedImageIndex(images.indexOf(imageUrl));
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const nextImage = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const previousImage = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const cards = cardsRef.current.querySelectorAll(".row .card");
    const certificates =
      certificationsRef.current.querySelectorAll(".gallery img");

    createCustomAnimation(cards, "y", "10px", 0, "power1.inOut");
    createCustomAnimation(certificates, "scale", 0.8, 1, "bounce.out");
  }, []);

  return (
    <>
      <div
        className="about__section_wrapper small_text default_padding_top"
        id="about"
      >
        <div className="card_section" ref={cardsRef}>
          <h2 className="text-center font-monospace fw-bold heading">
            About Me
          </h2>
          <p className="text-center p-2">
            Accomplished and energetic Quality Assurance team Leader with a
            solid history of achievement in Food Safety and Quality Assurance.
            Areas of expertise include creating training tool, developing new
            processes and procedures and coordinating with operations teams.{" "}
          </p>

          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <img
                  src={require("../../img/what-bina-can-likes.JPG")}
                  alt="What Bina Rai likes"
                  width="100%"
                />
                <div className="card-body text-center">
                  <h3
                    className="card-title font-monospace fw-bold heading"
                    style={{ fontSize: "1.5rem" }}
                  >
                    What I like
                  </h3>
                  <ul className="mb-0 px-0">
                    <li>Food & Travel</li>
                    <li>Bible & History</li>
                    <li>Camping w/husband</li>
                    <li>Cooking & Watching Netflix</li>
                  </ul>
                  <i className="far fa-heart" style={{ color: "#6e40ff" }}></i>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card">
                <img
                  src={require("../../img/what-bina-rai-is.JPG")}
                  alt="What Bina Rai does"
                  width="100%"
                />
                <div className="card-body text-center">
                  <h3
                    className="card-title font-monospace fw-bold heading"
                    style={{ fontSize: "1.5rem" }}
                  >
                    Who I am
                  </h3>
                  <ul className="mb-0 px-0">
                    <li>Food Safety Regulatory Program Manager @STF</li>
                    <li>EX Regulatory Program Supervisor @HyLife</li>
                    <li>Major: Environmental Science</li>
                    <li>Masters | Minnesota State University</li>
                  </ul>
                  👩🏻‍💻
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card">
                <img
                  src={require("../../img/what-bina-can-do.JPG")}
                  alt="What Bina Rai can do"
                  width="100%"
                />
                <div className="card-body text-center">
                  <h3
                    className="card-title font-monospace fw-bold heading"
                    style={{ fontSize: "1.5rem" }}
                  >
                    What I can do
                  </h3>
                  <ul className="mb-0 px-0">
                    <li>Lead Improvement Team</li>
                    <li>Work as HACCP Coordinator</li>
                    <li>Manage Food Safety System</li>
                    <li>Review Trends</li>
                  </ul>
                  <i
                    className="fab fa-servicestack"
                    style={{ color: "#6e40ff" }}
                  ></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="certifications__section_wrapper small_text default_padding_top pb-3"
        ref={certificationsRef}
      >
        <h2 className="text-center font-monospace fw-bold heading">
          Certifications
        </h2>
        <p className="text-center">
          Skilled in environmental regulations, assessment and laboratory
          techniques.
        </p>

        <article className="gallery my-3 mx-auto">
          {images.map((imageUrl, index) => (
            <img
              className="m-3"
              key={index}
              src={imageUrl}
              alt={`Certification ${index}`}
              onClick={() => openModal(imageUrl)}
            />
          ))}
        </article>

        {modalOpen && (
          <ImageModal
            imageUrl={images[selectedImageIndex]}
            onClose={closeModal}
            onPrevious={previousImage}
            onNext={nextImage}
          />
        )}

        <div className="gradient__card_wrapper small_text text-light pt-4">
          <div className="gradient_card">
            <div className="dots_container">
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
            <div className="gradient_card_content">
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
