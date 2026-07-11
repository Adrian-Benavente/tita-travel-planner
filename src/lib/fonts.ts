import localFont from "next/font/local";

export const cinzel = localFont({
  src: [
    {
      path: "../fonts/cinzel/cinzel.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/cinzel/cinzel-semibold.woff2",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-cinzel",
  display: "swap",
});

export const montserrat = localFont({
  src: [
    {
      path: "../fonts/montserrat/montserrat.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/montserrat/montserrat-medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/montserrat/montserrat-semibold.woff2",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-montserrat",
  display: "swap",
});

export const allura = localFont({
  src: [
    {
      path: "../fonts/allura/allura.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-allura",
  display: "swap",
});
