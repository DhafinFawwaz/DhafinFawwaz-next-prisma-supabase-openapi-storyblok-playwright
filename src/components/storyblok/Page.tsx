import { storyblokEditable, StoryblokComponent, SbBlokData } from "@storyblok/react";

type PageProps = {
    blok: SbBlokData & { body: SbBlokData[] };
};

export default function Page({ blok }: PageProps) {
    if(!blok.body) return <></>
    return <main {...storyblokEditable(blok)}>
    {blok.body.map((nestedBlok) => (
      <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
    ))}
  </main>
} 
 