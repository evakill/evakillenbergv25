"use client";

import { useRouter, useParams } from "next/navigation";
import { Branch, isBranch, Leaf } from "../types";

export const GridNode = ({ node }: { node: Branch | Leaf }) => {
    const router = useRouter();
    const params = useParams();

    const handleClick = () => {
        const slug = Array.isArray(params.slug) ? params.slug : params.slug ? [params.slug] : [];
        const newSlug = [...slug, node.key];
        router.push("/" + newSlug.join("/"));
    };

    const renderBranchNode = (branchNode: Branch) => {
        return (
            <div className="flex flex-col grow h-full justify-center items-center gap-3 min-w-0 min-h-0 overflow-auto">
                <p className="text-4xl font-bold">{branchNode.title}</p>
                <p className="text-base opacity-90">{branchNode.description}</p>
            </div>
        );
    };

    const renderLeafNode = (leafNode: Leaf) => (
        <div className="flex flex-col justify-center items-center text-center backdrop-blur-xs h-full w-full p-5">
            <p className="text-2xl font-bold">{leafNode.title}</p>
            {leafNode.dates && <p className="text-base italic my-1">{leafNode.dates}</p>}
            <p className="text-base">{leafNode.nodeDescription}</p>
        </div>
    )

    return (
        <div
            key={node.title}
            className="hover:scale-101 transition-transform duration-200 cursor-pointer z-10 rounded min-w-0 min-h-0 overflow-auto text-green-950"
            style={node.style}
            onClick={handleClick}
        >
            {isBranch(node) ? renderBranchNode(node) : renderLeafNode(node)}
        </div>
    );
};