import React from "react";
import portrait from "../../assets/portrait.jpg";
import portrait3 from "../../assets/portrait3.jpg";
import portrait4 from "../../assets/portrait4.jpg";
import portrait2 from "../../assets/potrait2.avif";
import paris from "../../assets/paris.jpg";
import dubai from "../../assets/dubai.jpg";
import london from "../../assets/london.jpg";
import nyc from "../../assets/nyc.avif";

export default function Travelers() {
  const travelers = [
    {
      id: 1,
      destinationImage: paris,
      travelerimg: portrait,
      travelerName: "NomadicSoul",
      socialLink: "@NomadicSoul",
    },
    {
      id: 2,
      destinationImage: nyc,
      travelerimg: portrait2,
      travelerName: "Norma Holmes",
      socialLink: "@NormaHolmes",
    },
    {
      id: 3,
      destinationImage: dubai,
      travelerimg: portrait3,
      travelerName: "Cristine Lindsey",
      socialLink: "@CristineL",
    },
    {
      id: 4,
      destinationImage: london,
      travelerimg: portrait4,
      travelerName: "Nicole Web",
      socialLink: "@Nicole",
    },
  ];
  return (
    <div className="traveler container section">
      <div className="sectionContainer" >
        <h2 data-aos='fade-down' data-aos-duration='2500'>Top Travelers of this month!</h2>
        <div className="travelersContainer grid">
          {travelers.map(
            ({
              id,
              destinationImage,
              travelerName,
              socialLink,
              travelerimg,
            }) => {
              return (
                //  {/* single passeneger card */}
                <div data-aos='fade-up' data-aos-duration='2500' key={id} className="singleTraveler">
                  <img src={destinationImage} className="destinationImage" alt="destination" />
                  <div className="travelerDetails">
                    <div className="travelerPicture">
                      <img src={travelerimg} className="travelerimg"  alt="travelers"/>
                    </div>
                    <div className="travelerName">
                      <span>{travelerName}</span>
                      <p className="socialLink"> {socialLink}</p>
                    </div>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
}
