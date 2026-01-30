import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
    Dialog,
    Box,
    Typography,
    Divider,
    Button,
    Stack,
    Avatar,
    LinearProgress,
    IconButton,
    DialogTitle
} from "@mui/material";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import { removeOrderedItems } from "../../features/cart/cartSlice";
import AddressSelector from "./AddressSelector";
import PaymentMethodSelector from "./PaymentMethodSelector";
import OrderSuccess from "./OrderSuccess";
import CloseIcon from "@mui/icons-material/Close";

const addresses = [
    {
        id: 1,
        name: "Home",
        full:
            "No 71, Jai Krishna Illam, 2nd Floor, Vegavathy Street, Rajaji Nagar, Kolathur, Chennai – 600099",
    },
    {
        id: 2,
        name: "Office",
        full:
            "DLF IT Park, Ramapuram, Mount Poonamallee Road, Chennai – 600089",
    },
    {
        id: 3,
        name: "Parents",
        full:
            "12/4, Anna Street, Chrompet, Chennai – 600044",
    },
];
export default function CheckoutDialog({ open, onClose, checkout }) {
    const dispatch = useDispatch();
    const etaDate = new Date();
    etaDate.setDate(etaDate.getDate() + 3);
    const eta = etaDate.toDateString();
    const [processing, setProcessing] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [selectedAddress, setSelectedAddress] = useState(addresses[0]);
    const [paymentMethod, setPaymentMethod] = useState("COD");
    const onSuccess = () => {
        setShowSuccess(true);
    };
    const handlePayment = () => {
        if (!paymentMethod) {
            alert("Please select a payment method");
            return;
        }

        setProcessing(true);

        setTimeout(() => {
            setProcessing(false);
            onSuccess();
        }, 2500);
    };
    useEffect(() => {
        if (open) {
            setShowSuccess(false);
            setProcessing(false);
        }
    }, [open]);

    if (!checkout?.items?.length && !showSuccess) return null;
    return (
        <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth scroll={showSuccess ? "body" : "paper"} PaperProps={{
            sx: {
                overflow: showSuccess ? "hidden" : "auto",
            },
        }}>
            {!showSuccess && (<DialogTitle
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    fontWeight: 700,
                }}
            >
                <Typography fontSize={26} fontWeight={700}>
                    Product Checkout
                </Typography>

                <IconButton onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            </DialogTitle>)}

            {
                showSuccess ? (
                    <OrderSuccess
                        onComplete={() => {
                            dispatch(removeOrderedItems());
                            onClose();
                        }}
                    />

                ) : (
                    <Box sx={{ display: "flex", bgcolor: "#FAFAFA" }}>
                        {/* LEFT */}
                        <Box sx={{ flex: 3, p: 3 }}>
                            {/* Address */}

                            <AddressSelector
                                addresses={addresses}
                                selectedId={selectedAddress.id}
                                onChange={setSelectedAddress}
                            />


                            <Divider sx={{ my: 3 }} />

                            {/* Items */}
                            <Typography fontWeight={700} mb={2}>
                                Review items
                            </Typography>

                            <Stack spacing={2}>
                                {checkout.items.map(item => (
                                    <Stack
                                        key={item.id}
                                        direction="row"
                                        spacing={2}
                                        alignItems="center"
                                    >
                                        <Avatar
                                            src={item.thumbnail}
                                            variant="rounded"
                                            sx={{
                                                width: 56,
                                                height: 56,
                                                bgcolor: "#F1F5F9",
                                            }}
                                        />

                                        <Box sx={{ flex: 1 }}>
                                            <Typography fontWeight={600}>
                                                {item.title}
                                            </Typography>

                                            <Typography fontSize="0.85rem" color="text.secondary">
                                                Qty: {item.quantity}
                                            </Typography>

                                            <Typography fontSize="0.85rem">
                                                ₹{item.discountedTotal.toFixed(2)}
                                            </Typography>
                                        </Box>

                                        <Stack
                                            direction="row"
                                            spacing={0.5}
                                            alignItems="center"
                                        >
                                            <LocalShippingIcon
                                                sx={{ fontSize: 18, color: "#16A34A" }}
                                            />
                                            <Typography fontSize="0.75rem" color="#16A34A">
                                                Arrives by {eta}
                                            </Typography>
                                        </Stack>
                                    </Stack>
                                ))}
                            </Stack>
                        </Box>

                        {/* RIGHT */}

                        <Box
                            sx={{
                                flex: 1.2,
                                p: 3,
                                bgcolor: "#FFFFFF",
                                borderLeft: "1px solid #E5E7EB",
                            }}
                        >

                            <Button
                                fullWidth
                                sx={{
                                    mb: 2,
                                    borderRadius: 999,
                                    py: 1.2,
                                    fontWeight: 700,
                                    background: "#FACC15",
                                    fontSize: "0.75rem",
                                    letterSpacing: 1,
                                    color: "#000",
                                    "&:hover": {
                                        background: "#EAB308",
                                    },
                                }}
                                disabled={processing}
                                onClick={handlePayment}
                            >
                                {processing ? "Processing Payment..." : "Proceed Payment"}
                            </Button>

                            {processing && <LinearProgress sx={{ mt: 1 }} />}

                            <PaymentMethodSelector
                                method={paymentMethod}
                                onChange={setPaymentMethod}
                            />


                            <Divider sx={{ mb: 2 }} />

                            <Stack spacing={1}>
                                <Typography fontSize="0.9rem">
                                    Items: ₹{checkout.subtotal.toFixed(2)}
                                </Typography>

                                <Typography
                                    fontSize="0.9rem"
                                    color="success.main"
                                >
                                    You save: ₹{checkout.savings.toFixed(2)}
                                </Typography>

                                <Divider />

                                <Typography fontWeight={700} fontSize="1.1rem">
                                    Order Total: ₹{checkout.discountedTotal.toFixed(2)}
                                </Typography>
                            </Stack>

                            <Button
                                fullWidth
                                variant="outlined"
                                sx={{ mt: 2 }}
                                onClick={onClose}
                            >
                                Cancel
                            </Button>
                        </Box>
                    </Box>
                )
            }

        </Dialog>
    );
}
