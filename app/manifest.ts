import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Sieciowa gra logiczna — strona projektu",
    short_name: "Gra sieciowa",
    description:
      "Przeglądarkowa gra logiczna: prowadzisz trasy tramwaju, wody i prądu po jednej planszy heksagonalnej.",
    start_url: "/",
    display: "standalone",
    background_color: "#10141a",
    theme_color: "#10141a",
    lang: "pl",
    icons: [
      { src: "/icon", sizes: "32x32", type: "image/png" },
    ],
  };
}
