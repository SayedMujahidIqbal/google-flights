import { IconButton, useTheme } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

const ThemeToggle = ({ toggleTheme, isDarkMode }) => {
  const theme = useTheme();

  return (
    <IconButton
      onClick={toggleTheme}
      sx={{ color: theme.palette.text.primary }}
    >
      {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
    </IconButton>
  );
};

export default ThemeToggle;
