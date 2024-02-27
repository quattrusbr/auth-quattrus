import React from "react";
import {
  CircularProgress,
  Button as MuiButton,
  ButtonProps,
} from "@mui/material";

interface ButtonPropsWithLoading extends ButtonProps {
  loading?: boolean;
  children?: React.ReactNode;
}

export function Button({
  children,
  loading,
  ...muiButtonProps
}: ButtonPropsWithLoading) {
  return (
    <MuiButton {...muiButtonProps}>
      <div className="flex gap-2">
        {loading ? <CircularProgress color="inherit" size={20} /> : children}
      </div>
    </MuiButton>
  );
}
