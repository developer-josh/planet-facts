import React from "react";

function PlanetImage({ content }) {
  return (
    <div className="flex flex-col items-center justify-center w-full h-fit my-10 lg:my-12 p-6">
      <img
        src={content.images.planet}
        alt=""
        className="w-64 h-64 md:w-80 md:h-80 animate-spin-slow"
      />
    </div>
  );
}

export default PlanetImage;
