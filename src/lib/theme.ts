"use client";
import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

declare module "@mui/material/styles" {
  interface PaletteOptions {
    custom?: {
      gestiona: string;
      start: string;
      lite: string;
      standard: string;
      master: string;
      expert: string;
      bonus: string;
      monitor: string;
      project: string;
      conexa: string;
      okr: string;
      diario: string;
    };
  }
}

const theme = createTheme({
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  palette: {
    background: {
      default: "#FFFFFF",
    },
    common: {
      black: "#31353C",
      white: "#FFFFFF",
    },
    grey: {
      100: "#F1F3F4",
      200: "#F3F3F3",
      300: "#E6E6E6",
      400: "#C1C2C5",
      500: "#AFB0B2",
      600: "#5A5D63",
    },
    info: { main: "#619DF2" },
    primary: {
      main: "#009DA4",
      light: "#7AC8CC",
    },
    success: { main: "#00BD8D", light: "#E6F9F4" },
    warning: { main: "#E8B722", light: "#FDF8E9" },
    error: { main: "#FF5858", light: "#FFEFEF" },
    custom: {
      gestiona: "#008CFF",
      start: "#CDCDCD",
      lite: "#F5C239",
      standard: "#003E9C",
      master: "#7921A1",
      expert: "#212121",
      bonus: "#542CA7",
      monitor: "#EC801B",
      project: "#970F53",
      conexa: "#000059",
      okr: "#22786B",
      diario: "#8DC63F",
    },
  },
  shape: {
    borderRadius: 4,
  },
});

export default theme;
