/** @jsx jsx */
import { jsx, ThemeProvider } from "theme-ui";
import theme from "../theme";
import Nav from "../src/components/nav";
import Footer from "../src/components/footer/footer";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Nav />
        <Component {...pageProps} />
        <Footer />
      </>
    </ThemeProvider>
  );
}
