import "./globals.css";
import { notoTC, roboto } from "../../utils/fonts";

export const metadata = {
  title: "AET 2025",
  description: "AET 2025",
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-Hant" className={`${notoTC.variable} ${roboto.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
};