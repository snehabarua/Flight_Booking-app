import React from "react";
import planegrid from "../../assets/plane.png";

export default function Lounge() {
  return (
    <div className="lounge container section">
      <div className="sectionContainer grid">
        <div className="imgDiv" data-aos='fade-left' data-aos-duration='2500'>
          <img src={planegrid} />
        </div>
        <div className="textDiv">
          <h2  data-aos='fade-down' data-aos-duration='2500'>Unaccompanied Minor Lounge</h2>
          <div className="grids grid">
          <div className="singleGrid" data-aos='fade-down' data-aos-duration='2500'>
            <span className="gridTitle">Help through the airport</span>
            <p>
              You can also call airlines from your phone and book a flight
              ticket to one of your favourite destinations.{" "}
            </p>
          </div>
          <div className="singleGrid"  data-aos='fade-down' data-aos-duration='2500'>
            <span className="gridTitle">Priority Boarding</span>
            <p>
              You can also call airlines from your phone and book a flight
              ticket to one of your favourite destinations.{" "}
            </p>
          </div>
          <div className="singleGrid" data-aos='fade-down' data-aos-duration='2500'>
            <span className="gridTitle">Care on the flight</span>
            <p>
              You can also call airlines from your phone and book a flight
              ticket to one of your favourite destinations.{" "}
            </p>
          </div>
          <div className="singleGrid" data-aos='fade-down' data-aos-duration='2500'>
            <span className="gridTitle">Chauffeur drive service</span>
            <p>
              You can also call airlines from your phone and book a flight
              ticket to one of your favourite destinations.{" "}
            </p>
          </div>
        </div>
        </div>

       
      </div>
    </div>
  );
}
