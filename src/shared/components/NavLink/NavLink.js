import React from "react";

function NavLink({ clickAction, children }) {
  return (
    <span
      onClick={clickAction}
      className="font-semibold uppercase text-lg md:text-base opacity-90 hover:text-lightBlue cursor-pointer"
    >
      {children}
    </span>
  );
}

export default NavLink;
