import Head from "next/head";
import ReduxProvider from "@/store/reduxProvider";
import "../app/globals.css";

export default function RootLayout({ children }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700&display=swap"
        />
      </Head>
      <html lang="en">
        <ReduxProvider>
          <body>{children}</body>
        </ReduxProvider>
      </html>
    </>
  );
}
