import { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Box,
  useTheme,
  useMediaQuery,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ThemeToggle from "./ThemeToggle";

const Navbar = ({ toggleTheme, isDarkMode }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [selectedTab, setSelectedTab] = useState("Flights");
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleTabClick = (tab) => setSelectedTab(tab);
  const toggleDrawer = (open) => () => setDrawerOpen(open);

  const tabStyle = (tab) => ({
    color:
      selectedTab === tab
        ? theme.palette.primary.main
        : theme.palette.text.primary,
    backgroundColor:
      selectedTab === tab ? "rgba(25, 118, 210, 0.1)" : "transparent",
    border:
      selectedTab === tab
        ? `2px solid ${theme.palette.primary.main}`
        : "1px solid transparent",
    borderRadius: "8px",
    padding: "10px 18px",
    transition: "all 0.3s ease-in-out",
    fontSize: "0.95rem",
    fontWeight: selectedTab === tab ? "bold" : "normal",
    "&:hover": {
      backgroundColor: "rgba(25, 118, 210, 0.15)",
      color: theme.palette.primary.main,
      border: `2px solid ${theme.palette.primary.main}`,
    },
  });

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.primary,
        boxShadow: "none",
        borderBottom: `1px solid ${theme.palette.divider}`,
        padding: isMobile ? "8px" : "12px 24px",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Left Section */}
        <Box sx={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <a
            href="https://www.google.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
              alt="Google Logo"
              style={{ height: "32px" }}
            />
          </a>
        </Box>

        {/* Navigation Links (Desktop Only) */}
        {!isMobile && (
          <Box sx={{ display: "flex", gap: "14px", marginLeft: "20px" }}>
            {["Travel", "Explore", "Flights", "Hotels", "Vacation Rentals"].map(
              (tab) => (
                <Button
                  key={tab}
                  sx={tabStyle(tab)}
                  onClick={() => handleTabClick(tab)}
                >
                  {tab}
                </Button>
              )
            )}
          </Box>
        )}

        {/* Right Section */}
        <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <ThemeToggle toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
          <IconButton color="inherit">
            <MoreVertIcon />
          </IconButton>
          <Button
            variant="contained"
            sx={{
              backgroundColor: theme.palette.primary.main,
              color: "#fff",
              borderRadius: "8px",
              padding: "8px 16px",
              textTransform: "none",
              "&:hover": { backgroundColor: theme.palette.primary.dark },
            }}
          >
            Sign In
          </Button>
        </Box>
      </Toolbar>

      {/* Sidebar Drawer */}
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(false)}
        >
          <List>
            {["Travel", "Explore", "Flights", "Hotels", "Vacation Rentals"].map(
              (text) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton onClick={() => handleTabClick(text)}>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              )
            )}
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
