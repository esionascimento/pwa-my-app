import { Box, Typography, useTheme } from "@mui/material";
import { Icon } from "@iconify/react";
import Grid2 from "@mui/material/Unstable_Grid2";

export const HeaderAppComponent = () => {
  const theme = useTheme();

  return (
    <Box id="header-app-component">
      <Box
        sx={{
          background: theme.palette.primary.main,
          height: "10vh",
          borderRadius: "0px 0px 20px 20px",
          position: "relative",
        }}
      ></Box>
      <Box sx={{ position: "absolute", top: 5, width: "100%" }}>
        <Grid2 container sx={{ height: "100%" }}>
          <Grid2 xs={4}></Grid2>
          <Grid2 xs={4}>
            <Box textAlign={"center"}>
              <Typography variant="h5" marginRight={1} marginTop={2}>
                Início
              </Typography>
            </Box>
            <Box textAlign={"center"}>
              <Icon
                icon="ic:baseline-account-circle"
                style={{
                  background: "white",
                  borderRadius: "50%",
                  padding: 0,
                }}
                width={100}
                height={100}
              />
            </Box>
          </Grid2>
          <Grid2 xs={4} marginTop={5}>
            <Box sx={{ textAlign: "end", marginRight: 3 }}>
              <Icon icon={"mdi:gear"} width={30} height={30} color="white" />
            </Box>
            <Typography
              variant="body1"
              textAlign={"end"}
              marginRight={1}
              marginTop={2}
            >
              Ver perfil
            </Typography>
          </Grid2>
        </Grid2>
      </Box>
    </Box>
  );
};
