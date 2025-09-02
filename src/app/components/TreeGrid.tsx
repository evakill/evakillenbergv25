"use client";

import React from "react";
import { isLeaf, TreeNode } from "../types";
import { GridNode } from "./GridNode";
import { useThumbnails } from "../ThumbnailsContext";
import { THUMBNAIL_PADDING_PX, THUMBNAIL_SIZE_PX } from "../components/ThumbnailBorder";
import { GridLeaf } from "./GridLeaf";

export const TreeGrid = ({ treeNode }: { treeNode: TreeNode }) => {
    const { thumbnails, squareDimensionPx } = useThumbnails();

    const gridDimension = React.useMemo(() => {
        if (isLeaf(treeNode)) return 1;
        const count = Object.keys(treeNode.children).length;
        const dimension = Math.ceil(Math.sqrt(count));
        return dimension;
    }, [Object.keys(isLeaf(treeNode) ? {} : treeNode.children).length]);

    const thumbnailOffsetPx = React.useMemo(() => thumbnails.length * THUMBNAIL_SIZE_PX + THUMBNAIL_PADDING_PX, [thumbnails]);

    if (squareDimensionPx <= 0) {
        return null;
    }

    return (
        <div
            className="flex flex-col items-center justify-center min-h-screen min-w-0 w-full h-full overflow-auto m-auto"
            style={{ padding: `${thumbnailOffsetPx}px`, maxWidth: `${squareDimensionPx}px`, maxHeight: `${squareDimensionPx}px` }}
        >
            <div
                className="grow grid gap-4  min-h-0 min-w-0 h-full w-full overflow-auto"
                style={{
                    gridTemplateColumns: `repeat(${gridDimension}, minmax(0, 1fr))`,
                    gridTemplateRows: `repeat(${gridDimension}, minmax(0, 1fr))`
                }}
            >
                {isLeaf(treeNode) ? (
                    <GridLeaf key={treeNode.key} node={treeNode} />
                ) : (
                    Object.values(treeNode.children).map(node => <GridNode key={node.key} node={node} />)
                )}
            </div>
        </div>
    );
}