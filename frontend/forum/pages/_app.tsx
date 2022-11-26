import "pages-styles/globals.css";
import type { AppProps } from "next/app";
import { useState } from "react";
import PageWrapper from "features/page-wrapper";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PageWrapper>
      <Component {...pageProps} />
    </PageWrapper>
  );
}
