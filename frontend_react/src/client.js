import { createClient } from "@sanity/client";
import imagesUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2025-07-26",
  useCdn: true,
  token: import.meta.env.VITE_SANITY_TOKEN,
});

const builder = imagesUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
