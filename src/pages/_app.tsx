import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Main from "@/components/Main";
import Header from "@/components/Header";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Main>
      <Header />
      <Component {...pageProps} />
    </Main>
  );
}
