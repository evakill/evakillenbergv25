"use client";

import React from "react";
import { Thumbnail } from "../types";

export const ThumbnailBorder = ({ thumbnail, size }: { thumbnail: Thumbnail, size: number }) => {

    const thumbnailDisplay = React.useMemo(() => thumbnail.title.toUpperCase(), [thumbnail]);

    const textRef = React.useRef<SVGTextElement>(null);
    const [offset, setOffset] = React.useState(0);

    React.useLayoutEffect(() => {
        if (textRef.current) {
            const bbox = textRef.current.getBBox();
            setOffset(bbox.width);
        }
    }, [thumbnail]);

    return (
        <>
            {/* Hidden SVG for measuring text width */}
            < svg width="0" height="0" style={{ position: "absolute" }
            }>
                <text ref={textRef} fontSize="18" fontWeight="bold">
                    {thumbnailDisplay}
                </text>
            </svg >
            <svg
                width={size}
                height={size}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-1"
                style={{ pointerEvents: "auto" }}
            >
                <defs>
                    <path id={`border-square-${thumbnail.slug}`}
                        d={`M 20 20 H ${size - 20} V ${size - 20} H 20 V 20 Z`}
                    />
                </defs>
                {/* First instance, larger font, as a link */}
                <a
                    href={`/${thumbnail.slug}`}
                    target="_self"
                    style={{ cursor: "pointer" }}
                    className="hover:border"
                >
                    <text fontSize="18" fill="#1e1b4b" fontWeight="bold" >
                        <textPath href={`#border-square-${thumbnail.slug}`} startOffset={10}>
                            {thumbnailDisplay}
                        </textPath>
                    </text>
                    {/* Remaining instances, normal font */}
                    <text fontSize="12" fill="#1e1b4b" opacity="0.5" fontWeight="bold">
                        <textPath href={`#border-square-${thumbnail.slug}`} startOffset={offset + 20}>
                            {Array(99).fill(thumbnailDisplay).join("  ")}
                        </textPath>
                    </text>
                </a>
            </svg>
        </>
    )
}