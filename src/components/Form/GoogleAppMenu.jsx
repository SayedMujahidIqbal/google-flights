import { Grid, IconButton, Typography } from "@mui/material";
import { apps } from "../../utils/data";

const GoogleAppsMenu = () => {
  return (
    <Grid container spacing={2} padding={2} sx={{ width: "300px" }}>
      {apps.map((app, index) => (
        <Grid item xs={4} key={index} textAlign="center">
          <IconButton component="a" href={app.link} target="_blank">
            <img
              src={app.icon}
              alt={app.name}
              style={{ width: "32px", height: "32px" }}
            />
          </IconButton>
          <Typography variant="caption">{app.name}</Typography>
        </Grid>
      ))}
    </Grid>
  );
};

export default GoogleAppsMenu;
