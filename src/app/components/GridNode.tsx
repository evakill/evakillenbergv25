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
                <p className="text-sm opacity-90">{branchNode.description}</p>
            </div>
        );
    };

    const renderLeafNode = (leafNode: Leaf) => (
        <div className="backdrop-blur-xs h-full w-full">
            <p className="text-lg font-bold">{leafNode.title}</p>
            {leafNode.dates && <p className="text-sm italic my-1">{leafNode.dates}</p>}
            <p className="text-sm">{leafNode.shortDescription}</p>
        </div>
    )

    return (
        <div
            key={node.title}
            className="hover:scale-101 transition-transform duration-200 cursor-pointer z-10 rounded aspect-square min-w-0 min-h-0 overflow-auto p-3 text-white"
            style={node.style}
            onClick={handleClick}
        >
            {
                'content' in node ? (
                    <div className="w-full h-full min-w-0 min-h-0 overflow-auto">
                        {node.content}
                    </div>
                ) : isBranch(node) ? renderBranchNode(node) : renderLeafNode(node)
            }
        </div>
    );
};