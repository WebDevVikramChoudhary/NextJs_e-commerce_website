import React from "react";
import {
  AiFillLinkedin,
  AiFillInstagram,
  AiOutlineTwitter,
  AiFillGithub
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer-container">
      <p>2022 Namkeen Kings All rights reserverd</p>
      <p className="icons">
        <AiFillLinkedin
          className="cursor-pointer"
          onClick={() => {
            window.open("https://www.linkedin.com/in/thevikramchoudhary/");
          }}
        />
        <AiFillInstagram
          className="cursor-pointer"
          onClick={() => {
            window.open("https://www.instagram.com/ninja_webtech/");
          }}
        />
        <AiOutlineTwitter
          className="cursor-pointer"
          onClick={() => {
            window.open("https://www.twitter.com/ninja_webtech/");
          }}
        />
        <AiFillGithub
          className="cursor-pointer"
          onClick={() => {
            window.open("https://github.com/WebDevVikramChoudhary");
          }}
        />
      </p>
    </div>
  );
};

export default Footer;
