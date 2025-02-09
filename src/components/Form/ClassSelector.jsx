import { MenuItem, TextField } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const ClassSelector = ({ classType, setClassType }) => {
  return (
    <TextField
      select
      fullWidth
      value={classType}
      variant="standard"
      onChange={(e) => setClassType(e.target.value)}
      SelectProps={{
        displayEmpty: true,
        IconComponent: KeyboardArrowDownIcon,
      }}
      sx={{
        width: "12rem",
        height: "3rem",
        backgroundColor: "transparent",
        "& .MuiInputBase-root": {
          borderRadius: "8px",
          padding: "10px",
          fontSize: "1rem",
          backgroundColor: "#fff",
          borderBottom: "none",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          "&:hover": { backgroundColor: "#f9f9f9" },
        },
        "& .MuiSelect-select": {
          display: "flex",
          alignItems: "center",
          paddingLeft: "12px",
        },
        "& .MuiInputBase-input": {
          color: "#333",
        },
      }}
    >
      <MenuItem value="Economy">Economy</MenuItem>
      <MenuItem value="Business">Business</MenuItem>
      <MenuItem value="First Class">First Class</MenuItem>
    </TextField>
  );
};

export default ClassSelector;
