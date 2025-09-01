import { isBranch, TreeNode } from "../types";

export const GridNode = ({ node }: { node: TreeNode }) => isBranch(node) ? (
    <div
        className="flex items-center justify-center rounded aspect-square w-full h-full"
        key={node.title}
        style={node.style}
    >
        <p className="text-3xl font-bold text-white">{node.title}</p>
    </div>
) : <div>leaf</div>;