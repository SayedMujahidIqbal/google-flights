import { Box, Typography } from "@mui/material";

const FlightInfo = ({ leg, carriers }) => {
  return (
    <Box>
      <Typography
        variant="subtitle1"
        fontWeight="bold"
        sx={{ fontSize: { xs: "14px", sm: "16px" } }}
      >
        {carriers.marketing[0]?.name} ✈
      </Typography>
      <Typography variant="body1" sx={{ fontSize: { xs: "13px", sm: "15px" } }}>
        {leg.origin.displayCode} → {leg.destination.displayCode}
      </Typography>
      <Typography variant="body2" color="textSecondary">
        {new Date(leg.departure).toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })}{" "}
        -{" "}
        {new Date(leg.arrival).toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })}
      </Typography>
    </Box>
  );
};

export default FlightInfo;
