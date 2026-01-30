import { Box, Typography, Avatar } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Confetti from "react-confetti";
import { useEffect, useRef, useState } from "react";

export default function OrderSuccess({ onComplete }) {
  const [seconds, setSeconds] = useState(5);
  const hasCompleted = useRef(false); // ✅ prevents multiple calls

  useEffect(() => {
    if (seconds === 0 && !hasCompleted.current) {
      hasCompleted.current = true;
      onComplete(); // ✅ called ONLY once
      return;
    }

    if (seconds > 0) {
      const timer = setTimeout(() => {
        setSeconds(prev => prev - 1);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [seconds, onComplete]);

  return (
    <Box sx={{ textAlign: "center", py: 6 }}>
      <Confetti numberOfPieces={250} recycle={false} />

      <Avatar
        sx={{
          bgcolor: "#16A34A",
          width: 72,
          height: 72,
          mx: "auto",
          mb: 2,
        }}
      >
        <CheckCircleIcon sx={{ fontSize: 44 }} />
      </Avatar>

      <Typography variant="h5" fontWeight={700}>
        Order Placed Successfully!
      </Typography>

      <Typography color="text.secondary" mt={1}>
        Thank you for your purchase 🎉
      </Typography>

      <Typography mt={3} fontWeight={600}>
        Redirecting to Orders in {seconds}...
      </Typography>
    </Box>
  );
}
