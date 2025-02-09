import { Box, Typography } from "@mui/material";

const PriceInfo = ({ price }) => {
  return (
    <Box textAlign={{ xs: "center", sm: "right" }}>
      <Typography
        variant="h6"
        color="green"
        sx={{ fontSize: { xs: "16px", sm: "20px" } }}
      >
        ${price.amount}
      </Typography>
      <Typography
        variant="body2"
        color="textSecondary"
        sx={{ fontSize: { xs: "12px", sm: "14px" } }}
      >
        {price.currency} Round Trip
      </Typography>
    </Box>
  );
};

export default PriceInfo;
