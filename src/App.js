import React from "react";
import "./App.css";
import Life from "./images/life.jpg";
import Health from "./images/health.jpg";

function App() {
  window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
  });
  const toggleMenu = () => {
    const menuToggle = document.querySelector(".menuToggle");
    const navigation = document.querySelector(".navigation");
    menuToggle.classList.toggle("active");
    navigation.classList.toggle("active");
  };
  return (
    <body>
      <header>
        <a href="#" className="logo">
          Insurance <span>.</span>
        </a>
        <div className="menuToggle" onClick={toggleMenu}></div>
        <ul className="navigation">
          <li>
            <a href="#banner">Home</a>
          </li>
          
          <li>
            <a href="#life">Life</a>
          </li>
          <li>
            <a href="#health">Health</a>
          </li>
          <li>
            <a href="#vehicle">Vehicle</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact Us</a>
          </li>
        </ul>
      </header>
      <section className="banner" id="banner">
        <div className="content">
          <span>PROTECT YOUR FAMILY WITH RELIABLE INSURANCE</span>
          <p>Quality Loyalty Faith</p>
          <a href="#" className="btn">
            Explore
          </a>
        </div>
      </section>
      <section className="life" id="life">
        <div className="row">
          <div className="col50">
            <h2 className="titleText">
              <span>L</span>ife
            </h2>
            <p>
              wsxecrytvubyhjnqawsedfrgtyhujikolllpmjnhbgvfcdxszaqwxsedr
              <br />
              ftgvbhnjmunybtbvrcvtbyhn
            </p>
          </div>
          <div className="col50">
            <div className="imgBx">
              {" "}
              <img alt="img" src={Life} />
            </div>
          </div>
        </div>
      </section>
      <section className="health" id="health">
        <div className="title">
          <h2 className="titleText">
            <span>H</span>ealth
          </h2>
          <p>
            somthiing
            <br />
            wsxecrytvubyhjnqwsxecdrtfvgyb
            uhnijmko,zxsercdtfvybgunhjmioexscdrtfvbgyunhijmwxsercdtfvbgyunhjimok,
          </p>
        </div>
        <div className="content">
          <div className="box">
            <div className="imgBx">
              <img alt="img" src={Health} />
            </div>
            <div className="text">
              <h3>special health</h3>
            </div>
          </div>
          <div className="box">
            <div className="imgBx">
              <img alt="img" src={Health} />
            </div>
            <div className="text">
              <h3>special health</h3>
            </div>
          </div>
          <div className="box">
            <div className="imgBx">
              <img alt="img" src={Health} />
            </div>
            <div className="text">
              <h3>special health</h3>
            </div>
          </div>
          <div className="box">
            <div className="imgBx">
              <img alt="img" src={Health} />
            </div>
            <div className="text">
              <h3>special health</h3>
            </div>
          </div>
          <div className="box">
            <div className="imgBx">
              <img alt="img" src={Health} />
            </div>
            <div className="text">
              <h3>special health</h3>
            </div>
          </div>
          <div className="box">
            <div className="imgBx">
              <img alt="img" src={Health} />
            </div>
            <div className="text">
              <h3>special health</h3>
            </div>
          </div>
        </div>
        <div className="title">
          <a href="#" className="btn">
            {" "}
            View All{" "}
          </a>
        </div>
      </section>
    </body>
  );
}

export default App;
