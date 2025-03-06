import "@/styles/globals.css";
import "@mantine/core/styles.css";
import '@mantine/dates/styles.css';
import type { AppProps } from "next/app";
import QueryProvider from "../utils/providers/QueryProvider/";
import { createTheme, MantineProvider } from "@mantine/core";
import Layout from "@/components/Layout";

const theme = createTheme({
  /** Put your mantine theme override here */
});

export default function App({ Component, pageProps }: AppProps) {

  return (
    <MantineProvider theme={theme}>
      <QueryProvider>
        <Layout>
          <Component {...pageProps} />
          </Layout>
      </QueryProvider>
    </MantineProvider>
  );
}
