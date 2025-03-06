import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { AppCacheProvider } from "@mui/material-nextjs/v15-pagesRouter";
import QueryProvider from "../utils/providers/QueryProvider/";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppCacheProvider>
      <QueryProvider>
        <Component {...pageProps} />
      </QueryProvider>
    </AppCacheProvider>
  );
}
