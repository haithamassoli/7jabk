import type { MetadataRoute } from "next";

// output: export needs metadata routes pinned static
export const dynamic = "force-static";

// ponytail: metadata route → prerendered to /manifest.webmanifest on static export.
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "حجابك — سِترٌ يليق بكِ",
    short_name: "حجابك",
    description:
      "مشغل أردني للخُمُر والطُرَح والنُقُب والعبايات. اطلبي عبر واتساب والدفع عند الاستلام.",
    lang: "ar",
    dir: "rtl",
    start_url: "/",
    scope: "/",
    display: "standalone",
    orientation: "portrait",
    background_color: "#f4efe6",
    theme_color: "#f4efe6",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
      {
        src: "/icon-maskable.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
