import "./globals.css";
import ReduxProvider from "@/store/reduxProvider";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ReduxProvider>
        <body>{children}</body>
      </ReduxProvider>
    </html>
  );
}
