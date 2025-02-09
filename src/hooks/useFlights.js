import axios from "axios";
import { useEffect, useMemo, useState } from "react";

const useFlights = (searchParams) => {
  const [fetchedFlights, setFetchedFlights] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const memoizedParams = useMemo(() => searchParams, [searchParams]);

  useEffect(() => {
    if (memoizedParams && !fetchedFlights) {
      const fetchFlights = async () => {
        console.log("fetchingData", memoizedParams);
        try {
          const { tripType, classType, flights, passengers } = memoizedParams;
          if (tripType === "Round trip" || tripType === "One way") {
            const optionsOriginAirports = {
              method: "GET",
              url: "https://sky-scrapper.p.rapidapi.com/api/v1/flights/searchAirport",
              params: {
                query: flights.map((flight) => flight.origin).toString(),
                locale: "en-US",
              },
              headers: {
                "x-rapidapi-key":
                  "e2ae0436e6mshfeb5828a22a397dp1b088ejsn7848dde6a4c0",
                "x-rapidapi-host": "sky-scrapper.p.rapidapi.com",
              },
            };
            const optionsDestinationAirports = {
              method: "GET",
              url: "https://sky-scrapper.p.rapidapi.com/api/v1/flights/searchAirport",
              params: {
                query: flights.map((flight) => flight.destination).toString(),
                locale: "en-US",
              },
              headers: {
                "x-rapidapi-key":
                  "e2ae0436e6mshfeb5828a22a397dp1b088ejsn7848dde6a4c0",
                "x-rapidapi-host": "sky-scrapper.p.rapidapi.com",
              },
            };
            console.log("Hello");
            //////// Fetching Airports /////////////////////
            const sourceAirports = await axios.request(optionsOriginAirports);
            const destinationAirports = await axios.request(
              optionsDestinationAirports
            );

            console.log("Airports done");
            const flightOptions = {
              method: "GET",
              url: "https://sky-scrapper.p.rapidapi.com/api/v2/flights/searchFlights",
              params: {
                originSkyId: sourceAirports.data.data
                  .map((s) => s.skyId)
                  .toString(),
                destinationSkyId: destinationAirports.data.data
                  .map((s) => s.skyId)
                  .toString(),
                originEntityId: sourceAirports.data.data
                  .map((e) => e.entityId)
                  .toString(),
                destinationEntityId: destinationAirports.data.data
                  .map((e) => e.entityId)
                  .toString(),
                cabinClass: classType.toLowerCase(),
                date: flights.map((flight) => flight.travelDate).toString(),
                returnDate: flights
                  .map((flight) => flight.returnDate)
                  .toString(),
                adults: passengers.adult,
                childrens: passengers.children,
                infants: passengers.infantsOnSeat,
                sortBy: "best",
                currency: "USD",
                market: "en-US",
                countryCode: "US",
              },
              headers: {
                "x-rapidapi-key":
                  "e2ae0436e6mshfeb5828a22a397dp1b088ejsn7848dde6a4c0",
                "x-rapidapi-host": "sky-scrapper.p.rapidapi.com",
              },
            };
            setLoading(true);
            const response = await axios.request(flightOptions);
            if (response.data.data) {
              setFetchedFlights({ ...response.data.data });
              console.log("Flight done", fetchedFlights);
              setLoading(false);
            }
          }
        } catch (error) {
          console.error("Error fetching flights:", error);
          setError(true);
        }
      };
      fetchFlights();
    }
  }, [memoizedParams, fetchedFlights]);

  return { fetchedFlights, loading, error };
};

export default useFlights;
