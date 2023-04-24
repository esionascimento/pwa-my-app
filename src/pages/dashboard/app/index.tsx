import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Card,
  Typography,
} from "@mui/material";
import { HeaderAppComponent } from "./components/Header";
import Grid2 from "@mui/material/Unstable_Grid2";
import { useState } from "react";
import { FooterComponents } from "../../../components/Footer";

const DashboardPages = () => {
  const [value, setValue] = useState(0);

  return (
    <Box id="dashboard-pages">
      <HeaderAppComponent />
      <FooterComponents />
      <Box sx={{ marginTop: 10 }}>
        <Box textAlign={"center"}>
          <Typography variant="body1" color={"blue"}>
            gregory
          </Typography>
          <Typography variant="body1">FORD</Typography>
          <Typography variant="body1">MIRIAM</Typography>
        </Box>
        <Grid2 container spacing={3} margin={1}>
          <Grid2 xs={6} textAlign={"center"}>
            <Card
              sx={{
                height: "100px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
              }}
            >
              <Typography variant="body1">0</Typography>

              <Typography variant="body1">Pontos</Typography>
            </Card>
          </Grid2>
          <Grid2 xs={6} textAlign={"center"}>
            <Card
              sx={{
                height: "100px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
              }}
            >
              <Typography variant="body1">0</Typography>

              <Typography variant="body1">Pontos</Typography>
            </Card>
          </Grid2>
          <Grid2 xs={12}>
            <BottomNavigation
              showLabels
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
              sx={{ width: "100%" }}
            >
              <BottomNavigationAction
                label="Pontos"
                sx={{ backgroundColor: value ? "" : "#ddf", maxWidth: "none" }}
              />
              <BottomNavigationAction
                label="Pontos"
                sx={{ backgroundColor: value ? "#ddf" : "", maxWidth: "none" }}
              />
            </BottomNavigation>
          </Grid2>
        </Grid2>
        <Box>...</Box>
      </Box>
    </Box>
  );
};

export default DashboardPages;
