import React from "react";
import Button from "@mui/material/Button";

const PrimaryButton = ({ ...children }) => {
  return (
    <>
      <Button variant="contained">{children}</Button>
    </>
  );
};

export default PrimaryButton;
