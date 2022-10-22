import { createTheme } from "@mui/material/styles";

// this is 'module augmentation' which essentially overrides the type
// defined in the ts module for mui styles and injects my custom options.
//
// if this was not included, the tsc would not accept the accent key as a valid
// PaletteOption
declare module "@mui/material/styles" {
  interface Palette {
    accent: Palette["primary"];
  }
  interface PaletteOptions {
    accent: PaletteOptions["primary"];
  }
}
// allow configuration using `createTheme`
interface ThemeOptions {
  accent?: {
    main?: string;
  };
}

const L_GREY = "#D9D9D9";
const D_GREY = "#353535";
const D_BLUE = "#284B63";
const L_BLUE = "#3C6E71";
const D_ORANGE = "#d77a61";

const theme = createTheme({
  palette: {
    primary: {
      main: D_BLUE,
      light: L_BLUE,
    },
    secondary: {
      main: D_GREY,
    },
    error: {
      main: D_ORANGE,
    },
    success: {
      main: D_BLUE,
    },
    accent: {},
    background: {
      paper: L_GREY,
    },
  },
});

export default theme;
