"use client";

import React from "react";
import { useThumbnails } from "../ThumbnailsContext";
import { ThumbnailBorder } from "../components/ThumbnailBorder";
import Image from "next/image";

export default function Layout({ children }: { children: React.ReactNode }) {
    const { thumbnails, squareDimensionPx } = useThumbnails();

    const [showIntro, setShowIntro] = React.useState(false);

    return (
        <>
            {thumbnails.map((thumbnail, i) => (
                <ThumbnailBorder key={`${thumbnail.slug.join("/")}`} thumbnail={thumbnail} thumbnailIndex={i} squareDimensionPx={squareDimensionPx} />
            ))}

            {children}
            <Image
                src={`${process.env.NEXT_PUBLIC_ASSET_PREFIX || ""}/mushrooms.png`}
                alt="Mushrooms"
                width={150}
                height={200}
                className="fixed bottom-32 right-24 z-20"
            />
            <Image
                src={`${process.env.NEXT_PUBLIC_ASSET_PREFIX || ""}/mossy-rock.png`}
                alt="Mossy Rock"
                width={500}
                height={400}
                className="fixed -bottom-14 -right-14 z-10"
            />
            <Image
                src={`${process.env.NEXT_PUBLIC_ASSET_PREFIX || ""}/monarch.png`}
                alt="Butterfly"
                width={48}
                height={48}
                className="fixed bottom-44 right-12 z-20"
            />
            <Image
                src={`${process.env.NEXT_PUBLIC_ASSET_PREFIX || ""}/orchid-2.png`}
                alt="Orchid"
                width={300}
                height={200}
                className="fixed top-0 left-0 z-10 hover:scale-105 transition-transform duration-400"
                onClick={() => setShowIntro(!showIntro)}
            />
            {showIntro && <p className="text-base fixed top-50 left-15 w-[200px]">Hi there! This is my portfolio site, created in 2025. Learn more about this site in the <a href="https://github.com/evakill/evakillenbergv25/blob/main/README.md">README</a> and check out some of my other work <a href="https://evakill.github.io">here</a>. Enjoy your wanderings!</p>}


            {/* Flying butteryfly gif
            <Image src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMWcwa3RxOTRzMmpjNzRqdmVrdjRoM3FzbmN0b2ppcWd3N3Yxc2EycCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/akSgUX3xhCUUI0Ws8y/giphy.gif" alt="butterfly gif" className="fixed top-8 right-6" height={64} width={64} /> */}
        </>
    );
}