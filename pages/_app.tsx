import GlobalStyle from "@/styles/global";
import Variables from "@/styles/variables";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Variables />
      <Component {...pageProps} />
    </>
  );
}
