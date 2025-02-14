
import { getStoryblokApi } from "@storyblok/react/rsc";

export async function getBlok() {
  const storyblokApi = getStoryblokApi();
  const { data } = await storyblokApi.get(`cdn/stories/home`, { version: "draft"}); 
 
  return {
    story: data ? data.story : false,
    key: data ? data.story.id : false,
  };
}