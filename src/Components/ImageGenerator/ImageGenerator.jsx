import React, { useRef, useState } from "react";
import { Link } from 'react-router-dom';
import { FaDownload } from "react-icons/fa";
import "./ImageGenerator.css";
import "./Navbar.css";
import default_image from "../Assets/default_image.svg";
import LogoJpeg from "../Assets/Logo.jpeg";


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src={LogoJpeg} alt="Logo" className="logo-image" />
      </div>
      <h3 className="navbar-heading">DEEP VIS <span className="nav-head-span">AI</span></h3>
      <ul className="navbar-links">
        <li>
          <a href="/" className="navbar-link">
            Home
          </a>
        </li>
        <li>
        <Link to="/About" className="navbar-link">
              About
            </Link>
        </li>
      </ul>
    </nav>
  );
};

const ImageGenerator = () => {
  
  const [image_url, setImage_urls] = useState([]);
  const [numberOfImages, setNumberOfImages] = useState(1);
  let inputRef = useRef(null);
  const [loading, setLoading] = useState(false);

  const imageGenerator = async () => {
    if (inputRef.current.value === "") {
      alert("Please enter a prompt before generating images.");
      return 0;
    }
    setLoading(true);

    try {
      const response = await fetch(
        "https://api.openai.com/v1/images/generations",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer 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",
            "User-Agent": "Chrome",
          },
          body: JSON.stringify({
            prompt: `${inputRef.current.value}`,
            n: parseInt(numberOfImages),
            size: "256x256",
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`Failed to fetch data: ${response.statusText}`);
      }

      let data = await response.json();

      if (Array.isArray(data.data) && data.data.length > 0) {
        setImage_urls(data.data.map((image) => image.url));
      } else {
        throw new Error("Invalid response format");
      }
    } catch (error) {
      console.error("Error fetching data:", error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = async (image_url) => {
    const downloadLink = document.createElement("a");
    downloadLink.href = image_url;
    downloadLink.setAttribute("download", "generated_image.png"); //= "generated_image.png";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <div className="ai-image-generator">
      <Navbar />
      <hr />
      <div className="header">
        AI IMAGE <span>GENERATOR</span>
      </div>
      <div className="img-loading">
        <div className="img-container">
          {image_url.length > 0 ? (
            image_url.map((url, index) => (
              <div key={index} className="image">
                <img src={url} alt={`${index + 1}`} />
                <div
                  className="download-btn"
                  onClick={() => handleDownload(url)}
                >
                  <FaDownload />
                </div>
              </div>
            ))
          ) 
          : (
            <div className="image">
              <img src={default_image} alt="Default" />
            </div>
          )
          }
        </div>

        <div className="loading">
          <div className={loading ? "loading-bar-full" : "loading-bar"}></div>
          <div className={loading ? "loading-text" : "display-none"}>
            Loading....
          </div>
        </div>
      </div>
      <div className="search-box">
        <input
          type="text"
          ref={inputRef}
          className="search-input"
          placeholder="Describe What you Want To See"
        />
      </div>
      <div className="image-number">
        Please Select Number Of Images
        <hr />
        <input
          type="number"
          value={numberOfImages}
          onChange={(e) => setNumberOfImages(e.target.value)}
          min={1}
          max={4}
          className="number-input"
        />
      </div>
      <div
        className="generate-btn"
        onClick={() => {
          imageGenerator();
        }}
      >
        Generate
      </div>
    </div>
  );
};

export default ImageGenerator;
