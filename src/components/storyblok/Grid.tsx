import { storyblokEditable, StoryblokComponent, SbBlokData } from "@storyblok/react";
 
type GridProps = {
    blok: SbBlokData & { columns: SbBlokData[] };
};

export default function Grid({ blok }: GridProps) {
    return (
        <div className="grid" {...storyblokEditable(blok)}>
            {blok.columns.map((nestedBlok) => (
                <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
            ))}
        </div>
    );
};
 