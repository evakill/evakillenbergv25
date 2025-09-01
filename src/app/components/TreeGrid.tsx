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
        <div className="flex flex-col items-center justify-center min-h-screen">
            <div className="bg-white text-2xl px-2" style={{ margin: '-16px', zIndex: 5 }}>{title}</div>
            <div className="grid gap-4 aspect-square h-150 w-150 border-3 border-dotted rounded-sm p-8" style={{
                gridTemplateColumns: `repeat(${gridDimension}, 1fr)`,
                gridTemplateRows: `repeat(${gridDimension}, 1fr)`
            }}>
                {nodes.map(node => <GridNode key={node.title} node={node} />)}
            </div>
        </div>
    );
}