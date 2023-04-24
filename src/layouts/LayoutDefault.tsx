import { Box } from "@mui/material";
import { FC } from "react";
import { FooterComponents } from "../components/Footer";

interface Props {
  children: JSX.Element;
}

export const LayoutDefault: FC<Props> = ({ children }) => {
  return (
    <Box display="flex" flexDirection="column">
      <>{children}</>
      <FooterComponents />
    </Box>
  );
};

export default LayoutDefault;
