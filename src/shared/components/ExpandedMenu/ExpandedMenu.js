import React from "react";
import NavLink from "../NavLink/NavLink";
import Arrow from "../../../assets/icon-chevron.svg";

function ExpandedMenu({ isToggled, setSelectedPlanet }) {
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
    <div
      id="exp-menu"
      className={`${"absolute top-0 left-0 right-0 flex flex-col items-center justify-start bg-primary/80 min-h-[350px] mt-20 p-6 md:hidden gap-3 z-[1000]"} ${
        isToggled === true ? "hidden" : "flex"
      }`}
    >
      {/* Mercury */}
      <div
        className="flex flex-row items-center justify-between w-full h-fit cursor-pointer border-b-[1px] border-lightGray/50 p-4 pb-5"
        onClick={() => {
          switchPlanet("Mercury");
        }}
      >
        <div className="flex flex-row items-center justify-center w-fit h-fit gap-4">
          <span className="bg-white w-2 h-2 p-4 rounded-full" />
          <NavLink>Mercury</NavLink>
        </div>
        <img src={Arrow} alt="arrow" />
      </div>

      {/* Venus */}
      <div
        className="flex flex-row items-center justify-between w-full h-fit cursor-pointer border-b-[1px] border-lightGray/50 p-4 pb-5"
        onClick={() => {
          switchPlanet("Venus");
        }}
      >
        <div className="flex flex-row items-center justify-center w-fit h-fit gap-4">
          <span className="bg-sunYellow w-2 h-2 p-4 rounded-full" />
          <NavLink>Venus</NavLink>
        </div>
        <img src={Arrow} alt="arrow" />
      </div>

      {/* Earth */}
      <div
        className="flex flex-row items-center justify-between w-full h-fit cursor-pointer border-b-[1px] border-lightGray/50 p-4 pb-5"
        onClick={() => {
          switchPlanet("Earth");
        }}
      >
        <div className="flex flex-row items-center justify-center w-fit h-fit gap-4">
          <span className="bg-purple w-2 h-2 p-4 rounded-full" />
          <NavLink>Earth</NavLink>
        </div>
        <img src={Arrow} alt="arrow" />
      </div>

      {/* Mars */}
      <div
        className="flex flex-row items-center justify-between w-full h-fit cursor-pointer border-b-[1px] border-lightGray/50 p-4 pb-5"
        onClick={() => {
          switchPlanet("Mars");
        }}
      >
        <div className="flex flex-row items-center justify-center w-fit h-fit gap-4">
          <span className="bg-darkOrange w-2 h-2 p-4 rounded-full" />
          <NavLink>Mars</NavLink>
        </div>
        <img src={Arrow} alt="arrow" />
      </div>

      {/* Jupiter */}
      <div
        className="flex flex-row items-center justify-between w-full h-fit cursor-pointer border-b-[1px] border-lightGray/50 p-4 pb-5"
        onClick={() => {
          switchPlanet("Jupiter");
        }}
      >
        <div className="flex flex-row items-center justify-center w-fit h-fit gap-4">
          <span className="bg-lightOrange w-2 h-2 p-4 rounded-full" />
          <NavLink>Jupiter</NavLink>
        </div>
        <img src={Arrow} alt="arrow" />
      </div>

      {/* Saturn */}
      <div
        className="flex flex-row items-center justify-between w-full h-fit cursor-pointer border-b-[1px] border-lightGray/50 p-4 pb-5"
        onClick={() => {
          switchPlanet("Saturn");
        }}
      >
        <div className="flex flex-row items-center justify-center w-fit h-fit gap-4">
          <span className="bg-sunYellow w-2 h-2 p-4 rounded-full" />
          <NavLink>Saturn</NavLink>
        </div>
        <img src={Arrow} alt="arrow" />
      </div>

      {/* Uranus */}
      <div
        className="flex flex-row items-center justify-between w-full h-fit cursor-pointer border-b-[1px] border-lightGray/50 p-4 pb-5"
        onClick={() => {
          switchPlanet("Uranus");
        }}
      >
        <div className="flex flex-row items-center justify-center w-fit h-fit gap-4">
          <span className="bg-green w-2 h-2 p-4 rounded-full" />
          <NavLink>Uranus</NavLink>
        </div>
        <img src={Arrow} alt="arrow" />
      </div>

      {/* Neptune */}
      <div
        className="flex flex-row items-center justify-between w-full h-fit cursor-pointer border-b-[1px] border-lightGray/50 p-4 pb-5"
        onClick={() => {
          switchPlanet("Neptune");
        }}
      >
        <div className="flex flex-row items-center justify-center w-fit h-fit gap-4">
          <span className="bg-darkBlue w-2 h-2 p-4 rounded-full" />
          <NavLink>Neptune</NavLink>
        </div>
        <img src={Arrow} alt="arrow" />
      </div>
    </div>
  );
}

export default ExpandedMenu;
