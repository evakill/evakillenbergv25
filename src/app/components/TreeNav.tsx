"use client";

import { useRouter } from "next/navigation";
import { tree } from "../tree-content"
import { getThumbnailTree } from "../utils";
import { ThumbnailNode } from "../types";

export const TreeNav = () => {
    const thumbnailTree = getThumbnailTree(tree);
    const router = useRouter();


    const onClick = (e: React.MouseEvent, node: ThumbnailNode) => {
        e.stopPropagation();
        router.push(`/${node.slug.join("/")}`);
    }

    const renderThumbnailNode = (node: ThumbnailNode) => (
        <div key={node.slug.join("/")} className="">
            <a onClick={(e) => onClick(e, node)} className="text-sm">{node.title.toLowerCase()}</a>
            {node.children && node.children.length > 0 && (
                <div className="ml-4 mt-1">
                    {node.children.map(child => renderThumbnailNode(child))}
                </div>
            )}
        </div>
    )


    return (
        <div className="fixed left-10 top-30 p-2 m-2">
            {renderThumbnailNode(thumbnailTree)}
        </div>
    )
}