import "@/styles/globals.css";
import "boostrap/dist/css/bootstrap.min.css";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primary: "#335C7D",
  }
}

export default function App({ Component, pageProps }) {
  return <ThemeProvider theme={theme}> <Component {...pageProps} /></ThemeProvider>
    ;
}
