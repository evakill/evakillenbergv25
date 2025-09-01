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
        <div
            key={node.title}
            className="hover:scale-101 transition-transform duration-200 cursor-pointer z-10 rounded aspect-square min-w-0 min-h-0 overflow-auto p-3"
            style={node.style}
            onClick={handleClick}
        >
            {
                'content' in node ? (
                    <div className="w-full h-full min-w-0 min-h-0 overflow-auto">
                        {node.content}
                    </div>
                ) : isBranch(node) ? (
                    <div className="flex flex-col grow h-full justify-center items-center gap-3 min-w-0 min-h-0 overflow-auto">
                        <p className="text-4xl font-bold text-white">{node.title}</p>
                        <p className="text-sm text-white opacity-90">{node.description}</p>
                    </div>
                ) : (
                    <>
                        <p className="text-lg font-bold text-white">{node.title}</p>
                        {node.dates && <p className="text-sm text-white italic my-1">{node.dates}</p>}
                        <p className="text-sm text-white">{node.description}</p>
                        {node.links && node.links.length > 0 && (
                            <div className="mt-2">
                                {node.links.map((link, index) => (
                                    <p key={index} className="text-sm text-white underline break-all mb-1">
                                        <a href={link} target="_blank" rel="noopener noreferrer">
                                            {link}
                                        </a>
                                    </p>
                                ))}
                            </div>
                        )}
                    </>
                )
            }
        </div>
    );
};