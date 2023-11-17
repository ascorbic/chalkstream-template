import type { Config } from "@netlify/edge-functions";

export { ingestHandler as default } from "https://esm.sh/chalkstream@0.0.5/edge";

export const config: Config = {
  method: "PUT",
  path: "/ingest/:session/:digest.ts",
};
