import React from "react";
import Box from "../../../shared/interface/Box/Box";
import PlanetImage from "../../../shared/components/PlanetImage/PlanetImage";
import PlanetInfo from "../../../shared/components/PlanetInfo/PlanetInfo";
import TableData from "../../../shared/components/TableData/TableData";

function MobileView({ content }) {
  return (
    <Box sx="flex-col items-center justify-center">
      <PlanetImage content={content} />

      <PlanetInfo content={content} />

      <TableData content={content} />
    </Box>
  );
}

export default MobileView;
