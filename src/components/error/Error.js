import * as React from 'react';
import {Alert, Stack} from "@mui/material";

const Error = () => {
  return (
    <>
    <Stack sx={{ width: '33%', textAlign: "center" }} spacing={2}>
      <Alert severity="error" >Error!</Alert>
    </Stack>
    </>
  );
};

export default Error