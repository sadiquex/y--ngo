import { Inter, Outfit } from "next/font/google";
import localFont from "next/font/local";
import "./globals.js";
import StyledComponentsRegistry from "@/lib/registry";
import GlobalStyle from "./globals.js";

const clash = localFont({
  src: "../public/fonts/ClashDisplay-SemiBold.otf",
  display: "swap",
  variable: "--font-clash",
});

// const clash = localFont({
//   src: [
//     {
//       path: "../public/fonts/ClashDisplay-SemiBold.otf",
//       weight: 600,
//       variable: "--font-clash",
//     },
//   ],
// });

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata = {
  title: "Y!",
  description: "Official Website by Y NGO",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${clash.className} ${outfit.variable}`}
      >
        <StyledComponentsRegistry>
          <GlobalStyle />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
