import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { SiConsul } from "react-icons/si";
import { BsPhoneVibrate } from "react-icons/bs";
import { AiOutlineGlobal } from "react-icons/ai";
import { CgMenuGridO } from "react-icons/cg";
export default function Navbar() {
  //removing navbar in small width screens
  const [active, setActive] = useState("NavBarMenu");
  const showNavbar = () => {
    setActive("NavBarMenu showNavbar");
  };
  const removeNavbar = () => {
    setActive("NavBarMenu");
  };
  //add bg color to second navbar
  const [noBg, addBg] = useState("navbarTwo");
  const addBgColor = () => {
    if (window.scrollY >=10) {
      addBg("navbarTwo navbar_with_Bg");

    }else{
      addBg('navbarTwo')
    }
  };
  window.addEventListener('scroll', addBgColor)

  return (
    <div className="navbar flex">
      <div className="navbarOne flex">
        <div>
          <SiConsul className="icon" />
        </div>
        <div className="none flex">
          <li className="flex">
            <BsPhoneVibrate /> Support
          </li>
          <li className="flex">
            <AiOutlineGlobal /> Languages
          </li>
        </div>

        <div className="atb flex">
          <span>Sign In</span>
          <span>Sign Out</span>
        </div>
      </div>
      <div className={noBg}>
        <div className="logoDiv">
          <img src={logo} className="Logo" alt="logo" />
        </div>
        <div className={active} >
          <ul className="menu">
            <li onClick={removeNavbar} className="listItem">Home</li>
            <li onClick={removeNavbar} className="listItem">About</li>
            <li onClick={removeNavbar} className="listItem">Offers</li>
            <li onClick={removeNavbar} className="listItem">Seats</li>
            <li onClick={removeNavbar} className="listItem">Destinations</li>
          </ul>
          <button className="btn flex btnOne">Contact</button>
        </div>
        <button className="btn flex btnTwo">Contact</button>
        <div className="toggleIcon" onClick={showNavbar}>
          <CgMenuGridO className="icon" />
        </div>
      </div>
    </div>
  );
}
