import React from "react";

// sx prop takes valid tailwind classes as a string

function Box({ sx, children }) {
  return <div className={`flex w-full h-fit ${sx}`}>{children}</div>;
}

export default Box;
