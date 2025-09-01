"use client";

import React, { useRef, useLayoutEffect, useState } from "react";
import { TreeNode } from "../types";
import { GridNode } from "./TreeNode";
import { ThumbnailBorder } from "./ThumbnailBorder";

export const TreeGrid = ({ title, nodes }: { title: string, nodes: TreeNode[] }) => {
    const gridDimension = React.useMemo(() => {
        const count = nodes.length;
        const dimension = Math.ceil(Math.sqrt(count));
        return dimension;
    }, [nodes]);

    return (
        <>
            <ThumbnailBorder thumbnail={title} />
            <div className="flex flex-col items-center justify-center min-h-screen">
                <div className="grid gap-4 aspect-square h-150 w-150 p-8" style={{
                    gridTemplateColumns: `repeat(${gridDimension}, 1fr)`,
                    gridTemplateRows: `repeat(${gridDimension}, 1fr)`
                }}>
                    {nodes.map(node => <GridNode key={node.title} node={node} />)}
                </div>
            </div>
        </>
    );
}