import "../styles/globals.css";
import type { AppProps } from "next/app";

function ExampleNextJsApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default ExampleNextJsApp;
