import React from "react";
import "./Main.css";

import { PlayCircleIcon } from "@heroicons/react/24/solid";

import Card from "../Card/Card";

const Main = () => {
  return (
    <>
      <div className="margins">
        <div className="flex-elements">
          <div className="btn-text-container">
            <div className="text-container">
              <h1>In a world of technology, we bring the human touch.</h1>
              <h2>
                Discover solutions for all your design & programming needs. For
                yourself and your business.
              </h2>
            </div>
            <div className="button-container">
              <a className="button-solid" href="/about">
                Find out More
              </a>
              <div className="button-video">
                <PlayCircleIcon className="video-icon" />
                <a
                  href="https://www.linkedin.com/feed/update/urn:li:activity:7047998007425835008/"
                  className="text-xl"
                >
                  Load video
                </a>
              </div>
            </div>
          </div>
          <div className="card-container">
            <Card />
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
