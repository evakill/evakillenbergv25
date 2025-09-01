"use client";

import React from "react";
import { TreeGrid } from "../components/TreeGrid";
import { tree } from "../tree-content";
import { useRouter, useParams } from "next/navigation";
import { findNodeFromParams } from "../utils";
import { isLeaf, } from "../types";
import { THUMBNAIL_PADDING_PX, THUMBNAIL_SIZE_PX } from "../components/ThumbnailBorder";
import { useThumbnails } from "../ThumbnailsContext";

export default function Home() {
    const router = useRouter();
    const params = useParams();

    const { thumbnails } = useThumbnails();

    const node = React.useMemo(() => findNodeFromParams(tree, params), [params]);
    const thumbnailOffsetPx = React.useMemo(() => thumbnails.length * THUMBNAIL_SIZE_PX + THUMBNAIL_PADDING_PX, [thumbnails]);

    // Redirect to home if node not found
    React.useEffect(() => {
        if (!node) {
            router.replace("/");
        }
    }, [node, router]);

    if (!node) {
        return null; // Optionally, show a loading spinner here
    }

    return (isLeaf(node) ? node.page : <TreeGrid rootOrBranch={node} thumbnailOffsetPx={thumbnailOffsetPx} />
    )

}
