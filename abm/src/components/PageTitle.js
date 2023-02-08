import { styled } from "@mui/material/styles";
import { Box, Paper, Stack } from "@mui/material";

const Title = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(4),
  textAlign: "center",
  fontSize: 20,
  color: theme.palette.text.secondary,
}));

export const PageTitle = ({ children }) => (
  <Box sx={{ width: "100%" }}>
    <Stack spacing={2}>
      <Title>{children}</Title>
    </Stack>
  </Box>
);
