import React, { useState } from "react";
import ExpandedMenu from "../ExpandedMenu/ExpandedMenu";
import NavMenu from "../NavMenu/NavMenu";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar({ setSelectedPlanet }) {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <nav className="flex flex-row md:flex-col lg:flex-row items-center justify-center md:gap-6 w-full h-fit border-b-[1px] border-lightGray/50 pb-4">
      {/* Mobile UX */}
      <div className="flex flex-row md:flex-col lg:flex-row items-center justify-between w-full h-fit">
        <h2>The Planets</h2>
        <GiHamburgerMenu
          className={`${"md:hidden cursor-pointer w-7 h-7"} ${
            isVisible === false ? "opacity-75 text-red" : "opacity-100"
          }`}
          onClick={() => {
            setIsVisible(!isVisible);
          }}
        />
      </div>
      {/* Enhanced UX */}
      <NavMenu setSelectedPlanet={setSelectedPlanet} />
      <ExpandedMenu
        isToggled={isVisible}
        setSelectedPlanet={setSelectedPlanet}
      />
    </nav>
  );
}

export default Navbar;
