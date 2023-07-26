import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: true,
  },
  fonts: {
    primary: "Righteous",
  },
  colors: {
    primary: "#FEB032",
    textMuted: "#9EA8B7",
    textBold: "#34373A",
  },
});

export default theme;
