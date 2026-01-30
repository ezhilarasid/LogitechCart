import {
  Box,
  Typography,
  Radio,
  Stack,
  Paper,
} from "@mui/material";

export default function AddressSelector({ addresses, selectedId, onChange }) {
  return (
    <Stack spacing={2}>
      <Typography fontWeight={700}>
        Delivering to
      </Typography>

      {addresses.map(addr => (
        <Paper
          key={addr.id}
          variant="outlined"
          sx={{
            p: 2,
            borderRadius: 1,
            cursor: "pointer",
            borderColor:
              selectedId === addr.id ? "#93a1c2" : "#E5E7EB",
            background:
              selectedId === addr.id ? "#EFF6FF" : "#fff",
          }}
          onClick={() => onChange(addr)}
        >
          <Stack direction="row" spacing={2} alignItems="flex-start">
            <Radio checked={selectedId === addr.id} />

            <Box>
              <Typography fontWeight={600}>
                {addr.name}
              </Typography>
              <Typography fontSize="0.9rem" color="text.secondary">
                {addr.full}
              </Typography>
            </Box>
          </Stack>
        </Paper>
      ))}
    </Stack>
  );
}
