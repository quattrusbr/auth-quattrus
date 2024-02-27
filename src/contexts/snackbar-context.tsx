"use client";

import { Alert, Snackbar } from "@mui/material";
import React, { createContext, useContext, useState } from "react";

type Severity = "error" | "info" | "success" | "warning";

type SnackbarContextType = {
  openSnackBar: () => void;
  setSeverity: (value: Severity) => void;
  setMessage: (value: string) => void;
};

export const SnackbarContext = createContext({} as SnackbarContextType);

export function SnackbarProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [severity, setSeverity] = useState<Severity>("success");
  const [message, setMessage] = useState<string>("");

  const openSnackBar = () => {
    setOpen(true);
  };

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <SnackbarContext.Provider value={{ openSnackBar, setSeverity, setMessage }}>
      <Snackbar
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert
          onClose={handleClose}
          severity={severity}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {message}
        </Alert>
      </Snackbar>
      {children}
    </SnackbarContext.Provider>
  );
}

export function useOpenSnackbar() {
  const { openSnackBar, setMessage, setSeverity } = useContext(SnackbarContext);

  function notification({
    severity,
    message,
  }: {
    severity: Severity;
    message: string;
  }) {
    openSnackBar();
    openSnackBar;
    setSeverity(severity);
    setMessage(message);
  }

  return { notification };
}
