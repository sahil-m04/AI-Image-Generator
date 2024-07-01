import React from "react";
import LogoJpeg from "../Assets/Logo.jpeg";
import "./About.css";
import "./Navbar.css";
import css from "../Assets/css.svg";
import javascript from "../Assets/javascript.svg";
import openai from "../Assets/openai.svg";
import logo from "../Assets/logo.svg";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src={LogoJpeg} alt="Logo" className="logo-image" />
      </div>
      <h3 className="navbar-heading">
        DEEP VIS <span className="nav-head-span">AI</span>
      </h3>
      <ul className="navbar-links">
        <li>
          <a href="/" className="navbar-link">
            Home
          </a>
        </li>
        <li>
          <a href="/About" className="navbar-link">
            About
          </a>
        </li>
      </ul>
    </nav>
  );
};
const About = () => {
  return (
    <div className="about-us">
      <Navbar />
      <hr />
      <header>
        <h1>About Us</h1>
        <p>
          Discover the Vision Behind DEEP VIS <span>AI</span>
        </p>
      </header>
      <hr />
      <section className="main-content">
        <div className="introduction">
          Welcome to DEEP VIS AI, where innovation meets creativity in the realm
          of image generation! Our AI Image Generator is not just a tool; it's
          an artistic collaborator, a product of cutting-edge technology
          designed to bring your imagination to life. Whether you're an artist
          seeking inspiration, a designer exploring new horizons, or simply
          curious about the possibilities of AI, our generator is here to
          redefine what's possible. Immerse yourself in a world where pixels
          transform into masterpieces, and let DEEP VIS AI be your gateway to a
          realm where artificial intelligence fuels imagination.
        </div>
        <hr />
        <div className="technology-stack">
          <h2>Technology Stack</h2>
          <div className="stack-item">
            <img src={logo} alt="React Logo" />
            <span>React</span>
          </div>
          <div className="stack-item">
            <img src={javascript} alt="JavaScript Logo" />
            <span>JavaScript</span>
          </div>
          <div className="stack-item">
            <img src={css} alt="CSS Logo" />
            <span>CSS</span>
          </div>
          <div className="stack-item">
            <img src={openai} alt="OpenAI Logo" className="openai" />
            <span>OpenAI</span>
          </div>
        </div>{" "}
      </section>
      <hr />
      <section className="visual-elements">
        <div className="contact-information">
          <h2>Contact Information</h2>
          <div className="info-item">
            <span>Email:</span>
            <a href="mailto:sahilmehta2704@gmail.com">
              sahilmehta2704@gmail.com
            </a>
          </div>
          <div className="info-item">
            <span>Phone:</span>
            <span>+91-8218784150</span>
          </div>
          <div className="info-item">
            <span>LinkedIn:</span>
            <a href="https://www.linkedin.com/in/sahil-mehta-1235b0158/">
              sahil-mehta-27apr
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
