import { Box, Typography } from "@mui/material";

const StopsInfo = ({ leg }) => {
  return (
    <Box textAlign="center">
      <Typography
        variant="subtitle2"
        sx={{ fontSize: { xs: "12px", sm: "14px" } }}
      >
        {leg.stopCount} Stop(s)
      </Typography>
      <Typography
        variant="body2"
        color="textSecondary"
        sx={{ fontSize: { xs: "12px", sm: "14px" } }}
      >
        {Math.floor(leg.durationInMinutes / 60)}h {leg.durationInMinutes % 60}m
      </Typography>
    </Box>
  );
};

export default StopsInfo;
