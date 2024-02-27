import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      //Softwares:
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
      iceberg: "#7ac8cc", // Hover state for header icons
      charcoal: "#31353c", // 'Menu lateral'
      steelGray: "#5a5d63", // Hover state for sidebar menu

      primaryMain: "#009DA4",
      primaryLight: "#7AC8CC",

      textDark: "#31353C",
      textLight: "#FFFFFF",

      // EGU
      cloudGray: "#F1F3F4",
      successMain: "#00BD8D",
      successLight: "#E6F9F4",
      sunflowerYellow: "#E8B722",
      coralRed: "#FF5858",

      // Table Lines and Header Accents
      mercuryGray: "#C1C2C5",

      // Table Row Hover Background
      frost: "#EDF8F9",

      // Disabled Icons
      slateGray: "#AFB0B2",

      // Faróis e Metas (Beacons and Goals)
      royalBlue: "#328AEC",
      skyBlueLight: "#5EBCE4",

      // Context Menu Hover Background
      ghostGray: "#F3F3F3",

      // Status Variants
      foam: "#E6F9F4",
      cream: "#FDF8E9",
      blush: "#FFEFEF",
      regalBlue: "#205CAA",

      // Negative Button Hover Background
      platinum: "#E6E6E6",

      // FCA (Financial Compliance Assurance)
      sapphireBlue: "#445DE2",
      tangerine: "#FFA944",
      turquoise: "#01B2D9",
      babyBlue: "#80D8EC",
    },
    extend: {},
  },
  plugins: [],
};
export default config;
