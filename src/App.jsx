import { useState } from "react";
import Header from "./Layout/Header";
import Navbar from "./Layout/Navbar";
import { ThemeProvider } from "@emotion/react";
import { Box, CssBaseline } from "@mui/material";
import { darkTheme, lightTheme } from "./Layout/theme";
import Flights from "./components/Flights/FlightsPage";
import { backGroundUrlDarkMode, backGroundUrlLightMode } from "./utils/data";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Box sx={{ backgroundColor: "white", minHeight: "100vh" }}>
        <Navbar
          toggleTheme={() => setIsDarkMode((prev) => !prev)}
          isDarkMode={isDarkMode}
        />
        <Header
          backgroundUrl={
            isDarkMode ? backGroundUrlDarkMode : backGroundUrlLightMode
          }
        />
        <Flights />
      </Box>
    </ThemeProvider>
  );
};

export default App;
