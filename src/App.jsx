import React, { useEffect, useRef } from "react";

import MinimalLogo from "./poly rockwall logo.svg"

import "./styles.css"
import "./landing.css"

export default () => {

  
  useEffect(() => {
    let logo = document.querySelector("#navigation-rockwall-logo");
    let startTime = Date.now();

    renderNavigation();


    function renderNavigation() {
      const waveResolution = 75;
      const waveAmplitude = 3;
      const runtime = (Date.now() - startTime)/waveResolution;

      const logoRect = logo.getBoundingClientRect();
      const logoMiddle = (logoRect.right + logoRect.left) / 2;
      const logoSize = logoRect.right - logoRect.left;

      const leftLogoPoint  =  Math.sin((Math.PI * (runtime + logoRect.left) * 2) / waveResolution) * waveAmplitude;
      const rightLogoPoint =  Math.sin((Math.PI * (runtime + logoRect.right) * 2) / waveResolution) * waveAmplitude - leftLogoPoint;
      //const centerLogoPoint = Math.sin((Math.PI * (runtime + logoMiddle) * 2) / waveResolution) * waveAmplitude;
      const centerLogoPoint = (leftLogoPoint + rightLogoPoint) / 2;
      logo.style.transform = `translateY(${leftLogoPoint}px) rotate(${Math.asin(rightLogoPoint/logoSize)}rad)`;


      requestAnimationFrame(renderNavigation);
    }
  })


  return <>
    <header>
      <nav>
        <div class="contents bar">
          <a href="#" class="logo" id="navigation-rockwall-logo">
            <img src={MinimalLogo}/>
            <div class="text">
              <h1>ROCKWALL</h1>
              <p>The New Horizon</p>
            </div>
          </a>

          <div class="others">
            <a href="#" class="link">City Services</a>
            <a href="#" class="link">City Admin</a>
            <a href="#" class="link">City Departments</a>
            <a href="#" class="link">Events</a>
            <a href="#" class="link">Meetings</a>
            <a href="#" class="link">More</a>
          </div>
        </div>
        
      </nav>
    </header>
    <h1>Welcome to React Vite Micro App!</h1>
    <p>Hard to get more minimal than this React app.</p>
  </>
}
