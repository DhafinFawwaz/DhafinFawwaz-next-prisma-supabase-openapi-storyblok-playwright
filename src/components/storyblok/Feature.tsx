import { storyblokEditable } from "@storyblok/react";

type FeatureProps = {
    blok: {
        name: string;
    };
};

export default function Feature({ blok }: FeatureProps) {
    return <div className="column feature" {...storyblokEditable(blok)}>
    {blok.name}
  </div>
}
 