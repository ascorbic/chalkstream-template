import type { Config } from "@netlify/edge-functions";

export { manifestHandler as default } from "https://esm.sh/chalkstream@0.0.5/edge";

export const config: Config = {
  method: "GET",
  path: "/playlist/:session.m3u8",
};
