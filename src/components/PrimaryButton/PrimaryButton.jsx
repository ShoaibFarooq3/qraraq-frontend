import React from "react";
import Button from "@mui/material/Button";
import styles from "./styles.module.css";

const PrimaryButton = ({ width, fontSize, children }) => {
  return (
    <>
      <Button className={styles.primaryBtn} variant="contained">
        {children}
      </Button>
    </>
  );
};

export default PrimaryButton;
