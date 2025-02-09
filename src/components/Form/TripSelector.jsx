import {
  MenuItem,
  TextField,
  Box,
  ListItemIcon,
  Typography,
} from "@mui/material";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import FlightLandIcon from "@mui/icons-material/FlightLand";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import { useEffect } from "react";

const TripSelector = ({ tripType, setTripType, flights, setFlights }) => {
  useEffect(() => {
    if (!Array.isArray(flights) || flights.length === 0) {
      setFlights([{ from: "", to: "", departure: "" }]); // Ensure flights is always an array
    }
  }, [tripType, setFlights]);

  const handleTripChange = (event) => {
    const selectedTrip = event.target.value;
    setTripType(selectedTrip);

    if (selectedTrip === "One way") {
      setFlights([{ from: "", to: "", departure: "" }]);
    } else if (selectedTrip === "Round trip") {
      setFlights([{ from: "", to: "", departure: "", return: "" }]);
    } else if (selectedTrip === "Multi-city") {
      setFlights([{ from: "", to: "", departure: "" }]);
    }
  };

  return (
    <Box sx={{ width: "100%", maxWidth: "10rem", minWidth: "8rem" }}>
      <TextField
        select
        fullWidth
        variant="filled"
        value={tripType}
        onChange={handleTripChange}
        SelectProps={{
          displayEmpty: true,
          renderValue: (selected) => (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              {selected === "Round trip" && (
                <>
                  <CompareArrowsIcon
                    sx={{ color: "blue", marginRight: "8px" }}
                  />
                  <Typography>Round Trip</Typography>
                </>
              )}
              {selected === "One way" && (
                <>
                  <FlightTakeoffIcon
                    sx={{ color: "blue", marginRight: "8px" }}
                  />
                  <Typography>One Way</Typography>
                </>
              )}
              {selected === "Multi-city" && (
                <>
                  <FlightLandIcon sx={{ color: "blue", marginRight: "8px" }} />
                  <Typography>Multi-City</Typography>
                </>
              )}
            </Box>
          ),
        }}
        sx={{
          backgroundColor: "#fff",
          "& .MuiFilledInput-root": {
            borderRadius: "8px",
            backgroundColor: "#fff",
            height: "3rem",
            display: "flex",
            alignItems: "center",
            "&:hover": { backgroundColor: "#e0e0e0" },
            "&.Mui-focused": { backgroundColor: "#fff" },
            "&:before, &:after": { display: "none" },
          },
        }}
      >
        <MenuItem value="Round trip">
          <Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>
            <ListItemIcon>
              <CompareArrowsIcon sx={{ color: "blue" }} />
            </ListItemIcon>
            <Typography>Round Trip</Typography>
          </Box>
        </MenuItem>

        <MenuItem value="One way">
          <Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>
            <ListItemIcon>
              <FlightTakeoffIcon sx={{ color: "blue" }} />
            </ListItemIcon>
            <Typography>One Way</Typography>
          </Box>
        </MenuItem>

        <MenuItem value="Multi-city">
          <Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>
            <ListItemIcon>
              <FlightLandIcon sx={{ color: "blue" }} />
            </ListItemIcon>
            <Typography>Multi-City</Typography>
          </Box>
        </MenuItem>
      </TextField>
    </Box>
  );
};

export default TripSelector;
