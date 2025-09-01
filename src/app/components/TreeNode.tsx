import { isBranch, TreeNode } from "../types";

export const GridNode = ({ node }: { node: TreeNode }) => isBranch(node) ? (
    <div
        className="flex flex-col gap-3 items-center justify-center rounded aspect-square w-full h-full"
        key={node.title}
        style={node.style}
    >
        <p className="text-4xl font-bold text-white">{node.title}</p>
        <p className="text-sm text-white opacity-80 font-italic">[{node.description}]</p>
    </div>
) : <div>leaf</div>;