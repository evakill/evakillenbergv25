"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Thumbnail } from "../types";

export const THUMBNAIL_PADDING_PX = 10;
export const THUMBNAIL_SIZE_PX = 35;
const TEXT_REPEAT = 200;

export const ThumbnailBorder = ({ thumbnail, thumbnailIndex }: { thumbnail: Thumbnail, thumbnailIndex: number }) => {

    // Get the viewport size 
    const [viewportHeightPx, setViewportHeightPx] = React.useState(0);
    const [viewportWidthPx, setViewportWidthPx] = React.useState(0);

    React.useEffect(() => {
        const updateSize = () => {
            setViewportHeightPx(window.innerHeight);
            setViewportWidthPx(window.innerWidth);
        };
        updateSize();
        window.addEventListener("resize", updateSize);
        return () => window.removeEventListener("resize", updateSize);
    }, []);

    const thumbnailDisplay = React.useMemo(() => thumbnail.title.toUpperCase(), [thumbnail]);
    const thumbnailHeightPx = React.useMemo(() => viewportHeightPx - thumbnailIndex * THUMBNAIL_SIZE_PX * 2 - THUMBNAIL_PADDING_PX, [viewportHeightPx, thumbnailIndex]);
    const thumbnailWidthPx = React.useMemo(() => viewportWidthPx - thumbnailIndex * THUMBNAIL_SIZE_PX * 2 - THUMBNAIL_PADDING_PX, [viewportWidthPx, thumbnailIndex]);

    const textRef = React.useRef<SVGTextElement>(null);
    const [offset, setOffset] = React.useState(0);

    React.useLayoutEffect(() => {
        if (textRef.current) {
            const bbox = textRef.current.getBBox();
            setOffset(bbox.width);
        }
    }, [thumbnail]);

    const router = useRouter();

    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault();
        router.push(`/${thumbnail.slug}`);
    };

    return (
        <>
            {/* Hidden SVG for measuring text width */}
            <svg width="0" height="0" style={{ position: "absolute" }}>
                <text ref={textRef} fontSize="18" fontWeight="bold">
                    {thumbnailDisplay} /
                </text>
            </svg>
            <svg
                width={thumbnailWidthPx}
                height={thumbnailHeightPx}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-1"
                style={{ pointerEvents: "auto" }}
            >
                <defs>
                    <path id={`border-square-${thumbnail.slug}`}
                        d={`M 20 20 H ${thumbnailWidthPx - 20} V ${thumbnailHeightPx - 20} H 20 V 20 Z`}
                    />
                </defs>
                {/* Use a group with onClick for client-side navigation */}
                <g
                    onClick={handleClick}
                    style={{ cursor: "pointer" }}
                    className="hover:opacity-80"
                >
                    <text fontSize="18" fill="#1e1b4b" fontWeight="bold" >
                        <textPath href={`#border-square-${thumbnail.slug}`} startOffset={10}>
                            {thumbnailDisplay}
                        </textPath>
                    </text>
                    <text fontSize="12" fill="#1e1b4b" opacity="0.5" fontWeight="bold">
                        <textPath href={`#border-square-${thumbnail.slug}`} startOffset={offset + 20}>
                            {Array(TEXT_REPEAT).fill(thumbnailDisplay).join("  ")}
                        </textPath>
                    </text>
                </g>
            </svg>
        </>
    )
}