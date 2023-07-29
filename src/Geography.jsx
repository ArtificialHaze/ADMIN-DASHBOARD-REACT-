import React from "react";
import { Box } from "@mui/material";
import Header from "./Header";
import GeographyChart from "./GeographyChart";

const Geography = () => {
  return (
    <Box m={"20px"}>
      <Header title={"Geography Chart"} subtitle={"Simple geography chart"} />
      <Box height={"75vh"}>
        <GeographyChart />
      </Box>
    </Box>
  );
};

export default Geography;
