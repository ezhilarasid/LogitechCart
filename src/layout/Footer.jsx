import { Box, Divider, Typography } from "@mui/material";

export default function Footer() {
  return (
    <> 
    <Divider />
      <Box sx={{ py: 1, px: 1, bgcolor: "#fff" }}>
        <Typography fontSize={12} align="center" color="text.secondary">
          © 2026 Logitech. All rights reserved.
        </Typography>
      </Box>
    </>
  );
}
