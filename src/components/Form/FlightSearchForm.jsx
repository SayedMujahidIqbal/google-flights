import { useState, useCallback } from "react";
import { Box, TextField, Button, useTheme } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import TripSelector from "./TripSelector";
import PassengerSelector from "./PassengerSelector";
import ClassSelector from "./ClassSelector";

const FlightSearchForm = ({ onSearch }) => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === "dark";

  const [searchData, setSearchData] = useState({
    tripType: "Round trip",
    classType: "Economy",
    passengers: {
      adult: 1,
      children: 0,
      infantsInSeat: 0,
      infantsOnLap: 0,
    },
    flights: [
      {
        origin: "",
        destination: "",
        travelDate: "",
        returnDate: "",
      },
    ],
  });

  const addFlight = useCallback(() => {
    setSearchData((prev) => ({
      ...prev,
      flights: [
        ...prev.flights,
        { origin: "", destination: "", travelDate: "", returnDate: "" },
      ],
    }));
  }, []);

  const handleFlightChange = useCallback((index, field, value) => {
    setSearchData((prev) => {
      const updatedFlights = [...prev.flights];
      updatedFlights[index][field] = value;
      return { ...prev, flights: updatedFlights };
    });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!searchData.flights.length || !searchData.flights[0].origin) {
      console.log("Missing required fields, not updating searchParams.");
      return;
    }
    onSearch(JSON.parse(JSON.stringify(searchData)));
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box
        sx={{
          backgroundColor: isDarkMode ? "#1e1e1e" : "#ffffff",
          color: isDarkMode ? "#ffffff" : "#000000",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: isDarkMode
            ? "0px 4px 10px rgba(255, 255, 255, 0.1)"
            : "0px 4px 10px rgba(0, 0, 0, 0.1)",
          maxWidth: "900px",
          width: "100%",
          margin: "auto",
          position: "relative",
          transition: "all 0.3s ease-in-out",
        }}
      >
        <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", mb: 2 }}>
          <TripSelector
            tripType={searchData.tripType}
            setTripType={(tripType) =>
              setSearchData((prev) => ({ ...prev, tripType }))
            }
            flights={searchData.flights}
            setFlights={(flights) =>
              setSearchData((prev) => ({ ...prev, flights }))
            }
          />
          <PassengerSelector
            passengers={searchData.passengers}
            setPassengers={(updateFn) =>
              setSearchData((prev) => ({
                ...prev,
                passengers: updateFn(prev.passengers),
              }))
            }
          />
          <ClassSelector
            classType={searchData.classType}
            setClassType={(classType) =>
              setSearchData((prev) => ({ ...prev, classType }))
            }
          />
        </Box>

        {searchData.flights.map((flight, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              gap: 2,
              flexWrap: "wrap",
              mb: 2,
              justifyContent: "space-between",
            }}
          >
            <TextField
              label="Origin"
              fullWidth
              sx={{ flex: 1, minWidth: "180px" }}
              value={flight.origin || ""}
              onChange={(e) =>
                handleFlightChange(index, "origin", e.target.value)
              }
              required
            />
            <TextField
              label="Destination"
              fullWidth
              sx={{ flex: 1, minWidth: "180px" }}
              value={flight.destination || ""}
              onChange={(e) =>
                handleFlightChange(index, "destination", e.target.value)
              }
              required
            />
            <TextField
              label="Departure"
              type="date"
              fullWidth
              sx={{ flex: 1, minWidth: "180px" }}
              value={flight.travelDate || ""}
              onChange={(e) =>
                handleFlightChange(index, "travelDate", e.target.value)
              }
              InputLabelProps={{ shrink: true }}
              required
            />
            <TextField
              label="Return"
              type="date"
              fullWidth
              sx={{
                flex: 1,
                minWidth: "180px",
                visibility:
                  searchData.tripType === "Round trip" ? "visible" : "hidden",
              }}
              value={flight.returnDate || ""}
              onChange={(e) =>
                handleFlightChange(index, "returnDate", e.target.value)
              }
              InputLabelProps={{ shrink: true }}
              disabled={searchData.tripType !== "Round trip"}
            />
          </Box>
        ))}

        {searchData.tripType === "Multi-city" && (
          <Button
            onClick={addFlight}
            startIcon={<AddIcon />}
            sx={{
              marginTop: "10px",
              width: "100%",
              backgroundColor: isDarkMode ? "#333" : "#e0e0e0",
              color: isDarkMode ? "#fff" : "#000",
              "&:hover": { backgroundColor: isDarkMode ? "#444" : "#d0d0d0" },
            }}
          >
            Add Another Flight
          </Button>
        )}

        <Button
          variant="contained"
          sx={{
            position: "absolute",
            bottom: "-20px",
            left: "50%",
            transform: "translateX(-50%)",
            borderRadius: "50px",
            padding: "5px 15px",
            fontSize: "0.875rem",
            background: theme.palette.primary.main,
            color: "#fff",
            "&:hover": { background: theme.palette.primary.dark },
            boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
          }}
          startIcon={<SearchIcon />}
          type="submit"
        >
          Explore
        </Button>
      </Box>
    </form>
  );
};

export default FlightSearchForm;
