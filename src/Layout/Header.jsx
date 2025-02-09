import { Box, Typography, useTheme } from "@mui/material";

const Header = ({ backgroundUrl }) => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === "dark";

  return (
    <Box
      sx={{
        height: "400px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        backgroundImage: backgroundUrl ? `url(${backgroundUrl})` : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: !backgroundUrl
          ? theme.palette.background.default
          : "transparent",
        color: theme.palette.text.primary,
        paddingTop: { xs: "150px", sm: "200px" },
        transition: "all 0.3s ease-in-out",
      }}
    >
      {backgroundUrl && (
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: isDarkMode
              ? "rgba(0,0,0,0.5)"
              : "rgba(255,255,255,0.2)",
            zIndex: 1,
          }}
        />
      )}
      <Typography
        variant="h3"
        sx={{
          position: "relative",
          zIndex: 2,
          fontWeight: "bold",
          textShadow: backgroundUrl ? "2px 2px 5px rgba(0,0,0,0.3)" : "none",
        }}
      >
        Flights
      </Typography>
    </Box>
  );
};

export default Header;
