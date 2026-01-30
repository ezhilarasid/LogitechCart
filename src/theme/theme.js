import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    background: {
      default: "#FAF9F6",
    },
    primary: {
      main: "#0F3D3E",
    },
    secondary: {
      main: "#000000",
    },
  },
  shape: {
    borderRadius: 14,
  },
  typography: {
    fontFamily: "Inter, Arial, sans-serif",
  },
});
