import React from "react";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { IconButton } from "@mui/material";

const Logout = () => {
  return(
    <>
  <IconButton aria-label="logout">
    <ExitToAppIcon />
  </IconButton>
  </>
  );
};

export default Logout;
