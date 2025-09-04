"use client";

import React from "react";
import { TreeGrid } from "../components/TreeGrid";
import { tree } from "../tree-content";
import { useRouter, useParams } from "next/navigation";
import { findNodeFromParams } from "../utils";

export default function Home() {
    const router = useRouter();
    const params = useParams();

    const node = React.useMemo(() => findNodeFromParams(tree, params), [params]);

    // Redirect to home if node not found
    React.useEffect(() => {
        if (!node) {
            router.replace("/");
        }
    }, [node, router]);

    if (!node) {
        return null; // Optionally, show a loading spinner here
    }

    return <>
        <TreeGrid treeNode={node} />
    </>

}
