import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

const PersonSelect = () => {
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [infantsOnSeat, setInfantsOnSeat] = useState(0);
  const [infantsOnLap, setInfantsOnLap] = useState(0);

  const handleIncrement = (type) => {
    if (type === "adult") setAdults(adults + 1);
    else if (type === "children") setChildren(children + 1);
    else if (type === "infantsOnSeat") setInfantsOnSeat(infantsOnSeat + 1);
    else if (type === "infantsOnLap") setInfantsOnLap(infantsOnLap + 1);
  };

  const handleDecrement = (type) => {
    if (type === "adult" && adults > 1) setAdults(adults - 1);
    else if (type === "children" && children > 0) setChildren(children - 1);
    else if (type === "infantsOnSeat" && infantsOnSeat > 0)
      setInfantsOnSeat(infantsOnSeat - 1);
    else if (type === "infantsOnLap" && infantsOnLap > 0)
      setInfantsOnLap(infantsOnLap - 1);
  };

  return (
    <Box className="person-select">
      <Box sx={{ display: "flex", alignItems: "center", marginBottom: 2 }}>
        <Button onClick={() => handleDecrement("adult")} variant="outlined">
          -
        </Button>
        <Typography sx={{ margin: "0 10px" }}>Adults: {adults}</Typography>
        <Button onClick={() => handleIncrement("adult")} variant="outlined">
          +
        </Button>
      </Box>

      <Box sx={{ display: "flex", alignItems: "center", marginBottom: 2 }}>
        <Button onClick={() => handleDecrement("children")} variant="outlined">
          -
        </Button>
        <Typography sx={{ margin: "0 10px" }}>Children: {children}</Typography>
        <Button onClick={() => handleIncrement("children")} variant="outlined">
          +
        </Button>
      </Box>

      <Box sx={{ display: "flex", alignItems: "center", marginBottom: 2 }}>
        <Button
          onClick={() => handleDecrement("infantsOnSeat")}
          variant="outlined"
        >
          -
        </Button>
        <Typography sx={{ margin: "0 10px" }}>
          Infants on seat: {infantsOnSeat}
        </Typography>
        <Button
          onClick={() => handleIncrement("infantsOnSeat")}
          variant="outlined"
        >
          +
        </Button>
      </Box>

      <Box sx={{ display: "flex", alignItems: "center", marginBottom: 2 }}>
        <Button
          onClick={() => handleDecrement("infantsOnLap")}
          variant="outlined"
        >
          -
        </Button>
        <Typography sx={{ margin: "0 10px" }}>
          Infants on lap: {infantsOnLap}
        </Typography>
        <Button
          onClick={() => handleIncrement("infantsOnLap")}
          variant="outlined"
        >
          +
        </Button>
      </Box>
    </Box>
  );
};

export default PersonSelect;
