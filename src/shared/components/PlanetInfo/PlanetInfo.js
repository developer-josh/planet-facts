import React from "react";
import Box from "../../interface/Box/Box";

function PlanetInfo({ content }) {
  return (
    <Box sx="flex-col justify-center items-center gap-6 p-4 lg:my-10 text-center">
      <h2>{content.name}</h2>
      {/* Overview */}
      <Box sx="flex-col items-center justify-center">
        <p className="underline font-bold">Overview</p>
        <p className="lg:text-base">{content.overview.content}</p>
      </Box>
      {/* Structure */}
      <Box sx="flex-col justify-center items-center">
        <p className="underline font-bold">Structure</p>
        <p className="lg:text-base">{content.structure.content}</p>
      </Box>
      {/* Geology */}
      <Box sx="flex-col items-center justify-center">
        <p className="underline font-bold">Geology</p>
        <p className="lg:text-base">{content.geology.content}</p>
      </Box>

      {/* Wikipedia Reference */}
      <Box sx="flex-row items-center justify-center gap-2">
        <p className="text-lightGray">Source:</p>
        <a
          href={content.overview.source}
          rel="noreferrer"
          target="_blank"
          className="font-bold underline text-lightGray"
        >
          Wikipedia
        </a>
      </Box>
    </Box>
  );
}

export default PlanetInfo;
