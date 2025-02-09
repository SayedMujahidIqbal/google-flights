import { Card, CardContent, Grid } from "@mui/material";
import FlightInfo from "./FlightInfo";
import StopsInfo from "./StopsInfo";
import PriceInfo from "./PriceInfo";

const FlightCard = ({ flights }) => {
  console.log(flights);
  const itinerary = flights.itineraries.map((itinerary) => itinerary);
  const leg = itinerary.legs.map();

  console.log(itinerary, leg);

  return (
    <Card
      sx={{
        mb: 2,
        p: 2,
        borderRadius: 3,
        boxShadow: 3,
        width: "100%",
        maxWidth: 800,
        mx: "auto",
      }}
    >
      <CardContent>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} sm={4}>
            <FlightInfo leg={leg} carriers={leg.carriers} />
          </Grid>
          <Grid item xs={12} sm={4} textAlign="center">
            <StopsInfo leg={leg} />
          </Grid>
          <Grid item xs={12} sm={4} textAlign={{ xs: "center", sm: "right" }}>
            <PriceInfo price={flights.price} />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default FlightCard;
