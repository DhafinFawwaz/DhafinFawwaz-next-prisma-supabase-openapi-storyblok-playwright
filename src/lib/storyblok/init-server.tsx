import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import { components } from "./components";

storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_API_TOKEN,
  use: [apiPlugin],
  apiOptions: {
    region: "ap"
  },
  components
});