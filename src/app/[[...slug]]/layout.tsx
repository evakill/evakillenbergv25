"use client";

import React from "react";
import { useThumbnails } from "../ThumbnailsContext";
import { ThumbnailBorder } from "../components/ThumbnailBorder";

export default function Layout({ children }: { children: React.ReactNode }) {
    const { thumbnails, squareDimensionPx } = useThumbnails();

    return (
        <>
            {thumbnails.map((thumbnail, i) => (
                <ThumbnailBorder key={`${thumbnail.slug.join("/")}`} thumbnail={thumbnail} thumbnailIndex={i} squareDimensionPx={squareDimensionPx} />
            ))}
            {children}
        </>
    );
}