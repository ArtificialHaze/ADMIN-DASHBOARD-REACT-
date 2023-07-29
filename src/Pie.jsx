import { Box } from "@mui/material";
import React from "react";
import PieChart from "./PieChart";
import Header from "./Header";

const Pie = () => {
  return (
    <Box m={"20px"}>
      <Header title={"Pie Chart"} subtitle={"Simple pie chart"} />
      <Box height={"75vh"}>
        <PieChart />
      </Box>
    </Box>
  );
};

export default Pie;
