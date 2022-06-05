import React, { useState, useEffect } from "react";
import Navbar from "../../shared/components/Navbar/Navbar";
import Page from "../../shared/interface/Page/Page";
import MobileView from "../../home/components/MobileView/MobileView";
import TabletView from "../../home/components/TabletView/TabletView";
import DesktopView from "../../home/components/DesktopView/DesktopView";
import data from "../../data.json";

function Home() {
  // represents TRUE / FALSE if browser width matches breakpoints
  const [isDesktop, setDesktop] = useState(window.innerWidth > 1024);
  const [isTablet, setTablet] = useState(
    window.innerWidth > 768 && window.innerWidth < 1024
  );
  const [isMobile, setMobile] = useState(
    window.innerWidth > 0 && window.innerWidth < 768
  );
  // displays currently selected planet information
  const [activePlanet, setActivePlanet] = useState(data[0]);
  // responds to NavLink events to change active planet
  const [selectedPlanet, setSelectedPlanet] = useState(null);

  // update react state to represent current breakpoints
  const updateMedia = () => {
    setDesktop(window.innerWidth > 1024);
    setTablet(window.innerWidth > 768 && window.innerWidth < 1024);
    setMobile(window.innerWidth > 0 && window.innerWidth < 768);
  };

  // on page render, render Page elements based on browser width
  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  }, []);

  // when selected planet changes, update page content
  useEffect(() => {
    if (selectedPlanet === "Mercury") {
      setActivePlanet(planetData.mercury);
    } else if (selectedPlanet === "Venus") {
      setActivePlanet(planetData.venus);
    } else if (selectedPlanet === "Earth") {
      setActivePlanet(planetData.earth);
    } else if (selectedPlanet === "Mars") {
      setActivePlanet(planetData.mars);
    } else if (selectedPlanet === "Jupiter") {
      setActivePlanet(planetData.jupiter);
    } else if (selectedPlanet === "Saturn") {
      setActivePlanet(planetData.saturn);
    } else if (selectedPlanet === "Uranus") {
      setActivePlanet(planetData.uranus);
    } else if (selectedPlanet === "Neptune") {
      setActivePlanet(planetData.neptune);
    }
  }, [selectedPlanet]);

  // map each planet in json data to objects
  const planetData = {
    mercury: data[0],
    venus: data[1],
    earth: data[2],
    mars: data[3],
    jupiter: data[4],
    saturn: data[5],
    uranus: data[6],
    neptune: data[7],
  };

  // render complete page to document
  return (
    <Page>
      <Navbar setSelectedPlanet={setSelectedPlanet} />

      {/* Conditional rendering based on screen width */}
      {isDesktop && <DesktopView content={activePlanet} />}
      {isTablet && <TabletView content={activePlanet} />}
      {isMobile && <MobileView content={activePlanet} />}
    </Page>
  );
}

export default Home;
