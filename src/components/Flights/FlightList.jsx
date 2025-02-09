import { Box, Typography } from "@mui/material";
import FlightCard from "./FlightCard";

const FlightList = ({ flights }) => {
  console.log(flights);
  return (
    <Box sx={{ width: "100%", p: 2 }}>
      <Typography variant="h6" sx={{ mb: 2, textAlign: "center" }}>
        Top Departing Flights
      </Typography>
      <FlightCard />
    </Box>
  );
};

export default FlightList;
