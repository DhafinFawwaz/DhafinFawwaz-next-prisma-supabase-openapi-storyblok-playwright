"use client"

import { ISbStoryData, StoryblokComponent, useStoryblokState } from "@storyblok/react";

type ClientComponentProps = {
    blok: {
        story: ISbStoryData;
    };
}

export default function PageClient({blok}: ClientComponentProps) {
    const story = useStoryblokState(blok.story);
    if(!story) return <></>
    return <StoryblokComponent blok={story.content} />
}