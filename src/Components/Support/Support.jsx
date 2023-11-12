import React from "react";
import griditems from "../../assets/grid-items.png";

export default function Support() {
  return (
    <div className="support container section">
      <div className="sectionContainer">
        <div className="titlesDiv">
          <small>travel support</small>
          <h2>Plan your travel with confidence</h2>
          <p>
            Find help with booking and travel plans, see what to expect along
            the journey!
          </p>
        </div>
        <div className="infoDiv grid">
          <div className="textDiv grid">
            <div className="singleInfo" data-aos='fade-down' data-aos-duration='2500'>
              <span className="number">01</span>
              <h4>Travel requirements for Dubai</h4>
              <p>
                Find help with booking and travel plans, see what to expect
                along the journey to your favourite destinations!
              </p>
            </div>

            <div className="singleInfo" data-aos='fade-down' data-aos-duration='2500'>
              <span className="number colorOne" >02</span>
              <h4>Chauffeur services at your arrival</h4>
              <p>
                Find help with booking and travel plans, see what to expect
                along the journey to your favourite destinations!
              </p>
            </div>

            <div className="singleInfo" data-aos='fade-down' data-aos-duration='2500'>
              <span className="number colorTwo">03</span>
              <h4>Multi-risk travel insurance</h4>
              <p>
                Find help with booking and travel plans, see what to expect
                along the journey to your favourite destinations!
              </p>
            </div>
          </div>

          <div className="imgDiv" data-aos='fade-left' data-aos-duration='2500'>
            <img src={griditems} />
          </div>
        </div>
      </div>
    </div>
  );
}
