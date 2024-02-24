import ReduxProvider from "@/store/reduxProvider";
import NavBar from "@/components/NavBar";
import MainNav from "../components/MainNav";
import "../app/globals.css";
import "../components/MainNav";
require("../dotenvConfig");

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en">
        <ReduxProvider>
          <body>
            {/* <NavBar /> */}
            <MainNav />
            {children}
          </body>
        </ReduxProvider>
      </html>
    </>
  );
}
