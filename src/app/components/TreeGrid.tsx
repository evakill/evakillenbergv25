"use client";

import React from "react";
import { Branch, Root } from "../types";
import { GridNode } from "./TreeNode";

export const TreeGrid = ({ rootOrBranch }: { rootOrBranch: Root | Branch }) => {
    const gridDimension = React.useMemo(() => {
        const count = Object.keys(rootOrBranch.children).length;
        const dimension = Math.ceil(Math.sqrt(count));
        return dimension;
    }, [Object.keys(rootOrBranch.children).length]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <div className="grid gap-4 aspect-square h-150 w-150 p-8" style={{
                gridTemplateColumns: `repeat(${gridDimension}, 1fr)`,
                gridTemplateRows: `repeat(${gridDimension}, 1fr)`
            }}>
                {Object.values(rootOrBranch.children).map(node => <GridNode key={node.title} node={node} />)}
            </div>
        </div>
    );
}