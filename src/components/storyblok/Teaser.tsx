import { storyblokEditable } from "@storyblok/react";

type TeaserProps = {
    blok: {
        headline: string;
    };
}
 
export default function Teaser({ blok }: TeaserProps) {
    return <h2 {...storyblokEditable(blok)}>{blok.headline}</h2>;
};
 