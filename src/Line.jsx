import React from "react";
import { Box } from "@mui/material";
import Header from "./Header";
import LineChart from "./LineChart";

const Line = () => {
  return (
    <Box m={"20px"}>
      <Header title={"Line Chart"} subtitle={"Simple line chart"} />
      <Box height={"75vh"}>
        <LineChart />
      </Box>
    </Box>
  );
};

export default Line;
