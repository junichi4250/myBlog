import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "qwhf0bdvm5",
  apiKey: process.env.API_KEY,
});
