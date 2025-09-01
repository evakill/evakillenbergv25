"use client";

import React from "react";
import { Branch, Root } from "../types";
import { GridNode } from "./GridNode";
import { useThumbnails } from "../ThumbnailsContext";
import { THUMBNAIL_PADDING_PX, THUMBNAIL_SIZE_PX } from "../components/ThumbnailBorder";

export const TreeGrid = ({ rootOrBranch }: { rootOrBranch: Root | Branch }) => {
    const { thumbnails, squareDimensionPx } = useThumbnails();

    const gridDimension = React.useMemo(() => {
        const count = Object.keys(rootOrBranch.children).length;
        const dimension = Math.ceil(Math.sqrt(count));
        return dimension;
    }, [Object.keys(rootOrBranch.children).length]);

    const thumbnailOffsetPx = React.useMemo(() => thumbnails.length * THUMBNAIL_SIZE_PX + THUMBNAIL_PADDING_PX, [thumbnails]);

    if (squareDimensionPx <= 0) {
        return null;
    }

    return (
        <div
            className="flex flex-col items-center justify-center min-h-screen min-w-0 w-full h-full overflow-hidden m-auto"
            style={{ padding: `${thumbnailOffsetPx}px`, maxWidth: `${squareDimensionPx}px`, maxHeight: `${squareDimensionPx}px` }}
        >
            <div
                className="grow grid gap-4 aspect-square min-h-0 min-w-0 overflow-hidden"
                style={{
                    gridTemplateColumns: `repeat(${gridDimension}, minmax(0, 1fr))`,
                    gridTemplateRows: `repeat(${gridDimension}, minmax(0, 1fr))`
                }}
            >
                {Object.values(rootOrBranch.children).map(node => <GridNode key={node.title} node={node} />)}
            </div>
        </div>
    );
}