import React from "react";
import NavLink from "../NavLink/NavLink";

function NavMenu({ setSelectedPlanet }) {
  // switch active planet shown on screen
  const switchPlanet = (planet) => {
    if (planet === "Mercury") {
      setSelectedPlanet("Mercury");
    } else if (planet === "Venus") {
      setSelectedPlanet("Venus");
    } else if (planet === "Earth") {
      setSelectedPlanet("Earth");
    } else if (planet === "Mars") {
      setSelectedPlanet("Mars");
    } else if (planet === "Jupiter") {
      setSelectedPlanet("Jupiter");
    } else if (planet === "Saturn") {
      setSelectedPlanet("Saturn");
    } else if (planet === "Uranus") {
      setSelectedPlanet("Uranus");
    } else if (planet === "Neptune") {
      setSelectedPlanet("Neptune");
    } else {
      console.error("Something wrong wrong");
    }
  };

  return (
    <div className="hidden md:flex flex-row items-center justify-around w-full h-fit lg:gap-6">
      <NavLink
        clickAction={() => {
          switchPlanet("Mercury");
        }}
      >
        Mercury
      </NavLink>
      <NavLink
        clickAction={() => {
          switchPlanet("Venus");
        }}
      >
        Venus
      </NavLink>
      <NavLink
        clickAction={() => {
          switchPlanet("Earth");
        }}
      >
        Earth
      </NavLink>
      <NavLink
        clickAction={() => {
          switchPlanet("Mars");
        }}
      >
        Mars
      </NavLink>
      <NavLink
        clickAction={() => {
          switchPlanet("Jupiter");
        }}
      >
        Jupiter
      </NavLink>
      <NavLink
        clickAction={() => {
          switchPlanet("Saturn");
        }}
      >
        Saturn
      </NavLink>
      <NavLink
        clickAction={() => {
          switchPlanet("Uranus");
        }}
      >
        Uranus
      </NavLink>
      <NavLink
        clickAction={() => {
          switchPlanet("Neptune");
        }}
      >
        Neptune
      </NavLink>
    </div>
  );
}

export default NavMenu;
