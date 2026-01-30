import {
    Box,
    Typography,
    Radio,
    Stack,
    TextField,
    Paper,
} from "@mui/material";

export default function PaymentMethodSelector({ method, onChange }) {
    return (
        <Stack spacing={2} mb={2}>
            <Typography fontWeight={700}>
                Payment method
            </Typography>
            <Paper
                variant="content"
                sx={{
                    borderRadius: 1,
                    borderColor: method === "COD" ? "#93a1c2" : "#E5E7EB",
                }}
                onClick={() => onChange("COD")}
            >
                <Stack direction="row" alignItems="center" spacing={2}>
                    <Radio checked={method === "COD"} />
                    <Typography fontWeight={600}>
                        Cash on Delivery
                    </Typography>
                </Stack>
            </Paper>
            <Paper
                variant="content"
            >
                <Stack spacing={1}>
                    <Stack direction="row" alignItems="center" spacing={2}>
                        <Radio disabled checked={method === "UPI"} />
                        <Typography fontWeight={600}>UPI</Typography>
                    </Stack>


                </Stack>
            </Paper>

            <Paper
                variant="content"
                sx={{
                    borderRadius: 1,
                }}
            >
                <Stack spacing={1}>
                    <Stack direction="row" alignItems="center" spacing={2}>
                        <Radio disabled checked={method === "CARD"} />
                        <Typography fontWeight={600}>
                            Credit / Debit Card
                        </Typography>
                    </Stack>

                </Stack>
            </Paper>
        </Stack>
    );
}
