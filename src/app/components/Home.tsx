"use client";

import React from "react";
import { TreeGrid } from "../components/TreeGrid";
import { tree } from "../tree-content";
import { useRouter, useParams } from "next/navigation";
import { findNodeAndThumbnailsFromParams } from "../utils";
import { isLeaf, } from "../types";
import { THUMBNAIL_PADDING_PX, THUMBNAIL_SIZE_PX, ThumbnailBorder } from "../components/ThumbnailBorder";

export default function Home() {
    const router = useRouter();
    const params = useParams();

    const [node, thumbnails] = React.useMemo(() => findNodeAndThumbnailsFromParams(tree, params), [params]);
    const thumbnailOffsetPx = React.useMemo(() => thumbnails.length * THUMBNAIL_SIZE_PX + THUMBNAIL_PADDING_PX, [thumbnails.length]);

    // Redirect to home if node not found
    React.useEffect(() => {
        if (!node) {
            router.replace("/");
        }
    }, [node, router]);

    if (!node) {
        return null; // Optionally, show a loading spinner here
    }

    return (
        <>
            {thumbnails.map((thumbnail, i) => (
                <ThumbnailBorder key={`thumbnail-${thumbnail.slug}`} thumbnail={thumbnail} thumbnailIndex={i} />
            ))}
            {
                isLeaf(node) ? node.page : <TreeGrid rootOrBranch={node} thumbnailOffsetPx={thumbnailOffsetPx} />
            }
        </>
    )

}
