import React from "react";
import { TiSocialFacebook } from "react-icons/ti";
import { FaPinterestP } from "react-icons/fa";
import logo from "../../assets/logo.png";
import { AiFillYoutube, AiOutlineTwitter } from "react-icons/ai";
export default function Footer() {
  return (
    <div className="footer">
      <div className="sectionContainer container grid">
        <div className="gridOne"  data-aos='fade-up' data-aos-duration='2500'>
          <div className="logoDiv">
            <img src={logo} className="logo" alt="logo"/>
          </div>
          <p>Your mind should be stronger than your feelings.FLY!</p>
          <div className="socialIcon flex">
            <TiSocialFacebook className="icon" />
            <AiOutlineTwitter className="icon" />
            <AiFillYoutube className="icon" />
            <FaPinterestP className="icon" />
          </div>
        </div>
        <div className="footerLinks"  data-aos='fade-up' data-aos-duration='2500'>
          <span className="linkTitle">Information</span>
          <li>
           
            <a href="/#" >Home</a>
          </li>
          <li>
           
            <a href="/#">Explore</a>
          </li>
          <li>
            <a href="/#">Flight Status</a>
          </li>
          <li>
            <a href="/#">Travel</a>
          </li>
          <li>
           
            <a href="/#">Check-Ins</a>
          </li>
          <li>
           
            <a href="/#">Manage Your Bookings</a>
          </li>
        </div>
        <div className="footerLinks"  data-aos='fade-up' data-aos-duration='2500'>
          <span className="linkTitle"> Quick Guide</span>
          <li>
            <a href="/#">FAQ</a>
          </li>
          <li>
           
            <a href="/#">How to</a>
          </li>
          <li>
            <a href="/#">Features</a>
          </li>
          <li>
           
            <a href="/#">Baggage</a>
          </li>
          <li>
           
            <a href="/#">Route Map</a>
          </li>
          <li>
           
            <a href="/#">Our communities</a>
          </li>
        </div>
        <div className="footerLinks" data-aos='fade-up' data-aos-duration='2500'>
          <span className="linkTitle"> Quick Guide</span>
          <li>
            <a href="/#">Chauffuer</a>
          </li>
          <li>
           
            <a href="/#">Our partners</a>
          </li>
          <li>
            <a href="/#">Destination</a>
          </li>
          <li>
           
            <a href="/#">Careers</a>
          </li>
          <li>
           
            <a href="/#">Transportation</a>
          </li>
          <li>
           
            <a href="/#">Programme Rules</a>
          </li>
        </div>
      </div>
      
    </div>
  );
}
