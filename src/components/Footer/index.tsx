import { BottomNavigation, BottomNavigationAction, Box } from "@mui/material";
import { useState } from "react";

export const FooterComponents = () => {
  const [value, setValue] = useState(0);

  return (
    <Box
      sx={{
        position: "fixed",
        left: 0,
        bottom: 0,
        width: "100%",
        color: "white",
        textAlign: "center",
      }}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Recentes" />
        <BottomNavigationAction label="Favoritos" />
        <BottomNavigationAction label="Outros" />
      </BottomNavigation>
    </Box>
  );
};
