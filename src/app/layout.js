import Head from "next/head";
import ReduxProvider from "@/store/reduxProvider";
import NavBar from "@/components/NavBar";

import "../app/globals.css";

export default function RootLayout({ children }) {
  return (
    <>
      {/* <Head>
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
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </Head> */}
      <html lang="en">
        <ReduxProvider>
          <body>
            <NavBar />
            {children}
          </body>
        </ReduxProvider>
      </html>
    </>
  );
}
