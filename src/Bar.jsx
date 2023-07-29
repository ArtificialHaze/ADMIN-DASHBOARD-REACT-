import React from "react";
import { Box } from "@mui/material";
import Header from "./Header";
import BarChart from "./BarChart";

const Bar = () => {
  return (
    <Box m={"20px"}>
      <Header title={"Bar Chart"} subtitle={"Simple bar chart"} />
      <Box height={"75vh"}>
        <BarChart />
      </Box>
    </Box>
  );
};

export default Bar;
