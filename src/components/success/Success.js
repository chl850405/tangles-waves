import * as React from "react";
import {Alert, Stack} from "@mui/material";

const Success = () => {
  return (
    <>
    <Stack sx={{ width: "33%", textAlign: "center"}} spacing={2}>
      <Alert severity="success">Success!</Alert>
    </Stack>
    </>
  );
};

export default Success;
