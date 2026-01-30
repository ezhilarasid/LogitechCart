import { Dialog, Box } from "@mui/material";

export default function ImagePreviewModal({
  open,
  onClose,
  src,
  alt,
}) {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="md">
      <Box
        component="img"
        src={src}
        alt={alt}
        sx={{
          width: "100%",
          maxHeight: "80vh",
          objectFit: "contain",
        }}
      />
    </Dialog>
  );
}
