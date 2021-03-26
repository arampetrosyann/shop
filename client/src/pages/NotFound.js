import React from "react";
import { Box, Typography } from "@material-ui/core";

export default function NotFound() {
  return (
    <Box
      display="flex"
      height="100%"
      padding="20px 24px"
      justifyContent="center"
      alignItems="center"
    >
      <Typography component="h3" variant="h2" align="center">
        404 | Page Not Found
      </Typography>
    </Box>
  );
}
