import "./globals.css";

export const metadata = {
  title: "AET 2025",
  description: "AET 2025",
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh">
      <body>
        {children}
      </body>
    </html>
  );
};