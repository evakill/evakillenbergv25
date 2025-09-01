"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Thumbnail } from "../types";

export const THUMBNAIL_PADDING_PX = 10;
export const THUMBNAIL_SIZE_PX = 35;
const TEXT_REPEAT = 200;

interface ThumbnailBorderProps {
    thumbnail: Thumbnail;
    thumbnailIndex: number;
    squareDimensionPx: number;
}

function areEqual(prevProps: ThumbnailBorderProps, nextProps: ThumbnailBorderProps) {
    // Deep compare slug arrays and other relevant props
    const areEqual =
        prevProps.thumbnailIndex === nextProps.thumbnailIndex &&
        prevProps.thumbnail.title === nextProps.thumbnail.title &&
        JSON.stringify(prevProps.thumbnail.slug) === JSON.stringify(nextProps.thumbnail.slug) &&
        prevProps.squareDimensionPx !== 0 && prevProps.squareDimensionPx === nextProps.squareDimensionPx

    return areEqual;
}

export const ThumbnailBorder = React.memo(function ThumbnailBorder({ thumbnail, thumbnailIndex, squareDimensionPx }: ThumbnailBorderProps) {

    const thumbnailDisplay = React.useMemo(() => thumbnail.title.toUpperCase(), [thumbnail]);

    const textRef = React.useRef<SVGTextElement>(null);
    const [offset, setOffset] = React.useState(0);

    React.useLayoutEffect(() => {
        if (textRef.current) {
            const bbox = textRef.current.getBBox();
            setOffset(bbox.width + 20);
        }
    }, [thumbnail]);

    const router = useRouter();

    const pathname = React.useMemo(() => `/${thumbnail.slug.join("/")}`, [thumbnail.slug]);

    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault();
        router.push(pathname);
    };

    const size = squareDimensionPx - (thumbnailIndex * THUMBNAIL_SIZE_PX * 2) - THUMBNAIL_PADDING_PX;

    return (
        <>
            {/* Hidden SVG for measuring text width */}
            <svg width="0" height="0" style={{ position: "absolute" }}>
                <text ref={textRef} fontSize="18" fontWeight="bold">
                    {thumbnailDisplay} /
                </text>
            </svg>
            <svg
                width={size}
                height={size}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-1"
                style={{ pointerEvents: "auto" }}
            >
                <defs>
                    <path id={`border-square-${pathname}`}
                        d={`M 20 20 H ${size - 20} V ${size - 20} H 20 V 20 Z`}
                    />
                </defs>
                {/* Use a group with onClick for client-side navigation */}
                <g
                    onClick={handleClick}
                    style={{ cursor: "pointer" }}
                    className={`hover:opacity-80`}
                >
                    <text fontSize="18" fill="#1e1b4b" fontWeight="bold" >
                        <textPath href={`#border-square-${pathname}`} startOffset={10}>
                            {thumbnailDisplay} /
                        </textPath>
                    </text>
                    <text fontSize="12" fill="#1e1b4b" opacity="0.5" fontWeight="bold">
                        <textPath href={`#border-square-${pathname}`} startOffset={offset}>
                            {Array(TEXT_REPEAT).fill(thumbnailDisplay).join("  ")}
                        </textPath>
                    </text>
                </g>
            </svg >
        </>
    )
}, areEqual);