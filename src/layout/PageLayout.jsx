import { Box, Container } from "@mui/material";
import Header from "./Header";
import Footer from "./Footer";

export default function PageLayout({ children }) {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        background:
          "linear-gradient(180deg, #F6F9FC 0%, #EEF2F7 100%)",
      }}
    >
      <Header />
      <Container maxWidth="lg" sx={{ py: 4, flex: 1, }}>
        {children}
      </Container>
      <Footer />
    </Box>
  );
}
