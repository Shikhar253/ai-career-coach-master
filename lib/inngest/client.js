import { Inngest } from "inngest";

export const inngest = new Inngest({
  id: "career-coach", // Unique app ID
  name: "Career Coach", // App name
  credentials: {
    gemini: {
      apiKey: process.env.GEMINI_API_KEY,
    },
  },
});
