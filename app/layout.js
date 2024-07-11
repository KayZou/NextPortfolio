import "./globals.css";
import Theme from "@/components/Theme";
import DarkLight from "@/components/DarkLight";
export const metadata = {
  title: "KayZou",
  description: "Zakaria EL GHAZALI - Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Theme>
          <DarkLight />
          {children}
        </Theme>
      </body>
    </html>
  );
}
