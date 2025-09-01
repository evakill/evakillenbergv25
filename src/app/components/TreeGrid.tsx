import React from "react";
import { TreeNode } from "../types";
import { GridNode } from "./TreeNode";

export const TreeGrid = ({ title, nodes }: { title: string, nodes: TreeNode[] }) => {

    const gridDimension = React.useMemo(() => {
        const count = nodes.length;
        const dimension = Math.ceil(Math.sqrt(count));
        return dimension;
    }, [nodes]);

    return (
        <>
            <div className="flex flex-col items-center justify-center min-h-screen">
                <div className="grid gap-4 aspect-square h-150 w-150 p-8" style={{
                    gridTemplateColumns: `repeat(${gridDimension}, 1fr)`,
                    gridTemplateRows: `repeat(${gridDimension}, 1fr)`
                }}>
                    {nodes.map(node => <GridNode key={node.title} node={node} />)}
                </div>

            </div>
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
                <text fontSize="14" fill="#484848ff" fontWeight="bold">
                    <textPath href="#border-square" >
                        {Array(100).fill(title).join(" | ")}
                    </textPath>
                </text>
            </svg>
        </>
    );
}