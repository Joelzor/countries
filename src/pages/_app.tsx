import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import Main from "@/components/Main";
import Header from "@/components/Header";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <Main>
        <Header />
        <Component {...pageProps} />
      </Main>
    </ThemeProvider>
  );
}
