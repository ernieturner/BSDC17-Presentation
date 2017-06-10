import createTheme from "spectacle/lib/themes/default";

const theme = createTheme({
  primary: "white",
  secondary: "#EE2E2A",
  tertiary: "#506774",
  quartenary: "#BEBEBD",
  base: "#2A2A2A"
}, {
  primary: "'proxima-nova',sans-serif"
});

theme.screen.components.list.listStylePosition = "outside";


export default theme;