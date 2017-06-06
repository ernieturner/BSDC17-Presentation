import createTheme from "spectacle/lib/themes/default";

const theme = createTheme({
  primary: "white",
  secondary: "#7FC1CA",
  tertiary: "#DADA93",
  quartenary: "#CECECE"
}, {
  primary: "'Source Sans Pro', sans-serif"
});

theme.screen.components.list.listStylePosition = "outside";


export default theme;