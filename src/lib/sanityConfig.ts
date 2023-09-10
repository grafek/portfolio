import createImageBuilder from "@sanity/image-url";
import type { SanityImage } from "../../types";
import { createClient } from "@sanity/client";
export const sanityConfig = {
  dataset: import.meta.env.VITE_SANITY_DATASET || "production",
  projectId: "y1eewb5s",
  apiVersion: "2021-10-21",
  useCdn: import.meta.env.NODE_ENV === "production",
};

export const sanityClient = createClient(sanityConfig);

export const getImgUrl = (src: SanityImage) => {
  return createImageBuilder(sanityClient).image(src);
};
