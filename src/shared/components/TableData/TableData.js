import React from "react";
import Box from "../../interface/Box/Box";

function TableData({ content }) {
  return (
    <Box sx="flex-col lg:flex-row items-center justify-center p-6 gap-4">
      {/* Rotation */}
      <Box sx="flex-row md:flex-col items-center justify-between border-[1px] border-lightGray/50 p-4">
        <p className="uppercase text-lightGray font-bold">Rotation Time</p>
        <p className="uppercase text-xl font-bold">{content.rotation}</p>
      </Box>
      {/* Revolution */}
      <Box sx="flex-row md:flex-col items-center justify-between border-[1px] border-lightGray/50 p-4">
        <p className="uppercase text-lightGray font-bold">Revolution Time</p>
        <p className="uppercase text-xl font-bold">{content.revolution}</p>
      </Box>
      {/* Radius */}
      <Box sx="flex-row md:flex-col items-center justify-between border-[1px] border-lightGray/50 p-4">
        <p className="uppercase text-lightGray font-bold">Radius</p>
        <p className="uppercase text-xl font-bold">{content.radius}</p>
      </Box>
      {/* Average Temperature */}
      <Box sx="flex-row md:flex-col items-center justify-between border-[1px] border-lightGray/50 p-4">
        <p className="uppercase text-lightGray font-bold">Average Temp.</p>
        <p className="uppercase text-xl font-bold">{content.temperature}</p>
      </Box>
    </Box>
  );
}

export default TableData;
