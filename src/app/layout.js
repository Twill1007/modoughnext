import ReduxProvider from "@/store/reduxProvider";
import NavBar from "@/components/NavBar";

import "../app/globals.css";

export default function RootLayout({ children }) {
  return (
    <>
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
