import localFont from "next/font/local";

export const proximaNova = localFont({
  src: [
    {
      path: "./fonts/Fontspring-DEMO-proximanova-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Fontspring-DEMO-proximanovacond-bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Fontspring-DEMO-proximanovacond-mediumit.woff2",
      weight: "500",
      style: "italic",
    },
  ],
  variable: "--font-proxima-nova",
  display: "swap",
});
