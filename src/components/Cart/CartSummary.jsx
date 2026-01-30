import { Box, Button, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { resetCart } from "../../features/cart/cartSlice";
import { selectCartTotal } from "../../features/cart/cartSelectors";

export default function CartSummary() {
  const total = useSelector(selectCartTotal);
  const dispatch = useDispatch();

  return (
    <Box
      sx={{
        p: 3,
        borderRadius: 3,
        bgcolor: "#fff",
        position: "sticky",
        top: 80,
      }}
    >
      <Typography fontWeight={700}>Subtotal</Typography>

      <Typography fontSize={18} mb={2}>
        ${total.toFixed(2)}
      </Typography>

      <Button
        fullWidth
        sx={{
          bgcolor: "#000",
          color: "#fff",
          borderRadius: 5,
          py: 1.2,
          mb: 1,
          "&:hover": { bgcolor: "#111" },
        }}
      >
        PROCEED TO BUY
      </Button>

      <Button
        fullWidth
        variant="outlined"
        sx={{ borderRadius: 5 }}
        onClick={() => dispatch(resetCart())}
      >
        RESET
      </Button>
    </Box>
  );
}
