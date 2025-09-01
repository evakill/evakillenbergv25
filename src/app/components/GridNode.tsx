"use client";

import { useRouter, useParams } from "next/navigation";
import { Branch, isBranch, Leaf } from "../types";

export const GridNode = ({ node }: { node: Branch | Leaf }) => {
    const router = useRouter();
    const params = useParams();

    const handleClick = () => {
        if (isBranch(node)) {
            const slug = Array.isArray(params.slug) ? params.slug : params.slug ? [params.slug] : [];
            const newSlug = [...slug, node.key];
            router.push("/" + newSlug.join("/"));
        }
    };

    return (
        <div onClick={handleClick} className="hover:scale-101 transition-transform duration-200 cursor-pointer z-10">
            {
                isBranch(node) ? (
                    <div
                        className="flex flex-col gap-3 items-center justify-center rounded aspect-square w-full h-full"
                        key={node.title}
                        style={node.style}
                    >
                        <p className="text-4xl font-bold text-white">{node.title}</p>
                        <p className="text-sm text-white opacity-80 font-italic">[{node.description}]</p>
                    </div>
                ) : <div>{node.content}</div>
            }
        </div>
    );
};