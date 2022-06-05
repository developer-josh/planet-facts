import React from "react";
import PlanetImage from "../../../shared/components/PlanetImage/PlanetImage";
import PlanetInfo from "../../../shared/components/PlanetInfo/PlanetInfo";
import TableData from "../../../shared/components/TableData/TableData";
import Box from "../../../shared/interface/Box/Box";

function DesktopView({ content }) {
  return (
    <Box sx="flex-col items-center justify-center">
      <Box sx="flex-row items-center justify-center">
        <PlanetImage content={content} />
        <PlanetInfo content={content} />
      </Box>
      <TableData content={content} />
    </Box>
  );
}

export default DesktopView;
