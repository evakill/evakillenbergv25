"use client";

import React, { useRef, useLayoutEffect, useState } from "react";

export const ThumbnailBorder = ({ thumbnail }: { thumbnail: string }) => {

    const textRef = useRef<SVGTextElement>(null);
    const [offset, setOffset] = useState(0);

    useLayoutEffect(() => {
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
                <text ref={textRef} fontSize="24" fontWeight="bold">
                    {thumbnail}
                </text>
            </svg >
            <svg
                width="670"
                height="670"
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-20"
            >
                <defs>
                    <path id="border-square"
                        d="M 20 20 H 650 V 650 H 20 V 20 Z"
                    />
                </defs>
                {/* First instance, larger font */}
                <text fontSize="24" fill="#1e1b4b" fontWeight="bold">
                    <textPath href="#border-square">
                        {thumbnail}
                    </textPath>
                </text>
                {/* Remaining instances, normal font */}
                <text fontSize="14" fill="#1e1b4b" opacity="0.5" fontWeight="bold">
                    <textPath href="#border-square" startOffset={offset + 5}>
                        {Array(99).fill(thumbnail).join("  ")}
                    </textPath>
                </text>
            </svg>
        </>
    )
}