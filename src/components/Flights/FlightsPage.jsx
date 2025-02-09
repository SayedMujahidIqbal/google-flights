import { useState } from "react";
import FlightSearchForm from "../Form/FlightSearchForm";
import FlightList from "./FlightList";
import { Container } from "@mui/material";
import useFlights from "../../hooks/useFlights";

const Flights = () => {
  const [searchParams, setSearchParams] = useState(null);

  const updateSearchParams = (newParams) => {
    setSearchParams((prev) => {
      if (JSON.stringify(prev) === JSON.stringify(newParams)) {
        return prev;
      }
      return { ...newParams };
    });
  };
  const { fetchedFlights, loading, error } = useFlights(searchParams);

  console.log(fetchedFlights);

  if (loading) return <span>Loading...!</span>;

  return (
    <Container sx={{ mt: 4, p: 2, width: "100%" }}>
      <FlightSearchForm onSearch={updateSearchParams} />{" "}
      {!searchParams ? (
        <p>Search for flights</p>
      ) : loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : fetchedFlights.length > 0 ? (
        <FlightList flights={fetchedFlights} />
      ) : (
        <p>No flights found.</p>
      )}
    </Container>
  );
};

export default Flights;
