import React, { useEffect, useRef } from "react";

import MinimalLogo from "./poly rockwall logo.svg"

import applyWaveEffect from "./wave";

import "./styles.css"
import "./landing.css"

export default () => {

  
  useEffect(() => {
    let logo = document.querySelector("#navigation-rockwall-logo");
    let links = document.querySelectorAll("nav .link");
    let startTime = Date.now();

    links.forEach((element) => {
      applyWaveEffect(startTime, element);
    });

    applyWaveEffect(startTime, logo);
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
