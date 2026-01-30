import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box, Typography, Divider, Button, CircularProgress, Stack, Checkbox } from "@mui/material";
import {
  selectCartSummary, selectCartItems, selectCartLoading, selectAllSelected,
  selectSomeSelected, selectCheckoutSummary,
} from "../../features/cart/cartSelectors";
import { resetCart, toggleSelectAll } from "../../features/cart/cartSlice";
import CartItem from "./CartItem";
import CheckoutDialog from "../Checkout/CheckoutDialog";

export default function CartContent() {
  const dispatch = useDispatch();
  const allSelected = useSelector(selectAllSelected);
  const someSelected = useSelector(selectSomeSelected);
  const checkout = useSelector(selectCheckoutSummary);
  const items = useSelector(selectCartItems);
  const loading = useSelector(selectCartLoading);
  const { subtotal, discountedTotal, savings } =
    useSelector(selectCartSummary);

  const [openCheckout, setOpenCheckout] = useState(false);

  if (loading) {
    return (
      <Box
        sx={{
          minHeight: 450,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }


  return (
    <Box
      sx={{
        maxWidth: 1200,
        mx: "auto",
        bgcolor: "#fff",
        p: 3,
        borderRadius: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          mb: 2,
        }}
      >
        <Box>
          <Typography variant="h5" fontWeight={700}>
            Shopping Cart
          </Typography>
          <Typography fontSize={15} color="text.secondary">
            Cart contains {items.length} products
          </Typography>
        </Box>

        <Box textAlign="right">
          <Typography fontWeight={700}>
            Subtotal: ${subtotal.toFixed(2)}
          </Typography>

          <Typography color="success.main" fontWeight={600}>
            You save: ${savings.toFixed(2)}
          </Typography>

          <Typography fontWeight={800} fontSize={18}>
            Total: ${discountedTotal.toFixed(2)}
          </Typography>
        </Box>

      </Box>

      <Divider sx={{ mb: 3 }} />
      {
        items.length === 0 ? (
          <Typography
            fontSize="1.1rem"
            color="text.secondary"
            sx={{ textAlign: "center", py: 4 }}
          >
            Your cart is empty
          </Typography>
        ) : <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 2 }}>
          <Checkbox
            checked={allSelected}
            indeterminate={!allSelected && someSelected}
            onChange={(e) =>
              dispatch(toggleSelectAll(e.target.checked))
            }
          />
          <Typography fontWeight={600}>
            Select All
          </Typography>
        </Stack>
      }

      <Box
        sx={{
         
          display: "grid",
          gap: 3,
          width: "100%",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          "@media (max-width:800px)": {
            gridTemplateColumns: "1fr",
          },
        }}
      >
        {items.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </Box>


      <Divider sx={{ mt: 3 }} />
      <Stack direction="row" alignItems="center" justifyContent={"space-between"} spacing={1} sx={{ mb: 2, mt: 3 }}>
        <Button
          onClick={() => dispatch(resetCart())}
          sx={{
            mt: 4,
            mx: "auto",
            display: "block",
            borderRadius: 999,
            px: 5,
            py: 1,
            background: "#E2E8F0",
            color: "#0F172A",
            fontWeight: 600,
            "&:hover": {
              background: "#CBD5E1",
            },
          }}
        >
          Reset Cart
        </Button>

        <Button
          disabled={checkout.items.length === 0}
          onClick={() => setOpenCheckout(true)}
          sx={{
            mt: 3,
            borderRadius: 999,
            px: 6,
            py: 1.2,
            fontWeight: 700,
            background: "#0F172A",
            color: "#fff",

            "&:hover": {
              background: "#020617",
            },

            "&:disabled": {
              background: "#CBD5E1",
              color: "#64748B",
            },
          }}
        >
          Proceed to Checkout
        </Button>
      </Stack>

      {/* Reset */}

      <CheckoutDialog
        open={openCheckout}
        onClose={() => setOpenCheckout(false)}
        checkout={checkout}
      />


    </Box>
  );
}
