import React, { useEffect } from "react";

import plane from "../../assets/takeoff.png";
import Aos from 'aos'
import 'aos/dist/aos.css'
export default function Home() {
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  return (
    <div className="home flex container">
      <div className="mainText">
        <h1 data-aos='fade-up' data-aos-duration='2500' >Create Ever-Lasting Memories With Us</h1>
      </div>
      <div className="homeImages flex"  data-aos='fade-down' data-aos-duration='2500'>
        <div className="videoDiv">
          <video src="sunset.mp4" autoPlay muted loop className="video" ></video>
        </div>
        <img src={plane} className="plane" />
      </div>
    </div>
  );
}
