import { AppBar, Toolbar, Typography, IconButton, Badge, Box } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector } from "react-redux";
import { selectCartTotalQuantity } from "../features/cart/cartSelectors";

export default function Header() {
  const cartCount = useSelector(selectCartTotalQuantity);

  return (
    <AppBar position="sticky" elevation={0}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography fontWeight={700}>
          LOGITECH
        </Typography>

        <Box display={"flex"} alignItems={"center"}>
          <Typography fontSize={14} fontWeight={500}>
            Hello, Kristopher 
          </Typography>
          <IconButton color="inherit">
            <Badge
              badgeContent={cartCount}
              color="error"
              overlap="circular"
            >
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Box>

      </Toolbar>
    </AppBar>
  );
}
