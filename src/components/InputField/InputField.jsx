import React from "react";
import styles from "./styles.module.css";

const InputField = ({ label, ...props }) => {
  return (
    <>
      <label className="text-label font-medium ml-2 ">{label}</label>
      <input className={styles.customInput} {...props} />
    </>
  );
};

export default InputField;
