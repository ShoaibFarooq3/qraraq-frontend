import React from "react";
import { Card, CardContent } from "@mui/material";
import InputField from "../InputField";
import PrimaryButton from "../PrimaryButton/PrimaryButton";

const RegisterCard = () => {
  return (
    <>
      <div>
        <Card
          sx={{
            maxWidth: "432px",
            borderRadius: "32px",
            marginBottom: "78.25px",
          }}
        >
          <CardContent>
            <div className="p-4">
              <p className="text-center font-semibold">Login / Register</p>
            </div>

            <hr />

            <div className="p-8 mt-[20px]">
              <InputField label="National ID" placeHolder="Enter National ID" />
              <p className="text-center font-medium text-sm mt-[23px]">
                You will be redirected directly to the Registration process if
                the user doesn't exist
              </p>

              <div className="mt-[111px]">
                <PrimaryButton>Next</PrimaryButton>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default RegisterCard;
