import React from "react";
import "./Card.css";

import {
  ArrowUpRightIcon,
  ClipboardDocumentCheckIcon,
  ClipboardDocumentIcon,
  ArrowTopRightOnSquareIcon,
} from "@heroicons/react/24/solid";

import cardElements from "../../assets/cardElements.json";

const Card = () => {
  return (
    <>
      <div className="">
        <div className="card">
          <div className="account-details">
            <h3>Account Details</h3>
            <ArrowUpRightIcon className="icons-small" />
          </div>

          <div className="contact-section-container">
            <div className="contat-section">
              <img src="../../logo2D.png" alt="logo 2D" className="logo2D" />
              <div className="contact-section-text">
                <h3>You can contact us:</h3>
                <p className="gray-400">plansio.central@gmail.com</p>
              </div>
            </div>
            <ArrowTopRightOnSquareIcon className="icons-small" />
          </div>

          <div className="projects-client-section">
            <div className="clients-text-container">
              <div>
                <h3>SUCCESSFUL CLIENTS:</h3>
                <p>13</p>
              </div>
              <ClipboardDocumentIcon className="icons-big" />
            </div>
            <div className="projects-text-container">
              <div>
                <h3>PROJECTS DONE:</h3>
                <p>43</p>
              </div>
              <ClipboardDocumentCheckIcon className="icons-big" />
            </div>
          </div>

          <div>
            <h3>Product that we serve:</h3>
            <div className="products-serve-flex">
              <p>Web Development</p>
              <p>Web Design</p>
              <p>Marketing</p>
            </div>
          </div>
        </div>

        <div>
          {cardElements.map((element) => (
            <div className="card-elements-container" key={element.id}>
              <div className="card-elements">
                <img src={element.image} alt="logo" />
                <div className="cards">
                  <h3>{element.title}</h3>
                  <p className="gray-400">{element.description}</p>
                </div>
              </div>
              <div className="card-links">
                <h3>Link:</h3>
                <a href={element.link} className="gray-400">
                  Click me
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Card;
