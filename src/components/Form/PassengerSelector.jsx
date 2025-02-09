import { useState } from "react";
import {
  Menu,
  MenuItem,
  Box,
  IconButton,
  Button,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Person2Outlined from "@mui/icons-material/Person2Outlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const PassengerSelector = ({ passengers, setPassengers }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const totalPassengers =
    passengers.adult +
    passengers.children +
    passengers.infantsInSeat +
    passengers.infantsOnLap;

  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const updatePassengers = (type, delta) => {
    setPassengers((prevPassengers) => {
      return {
        ...prevPassengers,
        [type]: Math.max(0, (prevPassengers[type] || 0) + delta),
      };
    });
  };

  return (
    <Box>
      <Button
        onClick={handleClick}
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "5px",
          padding: "5px 0",
          color: "#333",
          textTransform: "none",
          background: "transparent",
          boxShadow: "none",
          "&:hover": { backgroundColor: "transparent" },
        }}
      >
        <Person2Outlined fontSize="small" />
        <Typography variant="body1">
          {totalPassengers} Passenger{totalPassengers !== 1 ? "s" : ""}
        </Typography>
        <KeyboardArrowDownIcon fontSize="small" />
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        sx={{ mt: 1 }}
      >
        <Box sx={{ width: "280px", padding: "10px" }}>
          {[
            { key: "adult", label: "Adult" },
            { key: "children", label: "Children (2-11)" },
            { key: "infantsInSeat", label: "Infants (In seat)" },
            { key: "infantsOnLap", label: "Infants (On lap)" },
          ].map(({ key, label }) => (
            <MenuItem
              key={key}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "10px 16px",
              }}
            >
              <Typography sx={{ fontSize: "14px", fontWeight: 500 }}>
                {label}
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <IconButton
                  onClick={() => updatePassengers(key, -1)}
                  disabled={passengers[key] === 0}
                  sx={{
                    color: passengers[key] === 0 ? "#ccc" : "#000",
                    backgroundColor: "#f5f5f5",
                    borderRadius: "50%",
                    "&:hover": { backgroundColor: "#e0e0e0" },
                  }}
                >
                  <RemoveIcon />
                </IconButton>
                <Typography sx={{ margin: "0 12px", fontWeight: "bold" }}>
                  {passengers[key]}
                </Typography>
                <IconButton
                  onClick={() => updatePassengers(key, 1)}
                  sx={{
                    color: "#000",
                    backgroundColor: "#f5f5f5",
                    borderRadius: "50%",
                    "&:hover": { backgroundColor: "#e0e0e0" },
                  }}
                >
                  <AddIcon />
                </IconButton>
              </Box>
            </MenuItem>
          ))}

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              padding: "10px 16px",
            }}
          >
            <Button
              onClick={handleClose}
              color="error"
              sx={{ fontWeight: 600 }}
            >
              Cancel
            </Button>
            <Button
              onClick={handleClose}
              color="primary"
              sx={{ fontWeight: 600 }}
            >
              Done
            </Button>
          </Box>
        </Box>
      </Menu>
    </Box>
  );
};

export default PassengerSelector;
