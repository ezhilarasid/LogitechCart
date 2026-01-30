import { useState } from "react";
import { Box, Button, Typography, Stack, Checkbox } from "@mui/material";
import { useDispatch } from "react-redux";
import { removeItem, updateQuantity, toggleItemSelection } from "../../features/cart/cartSlice";
import ImagePreviewModal from "../Common/ImagePreviewModal";

export default function CartItem({ item }) {
    console.log('item', item)
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();
    const isDisabled = !item.selected;
    return (
        <Box
            sx={{
                background: "linear-gradient(21deg, #ffffff, #eceff4)",
                borderRadius: 1,
                p: 2,
                position: "relative",
                opacity: item.selected ? 1 : 0.6,
                filter: item.selected ? "none" : "grayscale(0.3)",
                boxShadow:
                    "0 4px 14px rgba(0,0,0,0.08)",

                transition: "all 0.3s ease",
                display: "flex",
                flexDirection: "column",
                "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow:
                        "0 12px 28px rgba(0,0,0,0.12)",
                },
            }}
        >

            <Stack direction="row" spacing={2} alignItems="center">
                <Checkbox
                    checked={item.selected}
                    onChange={() => dispatch(toggleItemSelection(item.id))}
                />
                <Box
                    onClick={() => setOpen(true)}
                    sx={{
                        width: 72,
                        height: 72,
                        borderRadius: "50%",
                        background: "#F1F4F8",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "zoom-in",
                    }}
                >

                    <Box
                        component="img"
                        src={item.thumbnail}
                        alt={item.title}
                        sx={{
                            width: 48,
                            height: 48,
                            objectFit: "contain",
                        }}
                    />
                </Box>


                <Box>
                    <Typography
                        fontWeight={700}
                        fontSize="1rem"
                        color="#0F172A"
                    >
                        {item.title}
                    </Typography>

                    <Stack spacing={0.3}>
                        <Typography fontSize="0.8rem" color="text.secondary">
                            ${item.price.toFixed(2)} × {item.quantity}
                        </Typography>

                        <Typography
                            sx={{
                                textDecoration: "line-through",
                                fontSize: "0.85rem",
                                color: "#64748B",
                            }}
                        >
                            ${(item.price * item.quantity).toFixed(2)}
                        </Typography>

                        <Typography fontWeight={700} fontSize="1rem">
                            ${item.discountedTotal.toFixed(2)}
                        </Typography>

                        <Typography
                            fontSize="0.75rem"
                            fontWeight={600}
                            color="#cc0f2b"
                        >
                            {item.discountPercentage}% OFF
                        </Typography>
                    </Stack>
                </Box>
            </Stack>

            <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                sx={{ mt: "auto", pt: 2 }} 
            >
                <Box display="flex" alignItems="center">
                    <Button
                        disabled={isDisabled}
                        onClick={() =>
                            dispatch(updateQuantity({ id: item.id, delta: -1 }))
                        }
                        sx={{ minWidth: 26, height: 26, background: "#EEF2F7" }}
                    >
                        −
                    </Button>

                    <Typography fontWeight={600} sx={{ px: 1 }}>
                        {item.quantity}
                    </Typography>

                    <Button
                        disabled={isDisabled}
                        onClick={() =>
                            dispatch(updateQuantity({ id: item.id, delta: 1 }))
                        }
                        sx={{ minWidth: 26, height: 26, background: "#EEF2F7" }}
                    >
                        +
                    </Button>
                </Box>

                {/* Remove button */}
                <Button
                    disabled={isDisabled}
                    size="small"
                    onClick={() => dispatch(removeItem(item.id))}
                    sx={{
                        borderRadius: 20,
                        px: 2.5,
                        py: 0.5,
                        fontSize: "0.75rem",
                        background: "#F8FAFC",
                        color: "#64748B",
                        "&:hover": {
                            background: "#FEE2E2",
                            color: "#B91C1C",
                        },
                    }}
                >
                    REMOVE
                </Button>
            </Stack>
            <ImagePreviewModal
                open={open}
                onClose={() => setOpen(false)}
                src={item.thumbnail}
                alt={item.title}
            />

        </Box>
    );
}
