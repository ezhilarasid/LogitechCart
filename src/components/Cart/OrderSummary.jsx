import { Box, Button, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { resetCart } from "../../features/cart/cartSlice";
import { selectCartTotal } from "../../features/cart/cartSelectors";

export default function OrderSummary() {
  const total = useSelector(selectCartTotal);
  const dispatch = useDispatch();

  return (
    <Box sx={{ flex: 1 }}>
      <Typography fontWeight={700}>Subtotal</Typography>
      <Typography mb={2}>${total.toFixed(2)}</Typography>

      <Button fullWidth variant="contained">
        Proceed to Buy
      </Button>

      <Button
        fullWidth
        variant="outlined"
        sx={{ mt: 1 }}
        onClick={() => dispatch(resetCart())}
      >
        Reset
      </Button>
    </Box>
  );
}
