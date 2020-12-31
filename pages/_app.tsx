/** @jsx jsx */
import { jsx } from "theme-ui";
import { ThemeProvider } from "theme-ui";
import Head from "next/head";
import theme from "../theme";
import Nav from "../src/components/nav";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider theme={theme}>
        <>
          <Nav />
          <Component {...pageProps} />
        </>
      </ThemeProvider>
    </>
  );
}
