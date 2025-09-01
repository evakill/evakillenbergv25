import { TreeNode } from "../types";

export const GridNode = ({ node }: { node: TreeNode }) => (
    <div
        className="flex items-center justify-center rounded bg-emerald-500 aspect-square w-full h-full"
        key={node.title}
    >
        <p className="text-3xl font-bold text-white">{node.title}</p>
    </div>
);