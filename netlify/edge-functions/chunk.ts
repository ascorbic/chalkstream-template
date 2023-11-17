import type { Config } from "@netlify/edge-functions";

export { chunkHandler as default } from "https://esm.sh/chalkstream@0.0.5/edge";

export const config: Config = {
  method: "GET",
  path: "/chunks/:session/:digest.ts",
  cache: "manual",
};
